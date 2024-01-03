export const primary = {
  "": "var(--global-colors-primary-50)",
  hover: "var(--global-colors-primary-60)",
  active: "var(--global-colors-primary-70)",
} as const;

export const secondary = {
  text: "var(--global-colors-gray-90)",
  bg: "var(--global-colors-gray-10)",
  hover: {
    bg: "var(--global-colors-primary-10)",
    text: "var(--global-colors-primary-50)",
  },
  active: {
    bg: "var(--global-colors-primary-10)",
    text: "var(--global-colors-primary-70)",
  },
} as const;

export const tertiary = {
  "": "var(--global-colors-primary-50)",
  hover: "var(--global-colors-primary-10)",
  active: "var(--global-colors-primary-20)",
} as const;

export const contrast = {
  "": "var(--global-colors-gray-90)",
  hover: {
    bg: "var(--global-colors-primary-10)",
    text: "var(--global-colors-primary-50)",
  },
  active: {
    text: "var(--global-colors-primary-50)",
  },
} as const;

export const danger = {
  primary: {
    "": "var(--global-colors-red-60)",
    hover: "var(--global-colors-red-70)",
    active: "var(--global-colors-red-80)",
  },
  tertiary: {
    "": "var(--global-colors-red-60)",
    hover: "var(--global-colors-red-10)",
    active: "var(--global-colors-red-20)",
  },
  contrast: {
    "": "var(--global-colors-red-60)",
    hover: "var(--global-colors-red-10)",
    active: "var(--global-colors-red-20)",
  },
} as const;

export const disabled = {
  bg: "var(--global-colors-gray-20)",
  border: "var(--global-colors-gray-40)",
  text: {
    "": "var(--global-colors-gray-50)",
    on: {
      color: "var(--global-colors-gray-60)",
    },
  },
} as const;
