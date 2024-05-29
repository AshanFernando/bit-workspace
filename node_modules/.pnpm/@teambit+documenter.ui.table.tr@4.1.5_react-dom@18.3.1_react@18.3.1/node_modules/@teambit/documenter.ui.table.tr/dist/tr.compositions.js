"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrExample = void 0;
const react_1 = __importDefault(require("react"));
const documenter_ui_table_td_1 = require("@teambit/documenter.ui.table.td");
const tr_1 = require("./tr");
const TrExample = () => {
    return (react_1.default.createElement("table", null,
        react_1.default.createElement("tbody", null,
            react_1.default.createElement(tr_1.Tr, null,
                react_1.default.createElement(documenter_ui_table_td_1.Td, null, "Tr text"),
                react_1.default.createElement(documenter_ui_table_td_1.Td, null, "Tr text"),
                react_1.default.createElement(documenter_ui_table_td_1.Td, null, "Tr text")))));
};
exports.TrExample = TrExample;
//# sourceMappingURL=tr.compositions.js.map