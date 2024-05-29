"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nested = exports.VerticalExample = exports.HorizontalExample = exports.Preview = void 0;
const react_1 = __importDefault(require("react"));
const react_playground_1 = require("./react-playground");
const codeString = `<div>hello playground</div>`;
const longFunction = `
() => {
  const Button = ({ children }) => (
      <button >{children}</button>
  );
  const scope = { Button };
  const code = "<Button>my first playground button</Button>";
      
  return (
    <div>
      <h2>title</h2>      
      <Button>inline button</Button>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis, lorem in gravida feugiat, ante justo mattis leo, a vestibulum diam enim vel eros. Sed ipsum nunc, mattis quis lobortis vel, pulvinar quis lacus. Etiam et rhoncus lacus, et rutrum sem. Mauris sollicitudin felis dolor, eget gravida tortor ultrices at. Quisque vitae laoreet est. Curabitur sed lorem nibh. Nullam ultricies mi ac tempus convallis.
      </p>

      <p>
        Duis ornare libero orci, ut posuere nibh posuere ut. Etiam cursus bibendum efficitur. Aenean ac cursus leo. Nullam pellentesque elementum massa, quis posuere libero dignissim vel. Proin viverra sapien vitae augue feugiat, iaculis ultrices enim venenatis. Donec interdum diam vel ullamcorper sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor mi eu lorem vulputate, sed mattis risus mattis. Curabitur tincidunt id urna sed varius. Phasellus rhoncus, velit quis venenatis faucibus, urna metus suscipit sem, et convallis lorem orci at lacus. Sed quis elementum felis. Phasellus sollicitudin ultricies hendrerit. Etiam tempus ipsum a iaculis finibus. Proin fringilla arcu ut nisl maximus, et sodales massa interdum. Maecenas eget blandit tortor.
      </p>
    </div>
  );
}`;
const nested = `
() => {
  const Button = ({ children }) => (
      <button style={{ background: 'lightgreen', border: 'none' }}>{children}</button>
  );
  const scope = { Button };
  const code = "<Button>my first playground button</Button>";
      
  return <div style={{ width: 400, height: 400}}>
    <Playground code={code} scope={scope}/>
  </div>
}
`;
const Preview = () => {
    return (react_1.default.createElement("div", { style: { height: 400, width: 600 } },
        react_1.default.createElement(react_playground_1.Playground, { code: codeString })));
};
exports.Preview = Preview;
const HorizontalExample = () => {
    return (react_1.default.createElement("div", { style: { height: 400, width: 600 } },
        react_1.default.createElement(react_playground_1.Playground, { code: longFunction })));
};
exports.HorizontalExample = HorizontalExample;
const VerticalExample = () => {
    return (react_1.default.createElement("div", { style: { height: 450, width: 400 } },
        react_1.default.createElement(react_playground_1.Playground, { code: longFunction })));
};
exports.VerticalExample = VerticalExample;
const Nested = () => {
    const scope = { Playground: react_playground_1.Playground };
    return (react_1.default.createElement("div", { style: { height: 400, width: 600 } },
        "(currently broken, hover-splitter breaks when in nested in another split-spane)",
        react_1.default.createElement(react_playground_1.Playground, { code: nested, scope: scope })));
};
exports.Nested = Nested;
//# sourceMappingURL=react-playground.composition.js.map