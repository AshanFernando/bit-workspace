"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examples = exports.labels = void 0;
const documenter_theme_theme_compositions_1 = require("@teambit/documenter.theme.theme-compositions");
const section_1 = require("./section");
exports.labels = ['react', 'ui-component', 'container'];
exports.examples = [
    {
        scope: {
            Section: section_1.Section,
            ThemeCompositions: documenter_theme_theme_compositions_1.ThemeCompositions
        },
        title: "Using the Section component.",
        code: `
<ThemeCompositions>
    <Section className="custom-section">
        This is a section.
    </Section>
</ThemeCompositions>
`
    }
];
//# sourceMappingURL=section.docs.js.map