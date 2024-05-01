import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          "bg-image-gif": "url(./images/cleaning-gif.gif)",
          "top-image-container": "url(./images/street.jpg)",
          "top-office-container": "url(./images/office.jpg)",
          "top-desk-container": "url(./images/desk.jpg)",
          "big-frame": "url(./images/frame-big.jpg)",
          "small-frame": "url(./images/frame-small.jpg)",
          "service-container": "url(./images/service-bg.jpg)",
          "why-small-img": "url(./images/why-small.png)"
          // "card1": "url(./images/img-1.png)",
          // "card2": "url(./images/img-2.png)",                                                                                                                                                                                                                                                                                                               )",
        },
      backgroundColor: {
        "navbar-btn": "#10536D",
        "top-container-bottom": "#0A86B6",
        "top-container-bottom-1": "#0A86B61F",
      },
      height: {
        "top-container-h": "480px",
        "top-image-h": "380px"

      },
      width: {
        "top-image-w": "248px"
      },
      margin: {
        "little-frame": "330px",
        "why-small-img": "30%",
        "why-right-container": "15%"
      },
      padding: {
       "process-heading-container": "36%",
       "process-heading-container-ls": "44%",
      }
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "forest", "sunset", "retro"],
  },
  plugins: [require("daisyui")],
};
export default config;
