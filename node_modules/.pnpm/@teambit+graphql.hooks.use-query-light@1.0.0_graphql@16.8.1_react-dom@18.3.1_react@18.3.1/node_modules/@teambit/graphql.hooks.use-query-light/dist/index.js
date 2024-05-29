"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQueryServer = exports.QueryServerProvider = exports.gql = exports.useQuery = void 0;
var use_query_light_1 = require("./use-query-light");
Object.defineProperty(exports, "useQuery", { enumerable: true, get: function () { return use_query_light_1.useQuery; } });
Object.defineProperty(exports, "gql", { enumerable: true, get: function () { return use_query_light_1.gql; } });
var server_context_1 = require("./server-context");
Object.defineProperty(exports, "QueryServerProvider", { enumerable: true, get: function () { return server_context_1.QueryServerProvider; } });
Object.defineProperty(exports, "useQueryServer", { enumerable: true, get: function () { return server_context_1.useQueryServer; } });
//# sourceMappingURL=index.js.map