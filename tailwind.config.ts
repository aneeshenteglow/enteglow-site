import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-fixed": "#cbe6ff",
        "secondary-container": "#911719",
        "on-surface": "#E5E1E4",
        "surface-variant": "#353437",
        "surface-container-highest": "#353437",
        "error": "#ffb4ab",
        "on-secondary-container": "#ff9e96",
        "on-primary-fixed": "#410002",
        "error-container": "#93000a",
        "on-secondary-fixed-variant": "#8d1417",
        "surface-container-high": "#2a2a2c",
        "inverse-primary": "#c00014",
        "secondary": "#ffb3ac",
        "surface-bright": "#39393b",
        "on-primary": "#690006",
        "on-secondary-fixed": "#410003",
        "surface-dim": "#131315",
        "tertiary-fixed-dim": "#8ecdff",
        "surface-tint": "#ffb4ab",
        "background": "#131315",
        "on-primary-container": "#fffafa",
        "primary-fixed-dim": "#ffb4ab",
        "on-background": "#e5e1e4",
        "inverse-surface": "#e5e1e4",
        "accent-glow": "rgba(227, 30, 36, 0.12)",
        "on-tertiary-fixed-variant": "#004b71",
        "primary": "#ffb4ab",
        "tertiary": "#8ecdff",
        "tertiary-container": "#007bb5",
        "secondary-fixed": "#ffdad6",
        "inverse-on-surface": "#303032",
        "surface-container-low": "#1b1b1d",
        "on-secondary": "#680008",
        "surface-container": "#201F21",
        "primary-container": "#e31e24",
        "technical-outline": "rgba(255, 255, 255, 0.1)",
        "surface": "#131315",
        "on-tertiary": "#00344f",
        "surface-container-lowest": "#0e0e10",
        "secondary-fixed-dim": "#ffb3ac",
        "on-error-container": "#ffdad6",
        "outline-variant": "#5d3f3c",
        "on-surface-variant": "#e7bdb8",
        "on-tertiary-container": "#fbfcff",
        "on-error": "#690005",
        "outline": "#ae8883",
        "on-tertiary-fixed": "#001e30",
        "on-primary-fixed-variant": "#93000d",
        "primary-fixed": "#ffdad6",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "surface-deep": "#0a0a0c"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "section-padding-md": "80px",
        "section-padding-lg": "120px",
        "gutter": "24px",
        "container-max": "1440px"
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "headline": ["Oswald", "sans-serif"],
        "headline-md": ["Oswald", "sans-serif"],
        "headline-lg-mobile": ["Oswald", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "display-lg": ["Oswald", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "headline-lg": ["Oswald", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "500" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "display-lg": ["80px", { lineHeight: "1.1", letterSpacing: "0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.7", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "600" }]
      },
      boxShadow: {
        glass: "0 4px 20px rgba(0, 0, 0, 0.5)",
        "glow-red": "0 0 20px rgba(227, 30, 36, 0.15)"
      }
    },
  },
  plugins: [],
};
export default config;
