"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeSnippetExample = void 0;
const react_1 = __importDefault(require("react"));
const code_snippet_1 = require("./code-snippet");
const codeString = `export function Anchor(props: AnchorProps) {
  return (
    <a {...props} id={props.href} href={href} className={styles.anchor}>
      <Icon of="anchor" className={styles.anchorIcon}></Icon>
    </a>
  );
}`;
const CodeSnippetExample = () => {
    return react_1.default.createElement(code_snippet_1.CodeSnippet, { "data-testid": "test-code-snippet" }, codeString);
};
exports.CodeSnippetExample = CodeSnippetExample;
//# sourceMappingURL=code-snippet.composition.js.map