"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconFont = void 0;
const react_1 = __importDefault(require("react"));
const EMBED_LINK = 'https://d1azc1qln24ryf.cloudfront.net/158286/Bit/style-cf.css';
/**
 * Embeds the official icon font of [bit.dev](https://bit.dev).
 * Place at the root element, and use [bit-icon](https://bit.dev/bit/evangelist/atom/bit-icon) to place icons anywhere in the page.
 * @name IconFont
 * @example
 * <html>
 * 	<head>
 * 		<IconFont query='aqq93z' />
 * 	<head>
 * </html>
 */
function IconFont(props) {
    const { query = 'cr084i' } = props;
    return react_1.default.createElement("link", { rel: "stylesheet", href: `${EMBED_LINK}?${query}` });
}
exports.IconFont = IconFont;
//# sourceMappingURL=icon-font.js.map