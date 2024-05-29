"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockQuoteExample = void 0;
const react_1 = __importDefault(require("react"));
const block_quote_1 = require("./block-quote");
const BlockQuoteExample = () => {
    return (react_1.default.createElement(block_quote_1.BlockQuote, null,
        "block quote level 1",
        react_1.default.createElement(block_quote_1.BlockQuote, null, "block quote level 2"),
        react_1.default.createElement(block_quote_1.BlockQuote, null, "block quote level 2"),
        react_1.default.createElement(block_quote_1.BlockQuote, null,
            "block quote level 2",
            react_1.default.createElement(block_quote_1.BlockQuote, null, "block quote level 3"),
            react_1.default.createElement(block_quote_1.BlockQuote, null, "block quote level 3"),
            react_1.default.createElement(block_quote_1.BlockQuote, null, "block quote level 3"))));
};
exports.BlockQuoteExample = BlockQuoteExample;
//# sourceMappingURL=block-quote.composition.js.map