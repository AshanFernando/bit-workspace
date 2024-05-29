"use strict";
/* THIS EXAMPLE DEMONSTRATES HOW TO USE THE THEME-RPOVIDER TO GENERATE A THEME AND A THEME SCHEMA */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
const create_theme_1 = require("../create-theme");
/* defines the design tokens and sets their default values.*/
const defaultDesignTokenValues = {
    colorBackground: '#ffffff',
    colorText: '#304c78',
};
/* creates a theme using the design token default values
 * ('Theme' contains a Context and a hook to retrieve its values)
 */
exports.Theme = (0, create_theme_1.createTheme)({ theme: defaultDesignTokenValues });
//# sourceMappingURL=default-theme.demo.js.map