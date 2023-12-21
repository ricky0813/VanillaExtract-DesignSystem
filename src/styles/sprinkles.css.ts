import { semantic } from "./tokens/semantic/index";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";
import { colors as globalColors } from "@/styles/tokens/global/colors";
import {
  colorBorders,
  colors as semanticColors,
} from "@/styles/tokens/semantic/colors";

type Flatten<T> = T extends Record<string, any>
  ? {
      [K in keyof T & string as T[K] extends string
        ? `${K}`
        : never]: T[K] extends Record<string, any> ? Flatten<T[K]> : T[K];
    }
  : never;

// type FlattenObjectKeys<T, P extends string = ""> = {
//   [K in keyof T]: T[K] extends Record<string, any>
//     ? FlattenObjectKeys<T[K], `${P}${K & string}-`>
//     : `${P}${K & string}`;
// }[keyof T];

// type ConvertType<A> = {
//   readonly [K in FlattenObjectKeys<A>]: string;
// };

// const transformObject = <T extends Record<string, any>>(originalObject: T) => {
//   const flattenObject = (
//     obj: Record<string, any>,
//     prefix = ""
//   ): ConvertType<T> => {
//     return Object.keys(obj).reduce((acc, key) => {
//       const newKey = prefix ? `${prefix}-${key}` : key;
//       if (typeof obj[key] === "object" && obj[key] !== null) {
//         Object.assign(acc, flattenObject(obj[key], newKey));
//       } else {
//         acc[newKey as keyof ConvertType<T>] = obj[key];
//       }
//       return acc;
//     }, {} as ConvertType<T>);
//   };

//   return flattenObject(originalObject);
// };

const colors = { ...semanticColors, ...globalColors };

const colorProperties = defineProperties({
  properties: {
    color: colors,
    backgroundColor: colors,
    borderColor: colorBorders,
    borderRadius: {
      none: "0px",
      medium: "6px",
      large: "8px",
      extraLarge: "12px",
      "2xLarge": "16px",
      "3xLarge": "24px",
      "4xLarge": "40px",
      full: "9999px",
    },
  },
  shorthands: {
    rounded: ["borderRadius"],
    // paddingX: ["paddingLeft", "paddingRight"],
  },
});

// const shortHands = defineProperties({
//   properties: {},
//   shorthands: {
//     rounded: ["borderRadius"],
//     // padding: ["paddingTop"],
//   },
// });

export const sprinkles = createSprinkles(colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
