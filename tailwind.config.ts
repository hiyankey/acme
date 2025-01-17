import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				page: {
					main: "#000",
				},
			},
			backgroundImage: {
				"primary-gradient":
					"linear-gradient(180deg, #FE2A00 0%, #FF5500 100%);",
			},
			boxShadow: {
				btn: "inset 0px 0px 1px rgba(255, 255, 255, 0.12), inset 0px 0.5px 0 rgba(255, 255, 255, 0.12)",
			},
		},
		fontFamily: {
			sans: "var(--font-geist-sans)",
			mono: "var(--font-geist-mono)",
		},
		fontSize: {
			xs: ["1.2rem", "1.4"],
			sm: ["1.4rem", "1.4"],
			rg: ["1.6rem", "1.4"],
			lg: ["1.8rem", "1.4"],
			xl: ["2.4rem", "1.2"],
			"2xl": ["3.6rem", "1.2"],
			"3xl": ["4.8rem", "1.2"],
			"4xl": ["6rem", "1.2"],
		},
		spacing: {
			0: "0",
			1: "0.4rem",
			2: "0.8rem",
			3: "1.2rem",
			4: "1.6rem",
			5: "2rem",
			6: "2.4rem",
			7: "2.8rem",
			8: "3.2rem",
			9: "3.6rem",
			10: "4rem",
			11: "4.4rem",
			12: "4.8rem",
			"header-height": "var(--header-height)",
		},
		keyframes: {
			"fade-in": {
				from: { opacity: "0", transform: "translateY(-10px)" },
				to: { opacity: "1", transform: "none" },
			},
		},
		animation: {
			"fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
		},
	},
	plugins: [],
} satisfies Config;
