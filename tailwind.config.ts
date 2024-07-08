import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    // screens: {
    //   "2sm": "55Opx",
    //   ...defaultTheme.screens,
    // },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "3.125rem",
        lg: "6.875rem",
      },
    },

    extend: {
      screens: {
        sm: "550px",
        md: "780px",
        lg: "900px",
      },
      spacing: {
        sm: "var(--spacer-01)",
        md: "var(--spacer-02)",
        lg: "var(--spacer-03)",
      },
      gridTemplateColumns: {
        mobileCard: "var(--flower) auto var(--flower)",
        tabletCard:
          "var(--flower) auto minmax(var(--spacer-01), var(--flower)) auto var(--flower)",
      },
      backgroundImage: {
        edging:
          "linear-gradient( var(--edging-direction, 0deg), rgb(var(--accent-yellow)) 1%, rgb(var(--accent-purple)) 40%, rgb(var(--accent-blue)) 80%)",
      },
      backgroundPosition: {
        edging: "top left",
      },
      backgroundSize: {
        edging: "var(--edging-w, 100%) var(--edging-h, 100%)",
      },
      colors: {
        clr: {
          yellow: "rgb(var(--accent-yellow))",
          purple: "rgb(var(--accent-purple))",
          blue: "rgb(var(--accent-blue))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
