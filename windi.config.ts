import { defineConfig } from "vite-plugin-windicss";
import colors from "windicss/colors";
import typography from "windicss/plugin/typography";

const textShadowObject = (colors) => {
  const stg = {};
  Object.keys(colors).forEach((e) => {
    stg[
      `btn-${e}`
    ] = `0.5px 0.5px 1px ${colors[e]["600"]}, 0px 0px 10px ${colors[e]["600"]}`;
    // stg[`btn-${e}`]= `0px 0px ${colors[e]['300']}`
  });
  return stg;
};
const boxShadowObject = (colors) => {
  let stg = {};
  Object.keys(colors).forEach((e) => {
    stg[
      `btn-${e}`
    ] = `inset 0px 0px 10px 1px #ffffff,inset 0px 0px 50px 10px ${colors[e]["200"]}`;
  });
  return stg;
};

const boxShadowBrightObject = (colors) => {
  let stg = {};
  Object.keys(colors).forEach((e) => {
    stg[
      `btn-b-${e}`
    ] = `inset 0px 0px 10px 1px #ffffff,inset 0px 0px 50px 10px ${colors[e]["200"]},0px 0px 5px 5px ${colors[e]["700"]}`;
  });
  return stg;
};

export default defineConfig({
  darkMode: "class",
  plugins: [typography()],
  attributify: true,
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      boxShadow: {
        ...boxShadowObject(colors),
        ...boxShadowBrightObject(colors),
      },
      textShadow: {
        ...textShadowObject(colors),
      },
      transitionProperty: {
        maxHeight: "max-height",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "inherit",
            a: {
              color: "inherit",
              opacity: 0.75,
              fontWeight: "500",
              textDecoration: "underline",
              "&:hover": {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: "inherit" },
            strong: { color: "inherit" },
            em: { color: "inherit" },
            h1: { color: "inherit" },
            h2: { color: "inherit" },
            h3: { color: "inherit" },
            h4: { color: "inherit" },
            code: { color: "inherit" },
          },
        },
      },
    },
  },
});
