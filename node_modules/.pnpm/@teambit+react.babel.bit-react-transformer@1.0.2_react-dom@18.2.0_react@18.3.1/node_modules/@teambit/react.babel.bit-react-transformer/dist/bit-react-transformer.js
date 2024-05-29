"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBitReactTransformer = void 0;
const fs_extra_1 = require("fs-extra");
const memoizee_1 = __importDefault(require("memoizee"));
const react_ui_highlighter_component_metadata_bit_component_meta_1 = require("@teambit/react.ui.highlighter.component-metadata.bit-component-meta");
const meta_from_pkg_json_1 = require("./meta-from-pkg-json");
const helpers_1 = require("./helpers");
const PLUGIN_NAME = 'bit-react-transformer';
/**
 * the bit babel transformer adds a `componentId` property on React components
 * for showcase and debugging purposes.
 */
function createBitReactTransformer(api, opts) {
    let componentMap;
    const types = api.types;
    function setMap(mapPath) {
        try {
            const json = (0, fs_extra_1.readFileSync)(mapPath, 'utf-8');
            componentMap = JSON.parse(json);
        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.error('bit-react-transformer: error reading map file ', e);
        }
    }
    const extractMeta = (0, memoizee_1.default)((filePath) => (componentMap === null || componentMap === void 0 ? void 0 : componentMap[filePath]) || (0, meta_from_pkg_json_1.metaFromPackageJson)(filePath), 
    // optimize for string input:
    { primitive: true });
    function addComponentId(path, filePath, identifier) {
        // add meta property, e.g. `Button.__bit_component = __bit_component;`
        const componentIdStaticProp = types.expressionStatement(types.assignmentExpression('=', types.memberExpression(types.identifier(identifier), types.identifier(react_ui_highlighter_component_metadata_bit_component_meta_1.componentMetaField)), types.identifier(react_ui_highlighter_component_metadata_bit_component_meta_1.componentMetaField)));
        path.insertAfter(componentIdStaticProp);
    }
    const visitor = {
        // visits the start of the file, right after `"use strict"`
        Program(path, state) {
            // // Do not use .stop() or .skip(), it will stop all other babel plugins as well.
            const filename = state.file.opts.filename;
            if (!filename)
                return;
            const meta = extractMeta(filename);
            if (!meta)
                return;
            const deceleration = metaToDeceleration(meta, types);
            // inserts to the top of file
            path.unshiftContainer('body', deceleration);
        },
        FunctionDeclaration(path, state) {
            var _a;
            // if (!isFunctionComponent(path.node.body)) return;
            const name = (_a = path.node.id) === null || _a === void 0 ? void 0 : _a.name;
            const filename = state.file.opts.filename;
            if (!name || !filename || !extractMeta(filename))
                return;
            addComponentId(path, filename, name);
        },
        VariableDeclarator(path, state) {
            const filename = state.file.opts.filename;
            if (!filename || !extractMeta(filename))
                return;
            const node = path.node;
            if (!node.init)
                return;
            if (node.id.type !== 'Identifier')
                return;
            const id = node.id;
            switch (node.init.type) {
                case 'FunctionExpression':
                    if ((0, helpers_1.isFunctionComponent)(node.init.body)) {
                        addComponentId(path.parentPath, filename, id.name);
                    }
                    break;
                case 'ArrowFunctionExpression':
                    addComponentId(path.parentPath, filename, id.name);
                    break;
                // handle forwardRef
                case 'CallExpression':
                    // direct forwardRef, e.g `const Comp = forwardRef(() => <div>comp</div>);`
                    if (node.init.callee.type === 'Identifier' && node.init.callee.name === 'forwardRef')
                        addComponentId(path.parentPath, filename, id.name);
                    // react.forwardRef, e.g `const Comp = React.forwardRef(() => <div>comp</div>);`
                    if (node.init.callee.type === 'MemberExpression' &&
                        node.init.callee.property.type === 'Identifier' &&
                        node.init.callee.property.name === 'forwardRef') {
                        addComponentId(path.parentPath, filename, id.name);
                    }
                    break;
                default:
                    break;
            }
        },
        ClassDeclaration(path, state) {
            const filename = state.file.opts.filename;
            if (!filename || !extractMeta(filename))
                return;
            if (!(0, helpers_1.isClassComponent)(path.node))
                return;
            const name = path.node.id.name;
            addComponentId(path, filename, name);
        },
    };
    const Plugin = {
        name: PLUGIN_NAME,
        visitor,
        pre() {
            const filepath = opts.componentFilesPath;
            if (filepath && !componentMap)
                setMap(filepath);
        },
        post() {
            // reset memoization, in case any file changes between runs
            extractMeta.clear();
        },
    };
    return Plugin;
}
exports.createBitReactTransformer = createBitReactTransformer;
function metaToDeceleration(meta, types) {
    const properties = [
        // e.g. "id": "teambit.base-ui/input/button@0.6.10"
        types.objectProperty(types.identifier(react_ui_highlighter_component_metadata_bit_component_meta_1.componentMetaProperties.componentId), types.stringLiteral(meta.id)),
        // e.g. "homepage": "https://bit.dev/teambit/base-ui/input/button"
        meta.homepage &&
            types.objectProperty(types.identifier(react_ui_highlighter_component_metadata_bit_component_meta_1.componentMetaProperties.homepageUrl), types.stringLiteral(meta.homepage)),
        // "exported": true / false
        meta.exported &&
            types.objectProperty(types.identifier(react_ui_highlighter_component_metadata_bit_component_meta_1.componentMetaProperties.isExported), types.booleanLiteral(meta.exported)),
    ].filter((x) => x);
    // variable deceleration, e.g. `var __bit_component = { ... };`
    const deceleration = types.variableDeclaration('var', [
        types.variableDeclarator(types.identifier(react_ui_highlighter_component_metadata_bit_component_meta_1.componentMetaField), types.objectExpression(properties)),
    ]);
    return deceleration;
}
//# sourceMappingURL=bit-react-transformer.js.map