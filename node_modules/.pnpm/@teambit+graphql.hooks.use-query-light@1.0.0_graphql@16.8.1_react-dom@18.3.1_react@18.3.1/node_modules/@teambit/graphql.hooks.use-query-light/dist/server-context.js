"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQueryServer = exports.QueryServerProvider = void 0;
const react_1 = require("react");
const QueryServerCtx = (0, react_1.createContext)('/graphql');
exports.QueryServerProvider = QueryServerCtx.Provider;
const useQueryServer = () => (0, react_1.useContext)(QueryServerCtx);
exports.useQueryServer = useQueryServer;
//# sourceMappingURL=server-context.js.map