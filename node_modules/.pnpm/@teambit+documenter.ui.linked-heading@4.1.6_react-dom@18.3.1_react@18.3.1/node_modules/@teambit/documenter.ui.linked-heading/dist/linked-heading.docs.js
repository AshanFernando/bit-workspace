"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examples = exports.labels = void 0;
const documenter_theme_theme_compositions_1 = require("@teambit/documenter.theme.theme-compositions");
const linked_heading_1 = require("./linked-heading");
exports.labels = ['react', 'ui-component', 'heading', 'link'];
exports.examples = [
    {
        scope: {
            LinkedHeading: linked_heading_1.LinkedHeading,
            ThemeCompositions: documenter_theme_theme_compositions_1.ThemeCompositions
        },
        title: "Using the Linked Heading component",
        description: `Links are used as navigational elements. They can be used on their own or inline, as part of a paragraph. 
    They provide a lightweight option for navigation that should be used sparingly so as to not clutter a page and make it difficult for users to identify their next steps.`,
        code: `
<ThemeCompositions>
    <LinkedHeading link="link-here-1" >
        A default linked title
    </LinkedHeading>

    <LinkedHeading link="link-here-2" size="xs">
      An extra small linked title
    </LinkedHeading>

</ThemeCompositions>
`
    }
];
//# sourceMappingURL=linked-heading.docs.js.map