/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pillar-dark": "#0A0A0A",
        "pillar-green": "#22C55E",
        "pillar-gray": {
          light: "#F5F5F5",
          text: "#6B7280",
        },
        "profile-red": "#EF4444",
        "profile-orange": "#F59E0B",
        "profile-yellow": "#EAB308",
        "profile-green": "#10B981",
        "whatsapp": "#25D366",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};
