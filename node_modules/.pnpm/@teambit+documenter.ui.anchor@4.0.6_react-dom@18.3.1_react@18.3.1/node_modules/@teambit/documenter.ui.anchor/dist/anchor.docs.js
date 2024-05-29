"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examples = exports.labels = void 0;
const anchor_1 = require("./anchor");
const documenter_theme_theme_compositions_1 = require("@teambit/documenter.theme.theme-compositions");
const documenter_ui_heading_1 = require("@teambit/documenter.ui.heading");
exports.labels = ['react', 'ui-component', 'link'];
exports.examples = [
    {
        scope: {
            Anchor: anchor_1.Anchor,
            H5: documenter_ui_heading_1.H5,
            ThemeCompositions: documenter_theme_theme_compositions_1.ThemeCompositions
        },
        title: "Using the Anchor component",
        description: `The Anchor component can only link to itself. 
Place it to either side of the title you wish to point to, so as to have it scroll to the same vertical point on the page.`,
        code: `
<ThemeCompositions>
    <div style={{display: 'inline-flex', alignItems: 'center'}}>
        <H5 style={{marginRight: '10px'}}>A title with a link</H5>
        <Anchor href="this-example" />
    </div>
</ThemeCompositions>
`
    }
];
//# sourceMappingURL=anchor.docs.js.map