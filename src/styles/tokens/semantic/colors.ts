import { FlattenObjectKeys } from "@/styles/utils";

export const backgroundColors = {
  background: {
    1: "var(--global-colors-white)",
    2: "var(--global-colors-gray-5)",
    3: "var(--global-colors-gray-10)",
    4: "var(--global-colors-gray-20)",
  },
} as const;

export const borderColors = {
  border: {
    1: "var(--global-colors-gray-30)",
    2: "var(--global-colors-gray-40)",
    3: "var(--global-colors-gray-50)",
    4: "var(--global-colors-gray-60)",
  },
} as const;

export const textColors = {
  text: {
    1: "var(--global-colors-gray-90)",
    2: "var(--global-colors-gray-80)",
    3: "var(--global-colors-gray-70)",
    4: "var(--global-colors-gray-60)",
    5: "var(--global-colors-gray-50)",
    6: "var(--global-colors-white)",
  },
};

export const supportColors = {
  support: {
    error: {
      1: "var(--global-colors-red-70)",
      2: "var(--global-colors-red-20)",
      3: "var(--global-colors-red-10)",
    },
    warning: {
      1: "var(--global-colors-orange-80)",
      2: "var(--global-colors-orange-20)",
      3: "var(--global-colors-orange-10)",
    },
    success: {
      1: "var(--global-colors-green-80)",
      2: "var(--global-colors-green-20)",
      3: "var(--global-colors-green-10)",
    },
    info: {
      1: "var(--global-colors-gray-80)",
      2: "var(--global-colors-gray-40)",
      3: "var(--global-colors-gray-10)",
    },
  },
};

export const focusColors = {
  focus: "rgb(from var(--global-colors-primary-50) r g b / 20%)",
};

// export const toggleColors = {
//   toggle: {
//     brand: {
//       1: "var(--global-colors-primary-50)",
//       2: "var(--global-colors-primary-60)",
//       3: "var(--global-colors-primary-100)",
//     },
//     disabled: {
//       bg: "var(--global-colors-gray-20)",
//       border: "var(--global-colors-gray-40)",
//       text: "var(--global-colors-gray-60)",
//     },
//     off: {
//       bg: "var(--global-colors-gray-50)",
//       hover: "var(--global-colors-gray-60)",
//     },
//   },
// };

// export const tagColors = {
//   tag: {
//     brand: {
//       default: 'var(--global-colors-primary-10)',
//     }
//   }
// }

export const color = {
  ...backgroundColors,
  ...borderColors,
  ...textColors,
  ...supportColors,
  ...focusColors,
};

export type SemanticColor = FlattenObjectKeys<typeof color>;
export type SemanticBackgroundColor = FlattenObjectKeys<
  typeof backgroundColors
>;
export type SemanticBorderColor = FlattenObjectKeys<typeof borderColors>;
export type SemanticTextColor = FlattenObjectKeys<typeof textColors>;
