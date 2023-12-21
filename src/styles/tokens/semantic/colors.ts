export const colorBackgrounds = {
  "color-background-01": "var(--global-colors-gray-10)",
  "color-background-02": "var(--global-colors-white)",
  "color-background-03": "var(--global-colors-gray-5)",
  "color-background-04": "var(--global-colors-gray-30)",
} as const;

export const colorBorders = {
  "color-border-01": "var(--global-colors-gray-30)",
  "color-border-02": "var(--global-colors-gray-40)",
  "color-border-03": "var(--global-colors-gray-50)",
  "color-border-04": "var(--global-colors-gray-60)",
} as const;

export const colorText = {
  "color-text-01": "var(--global-colors-gray-90)",
  "color-text-02": "var(--global-colors-gray-80)",
  "color-text-03": "var(--global-colors-gray-70)",
  "color-text-04": "var(--global-colors-gray-60)",
};

export const colors = {
  ...colorBackgrounds,
  ...colorBorders,
  ...colorText,
};
