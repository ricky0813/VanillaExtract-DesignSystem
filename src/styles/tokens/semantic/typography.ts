const heading = {
  "heading-01": {
    fontSize: "var(--global-typographies-fontSize-200)",
    fontWeight: "var(--global-typographies-fontWeights-medium)",
    lineHeight: "var(--global-typographies-lineHeight-02)",
  },
  "heading-02": {
    fontSize: "var(--global-typographies-fontSize-300)",
    fontWeight: "var(--global-typographies-fontWeights-medium)",
    lineHeight: "var(--global-typographies-lineHeight-03)",
  },
  "heading-03": {
    fontSize: "var(--global-typographies-fontSize-400)",
    fontWeight: "var(--global-typographies-fontWeights-semiBold)",
    lineHeight: "var(--global-typographies-lineHeight-03)",
  },
  "heading-04": {
    fontSize: "var(--global-typographies-fontSize-500)",
    fontWeight: "var(--global-typographies-fontWeights-semiBold)",
    lineHeight: "var(--global-typographies-lineHeight-04)",
  },
  "heading-05": {
    fontSize: "var(--global-typographies-fontSize-600)",
    fontWeight: "var(--global-typographies-fontWeights-semiBold)",
    lineHeight: "var(--global-typographies-lineHeight-05)",
  },
  "heading-06": {
    fontSize: "var(--global-typographies-fontSize-700)",
    fontWeight: "var(--global-typographies-fontWeights-semiBold)",
    lineHeight: "var(--global-typographies-lineHeight-06)",
  },
  "heading-07": {
    fontSize: "var(--global-typographies-fontSize-800)",
    fontWeight: "var(--global-typographies-fontWeights-semiBold)",
    lineHeight: "var(--global-typographies-lineHeight-07)",
  },
} as const;

const body = {
  "body-01": {
    fontSize: "var(--global-typographies-fontSize-200)",
    fontWeight: "var(--global-typographies-fontWeights-regular)",
    lineHeight: "var(--global-typographies-lineHeight-02)",
  },
  "body-02": {
    fontSize: "var(--global-typographies-fontSize-300)",
    fontWeight: "var(--global-typographies-fontWeights-regular)",
    lineHeight: "var(--global-typographies-lineHeight-03)",
  },
} as const;

const caption = {
  "caption-01": {
    fontSize: "var(--global-typographies-fontSize-100)",
    fontWeight: "var(--global-typographies-fontWeights-regular)",
    lineHeight: "var(--global-typographies-lineHeight-01)",
  },
  "caption-02": {
    fontSize: "var(--global-typographies-fontSize-200)",
    fontWeight: "var(--global-typographies-fontWeights-regular)",
    lineHeight: "var(--global-typographies-lineHeight-02)",
  },
} as const;

export const typographies = {
  ...heading,
  ...body,
  ...caption,
};
