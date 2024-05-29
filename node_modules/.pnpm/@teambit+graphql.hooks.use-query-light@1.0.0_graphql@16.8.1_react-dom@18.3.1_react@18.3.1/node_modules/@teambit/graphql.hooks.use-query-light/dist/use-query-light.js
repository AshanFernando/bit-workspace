"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuery = exports.gql = void 0;
const react_1 = require("react");
const graphql_request_1 = require("graphql-request");
const use_deep_compare_1 = require("use-deep-compare");
const server_context_1 = require("./server-context");
var graphql_request_2 = require("graphql-request");
Object.defineProperty(exports, "gql", { enumerable: true, get: function () { return graphql_request_2.gql; } });
function useQuery(query, { variables, server, headers } = {}) {
    const mountedRef = (0, react_1.useRef)(true);
    const [state, setState] = (0, react_1.useState)({ loading: false });
    const stableVariables = (0, use_deep_compare_1.useDeepCompareMemo)(() => variables, [variables]);
    const ctxServer = (0, server_context_1.useQueryServer)();
    (0, react_1.useEffect)(() => {
        return () => {
            mountedRef.current = false;
        };
    }, []);
    (0, react_1.useEffect)(() => {
        const controller = createAborter();
        setState((obj) => (Object.assign(Object.assign({}, obj), { loading: true, error: undefined })));
        (0, graphql_request_1.request)({
            url: server || ctxServer,
            document: query,
            variables: stableVariables,
            requestHeaders: headers,
            // @ts-ignore
            signal: controller === null || controller === void 0 ? void 0 : controller.signal,
        })
            .then((result) => {
            if (mountedRef.current)
                setState((obj) => (Object.assign(Object.assign({}, obj), { data: result, loading: false })));
        })
            .catch((e) => {
            var _a, _b, _c, _d;
            const isAborted = e &&
                (e.type === 'aborted' ||
                    ((_b = (_a = e.message).toLowerCase) === null || _b === void 0 ? void 0 : _b.call(_a)) === 'aborted' ||
                    ((_d = (_c = e.name).toLowerCase) === null || _d === void 0 ? void 0 : _d.call(_c)) === 'aborterror');
            if (mountedRef.current)
                setState((obj) => (Object.assign(Object.assign({}, obj), { error: isAborted ? undefined : e, loading: false })));
        });
        return () => {
            controller === null || controller === void 0 ? void 0 : controller.abort();
        };
    }, [query, stableVariables]);
    return state;
}
exports.useQuery = useQuery;
function createAborter() {
    if (typeof AbortController === 'undefined')
        return undefined;
    return new AbortController();
}
//# sourceMappingURL=use-query-light.js.map