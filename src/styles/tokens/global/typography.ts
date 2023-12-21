export const fonts = {
  sans: "Pretendard, sans-serif",
} as const;

export const fontWeights = {
  thin: "100",
  extraLight: "200",
  light: "300",
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
  black: "900",
} as const;

export const fontSizes = {
  "fontSize-100": "11px",
  "fontSize-200": "12px",
  "fontSize-300": "14px",
  "fontSize-400": "16px",
  "fontSize-500": "20px",
  "fontSize-600": "24px",
  "fontSize-700": "32px",
  "fontSize-800": "40px",
} as const;

export const lineHeights = {
  "lineHeight-01": "16px",
  "lineHeight-02": "18px",
  "lineHeight-03": "24px",
  "lineHeight-04": "28px",
  "lineHeight-05": "34px",
  "lineHeight-06": "40px",
  "lineHeight-07": "52px",
} as const;

export const typographies = {
  fonts,
  fontWeights,
  ...fontSizes,
  ...lineHeights,
};
