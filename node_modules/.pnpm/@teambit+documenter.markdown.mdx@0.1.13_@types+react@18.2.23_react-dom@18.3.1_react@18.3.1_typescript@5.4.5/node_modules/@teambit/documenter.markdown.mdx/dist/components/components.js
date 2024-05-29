"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMdxComponents = void 0;
const documenter_ui_block_quote_1 = require("@teambit/documenter.ui.block-quote");
const documenter_ui_bold_1 = require("@teambit/documenter.ui.bold");
const documenter_routing_external_link_1 = require("@teambit/documenter.routing.external-link");
const documenter_markdown_heading_1 = require("@teambit/documenter.markdown.heading");
const documenter_ui_image_1 = require("@teambit/documenter.ui.image");
const documenter_ui_inline_code_1 = require("@teambit/documenter.ui.inline-code");
const documenter_ui_italic_1 = require("@teambit/documenter.ui.italic");
const documenter_ui_ol_1 = require("@teambit/documenter.ui.ol");
const documenter_ui_paragraph_1 = require("@teambit/documenter.ui.paragraph");
const documenter_ui_separator_1 = require("@teambit/documenter.ui.separator");
const documenter_markdown_hybrid_live_code_snippet_1 = require("@teambit/documenter.markdown.hybrid-live-code-snippet");
const documenter_ui_sup_1 = require("@teambit/documenter.ui.sup");
const documenter_ui_table_base_table_1 = require("@teambit/documenter.ui.table.base-table");
const documenter_ui_table_td_1 = require("@teambit/documenter.ui.table.td");
const documenter_ui_table_tr_1 = require("@teambit/documenter.ui.table.tr");
const documenter_ui_ul_1 = require("@teambit/documenter.ui.ul");
exports.defaultMdxComponents = {
    h1: documenter_markdown_heading_1.h1,
    h2: documenter_markdown_heading_1.h2,
    h3: documenter_markdown_heading_1.h3,
    h4: documenter_markdown_heading_1.h4,
    h5: documenter_markdown_heading_1.h5,
    h6: documenter_markdown_heading_1.h6,
    p: documenter_ui_paragraph_1.Paragraph,
    code: documenter_markdown_hybrid_live_code_snippet_1.Snippet,
    a: documenter_routing_external_link_1.ExternalLink,
    inlineCode: documenter_ui_inline_code_1.InlineCode,
    ol: documenter_ui_ol_1.Ol,
    ul: documenter_ui_ul_1.Ul,
    hr: documenter_ui_separator_1.Separator,
    thematicBreak: documenter_ui_separator_1.Separator,
    img: documenter_ui_image_1.Image,
    strong: documenter_ui_bold_1.Bold,
    em: documenter_ui_italic_1.Italic,
    pre: ({ children }) => children,
    sup: documenter_ui_sup_1.Sup,
    table: documenter_ui_table_base_table_1.Table,
    tr: documenter_ui_table_tr_1.Tr,
    td: documenter_ui_table_td_1.Td,
    blockquote: documenter_ui_block_quote_1.BlockQuote,
};
//# sourceMappingURL=components.js.map