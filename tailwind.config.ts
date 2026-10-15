import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#050506",
        charcoal: "#0C0C0E",
        panel: "#131316",
        line: "#232329",
        acid: "#C8FF00",
        acidDim: "#8FB800",
        volt: "#8B2BFF",
        voltSoft: "#B478FF",
        bone: "#F2F2ED"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      animation: {
        flicker: "flicker 4s infinite",
        marquee: "marquee 22s linear infinite",
        floaty: "floaty 7s ease-in-out infinite"
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.4" },
          "94%": { opacity: "1" },
          "96%": { opacity: "0.7" },
          "97%": { opacity: "1" }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
