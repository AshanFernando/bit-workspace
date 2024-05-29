"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableExample = void 0;
const react_1 = __importDefault(require("react"));
const documenter_ui_table_td_1 = require("@teambit/documenter.ui.table.td");
const documenter_ui_table_tr_1 = require("@teambit/documenter.ui.table.tr");
const base_table_1 = require("./base-table");
const TableExample = () => {
    return (react_1.default.createElement(base_table_1.Table, null,
        react_1.default.createElement("tbody", null,
            react_1.default.createElement(documenter_ui_table_tr_1.Tr, null,
                react_1.default.createElement("th", null, "title1"),
                react_1.default.createElement("th", null, "title2"),
                react_1.default.createElement("th", null, "title3")),
            react_1.default.createElement(documenter_ui_table_tr_1.Tr, null,
                react_1.default.createElement(documenter_ui_table_td_1.Td, null, "cell"),
                react_1.default.createElement(documenter_ui_table_td_1.Td, null, "cell"),
                react_1.default.createElement(documenter_ui_table_td_1.Td, null, "cell")),
            react_1.default.createElement(documenter_ui_table_tr_1.Tr, null,
                react_1.default.createElement(documenter_ui_table_td_1.Td, null, "cell"),
                react_1.default.createElement(documenter_ui_table_td_1.Td, null, "cell"),
                react_1.default.createElement(documenter_ui_table_td_1.Td, null, "cell")))));
};
exports.TableExample = TableExample;
//# sourceMappingURL=base-table.compositions.js.map