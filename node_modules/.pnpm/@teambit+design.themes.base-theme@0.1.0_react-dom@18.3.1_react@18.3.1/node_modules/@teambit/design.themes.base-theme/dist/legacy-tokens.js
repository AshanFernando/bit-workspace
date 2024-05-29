"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLegacyTokens = void 0;
function getLegacyTokens(theme) {
    return {
        // # colors:
        // ----------
        // texts:
        '--bit-text-color-light': theme.onBackgroundMediumColor,
        '--bit-text-color': theme.onBackgroundColor,
        '--bit-text-color-heavy': theme.onBackgroundHighColor,
        '--bit-text-inactive': theme.onBackgroundLowColor,
        '--bit-text-inactive-heavy': theme.onBackgroundLowColor,
        // backgrounds:
        '--bit-bg-bedrock': theme.backgroundColor,
        '--bit-bg-color': theme.surfaceNeutralColor,
        '--bit-bg-heavy': theme.surfaceNeutralHoverColor,
        '--bit-bg-heaviest': theme.surfaceNeutralActiveColor,
        '--bit-bg-dent': theme.surfaceNeutralHoverColor,
        '--bit-bg-tooltip': theme.surfaceNeutralColor,
        '--bit-bg-tooltip-heavy': theme.surfaceNeutralHoverColor,
        '--bit-bg-navigation': theme.surfaceNeutralHoverColor,
        '--bit-bg-overlay': theme.surfaceNeutralColor,
        '--bit-bg-modal': theme.surfaceNeutralColor,
        // borders:
        '--bit-border-color-lightest': theme.borderMediumColor,
        '--bit-border-color-light': theme.borderMediumHoverColor,
        '--bit-border-color': theme.borderHighColor,
        '--bit-border-color-heavy': theme.borderHighActiveColor,
        // primary accent color:
        // '--bit-accent-light':, // [ ] was #897dec;
        '--bit-accent-color': theme.primaryColor,
        // '--bit-accent-heavy':, // [ ] was #5d4aec;
        '--bit-text-on-accent': theme.onPrimaryColor,
        '--bit-accent-text': theme.primaryColor,
        // '--bit-accent-text-heavy':, // [ ] was #5d4aec;
        '--bit-accent-bg': theme.surfaceHoverColor,
        '--bit-accent-bg-heavy': theme.surfaceActiveColor,
        // # shadows:
        // ----------
        '--bit-shadow-none': 'none',
        // not final
        '--bit-shadow-faint': '0 2px 10px 0 rgba(0, 0, 0, 0.1)',
        '--bit-shadow-resting': '0px 0px 4px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.08)',
        // raised, ie attached to background
        '--bit-shadow-raised-low': '0 -1px 1px 0 rgba(0, 0, 0, 0.09), 0 2px 2px 0 rgba(0, 0, 0, 0.23)',
        //' --bit-shadow-raised-medium': '',
        //' --bit-shadow-raised-hight': '',
        // hover, as in floating above
        '--bit-shadow-hover-low': '0 2px 8px 0 rgba(0, 0, 0, 0.2)',
        '--bit-shadow-hover-medium': '0 0 20px 0 rgba(0, 0, 0, 0.12), 0 2px 6px 0 rgba(0, 0, 0, 0.24)',
        '--bit-shadow-hover-high': '0px 11px 29px 0px rgba(0, 0, 0, 0.23)',
        // # font sizes:
        // -------------
        // regular text size
        '--bit-p-xxs': '12px',
        '--bit-p-xs': '14px',
        '--bit-p-sm': '15px',
        '--bit-p-md': '16px',
        '--bit-p-lg': '18px',
        '--bit-p-xl': '20px',
        '--bit-p-xxl': '24px',
        // headings size
        '--bit-h-xxs': '16px',
        '--bit-h-xs': '18px',
        '--bit-h-sm': '24px',
        '--bit-h-md': '26px',
        '--bit-h-lg': '36px',
        '--bit-h-xl': '40px',
        '--bit-h-xxl': '50px',
        // accents:
        '--bit-accent-primary-color': theme.primaryColor,
        '--bit-accent-primary-bg': theme.primarySurfaceColor,
        '--bit-accent-hunger-color': theme.warningColor,
        '--bit-accent-hunger-bg': theme.warningSurfaceColor,
        '--bit-accent-impulsive-color': theme.negativeColor,
        '--bit-accent-impulsive-bg': theme.negativeSurfaceColor,
        '--bit-accent-process-color': theme.processColor,
        '--bit-accent-success-color': theme.positiveColor,
        '--bit-accent-success-bg': theme.positiveSurfaceColor,
    };
}
exports.getLegacyTokens = getLegacyTokens;
//# sourceMappingURL=legacy-tokens.js.map