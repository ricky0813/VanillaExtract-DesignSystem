import { FlattenObjectKeys } from "@/styles/utils";

export const primary = {
  10: "#ecebff",
  20: "#c4c0ff",
  30: "#a8a1ff",
  40: "#8076ff",
  50: "#685cff",
  60: "#4233ff",
  70: "#3c2ee8",
  80: "#2f24b5",
  90: "#241c8c",
  100: "#1c156b",
} as const;

export const red = {
  10: "#fcedea",
  20: "#f6c8bf",
  30: "#f2ae9f",
  40: "#ec8974",
  50: "#e97259",
  60: "#e34f2f",
  70: "#cf482b",
  80: "#a13821",
  90: "#7d2b1A",
  100: "#5f2114",
} as const;

export const orange = {
  10: "#fcf2e6",
  20: "#f5d5b0",
  30: "#f0c18a",
  40: "#eaa554",
  50: "#e59333",
  60: "#df7800",
  70: "#cb6d00",
  80: "#9e5500",
  90: "#7b4200",
  100: "#5e3200",
} as const;

export const yellow = {
  10: "#fffbe6",
  20: "#fff1b3",
  30: "#ffea8e",
  40: "#ffe15a",
  50: "#ffdb3a",
  60: "#ffd209",
  70: "#e8bf08",
  80: "#b59506",
  90: "#8c7405",
  100: "#6b5804",
} as const;

export const lightGreen = {
  10: "#f5faf0",
  20: "#dfefd0",
  30: "#d0e8b9",
  40: "#bbdd98",
  50: "#add685",
  60: "#99cc66",
  70: "#8bba5d",
  80: "#6d9148",
  90: "#547038",
  100: "#40562b",
} as const;

export const green = {
  10: "#ebf6f1",
  20: "#c2e4d4",
  30: "#a5d7bf",
  40: "#7cc5a2",
  50: "#62ba90",
  60: "#3ba974",
  70: "#369a6a",
  80: "#2a7852",
  90: "#205d40",
  100: "#194731",
};

export const deepGreen = {
  10: "#eaf5f0",
  20: "#bde0cf",
  30: "#9dd1b8",
  40: "#70bc98",
  50: "#55af84",
  60: "#2a9b65",
  70: "#268d5c",
  80: "#1e6e48",
  90: "#175538",
  100: "#12412a",
} as const;

export const cyan = {
  10: "#f2fcfb",
  20: "#d8f6f3",
  30: "#c5f1ee",
  40: "#aaebe6",
  50: "#99e7e1",
  60: "#80e1d9",
  70: "#74cdc5",
  80: "#5ba09a",
  90: "#467c77",
  100: "#365f5b",
} as const;

export const teal = {
  10: "#eff8f7",
  20: "#cce9e6",
  30: "#b4deda",
  40: "#91cfc9",
  50: "#7cc5bf",
  60: "#5bb7af",
  70: "#53a79f",
  80: "#41827c",
  90: "#326560",
  100: "#264d4a",
} as const;

export const lightBlue = {
  10: "#f1f9fe",
  20: "#d3ebfc",
  30: "#bee1fa",
  40: "#a1d3f8",
  50: "#8ecbf6",
  60: "#72bef4",
  70: "#68adde",
  80: "#5187ad",
  90: "#3f6986",
  100: "#305066",
} as const;

export const blue = {
  10: "#e7f2f6",
  20: "#b4d7e2",
  30: "#90c4d3",
  40: "#5da9bf",
  50: "#3d98b3",
  60: "#0d7ea0",
  70: "#0c7392",
  80: "#095972",
  90: "#074558",
  100: "#053543",
} as const;

export const indigo = {
  10: "#f1f1ff",
  20: "#d5d4fd",
  30: "#c0bffd",
  40: "#a4a2fc",
  50: "#9290fb",
  60: "#7774fa",
  70: "#6c6ae4",
  80: "#5452b2",
  90: "#41408a",
  100: "#323169",
} as const;

export const purple = {
  10: "#f2eeff",
  20: "#d5cbff",
  30: "#c1b1ff",
  40: "#a58eff",
  50: "#9378ff",
  60: "#7856ff",
  70: "#6d4ee8",
  80: "#553db5",
  90: "#422f8c",
  100: "#32246b",
} as const;

export const magenta = {
  10: "#faf2fc",
  20: "#efd8f4",
  30: "#e7c5ef",
  40: "#dbaae8",
  50: "#d599e3",
  60: "#ca80dc",
  70: "#b874c8",
  80: "#8f5b9c",
  90: "#6f4679",
  100: "#55365c",
} as const;

// export const pink = {
//   10: "#fce6f0",
//   20: "#f6b2d1",
//   30: "#f28dba",
//   40: "#ec599b",
//   50: "#e93988",
//   60: "#e3076a",
//   70: "#cf0660",
//   80: "#a1054b",
//   90: "#7d043a",
//   100: "#5f032d",
// } as const;

export const burgundy = {
  10: "#f7eef1",
  20: "#e7ccd2",
  30: "#dcb3bc",
  40: "#cb909e",
  50: "#c17a8b",
  60: "#b2596e",
  70: "#a25164",
  80: "#7e3f4e",
  90: "#62313d",
  100: "#4b252e",
} as const;

export const neutralColor = {
  white: "#ffffff",
  black: "#000000",
  gray: {
    5: "#fafafa",
    10: "#f6f6f6",
    15: "#f0f0f0",
    20: "#ebebeb",
    30: "#e0e0e0",
    40: "#d2d2d2",
    50: "#bbbbbb",
    60: "#959595",
    70: "#707070",
    80: "#424242",
    90: "#242424",
  },
} as const;

export const colors = {
  primary,
  red,
  orange,
  yellow,
  lightGreen,
  green,
  deepGreen,
  teal,
  lightBlue,
  blue,
  indigo,
  purple,
  magenta,
  burgundy,
  ...neutralColor,
};

export type Colors = FlattenObjectKeys<typeof colors>;
