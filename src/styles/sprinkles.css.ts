import { transformObject } from "./utils";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";
import { SemanticColor } from "@/styles/tokens/semantic/colors";
import { Space } from "./tokens/global/spacing";
import { Colors } from "./tokens/global/colors";
import { Radius } from "./tokens/global/radius";

const colors = {
  ...transformObject<SemanticColor>(vars.semantic.color),
  ...transformObject<Colors>(vars.global.colors),
};
const space = transformObject<Space>({ spacing: vars.global.spacing });
const radius = transformObject<Radius>({ radius: vars.global.radius });

const colorProperties = defineProperties({
  properties: {
    color: colors,
    backgroundColor: colors,
    borderColor: colors,
    borderRadius: radius,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: { ...space, auto: "auto" },
    marginRight: { ...space, auto: "auto" },
    gap: { ...space, none: "none" },
    margin: space,
  },
  conditions: {
    common: {},
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
    active: { selector: "&:active" },
  },
  shorthands: {
    rounded: ["borderRadius"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
  defaultCondition: "common",
});

export const sprinkles = createSprinkles(colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
