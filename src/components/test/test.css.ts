import { sprinkles } from "@/styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const styleClass = style([
  sprinkles({
    backgroundColor: "support-info",
  }),
  {
    width: 500,
    height: 500,
  },
]);
