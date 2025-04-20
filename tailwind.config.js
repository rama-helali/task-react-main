/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      shadow: "none",
    },
    extend: {
      screens: {
        "2xl": "1536px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      textColor: {
        primary: "#00123B",
      },
      backgroundColor: {
        primary: "#F8B01C",
      },
      borderColor: {
        primary: "#00123B",
      },
      boxShadow: {
        shadow: "none",
      },
    },
    container: {
      center: true,
    },
  },
  corePlugins: {
    preflight: false,
    // boxShadow: false, // Completely remove the shadow utilities
  },
};
