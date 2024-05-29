"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchDocs = void 0;
const react_1 = require("react");
const graphql_hooks_use_query_light_1 = require("@teambit/graphql.hooks.use-query-light");
const GQL_SERVER = '/graphql';
const DOCS_QUERY = (0, graphql_hooks_use_query_light_1.gql) `
  query getComponentDocs($id: String!) {
    getHost {
      id # for gql caching
      getDocs(id: $id) {
        abstract
        properties {
          name
          description
          required
          type
          default: defaultValue {
            value
          }
        }
      }
    }
  }
`;
function useFetchDocs(componentId) {
    const variables = { id: componentId };
    const request = (0, graphql_hooks_use_query_light_1.useQuery)(DOCS_QUERY, { variables, server: GQL_SERVER });
    const result = (0, react_1.useMemo)(() => {
        var _a;
        return Object.assign(Object.assign({}, request), { data: request.data && { docs: (_a = request.data) === null || _a === void 0 ? void 0 : _a.getHost.getDocs } });
    }, [request]);
    return result;
}
exports.useFetchDocs = useFetchDocs;
//# sourceMappingURL=use-fetch-docs.js.map