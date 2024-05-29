"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
const react_1 = __importDefault(require("react"));
const use_query_light_1 = require("./use-query-light");
const server_context_1 = require("./server-context");
const serverUrl = 'https://countries.trevorblades.com/';
const query = (0, use_query_light_1.gql) `
  query {
    countries {
      name
    }
  }
`;
const Preview = () => {
    return (react_1.default.createElement(server_context_1.QueryServerProvider, { value: serverUrl },
        react_1.default.createElement(CountriesGql, null)));
};
exports.Preview = Preview;
const CountriesGql = () => {
    const { loading, data, error } = (0, use_query_light_1.useQuery)(query);
    if (error)
        return react_1.default.createElement("div", null,
            "Error! ",
            error.toString());
    if (loading)
        return react_1.default.createElement("div", null, "loading...");
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null, "Data:"),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null, JSON.stringify(data))));
};
//# sourceMappingURL=use-query-light.compositions.js.map