import { FlattenObjectKeys, transformObject } from "./../../styles/utils";
import { createTheme, createThemeContract } from "@vanilla-extract/css";
import * as button from "./tokens/colors";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { recipe } from "@vanilla-extract/recipes";

const themeObj = {
  colors: {
    button: button,
  },
};

// create button token theme
const themeVars = createThemeContract(themeObj);
createTheme(themeVars, themeObj);

const wrappedButton = { button };
type ButtonColor = FlattenObjectKeys<typeof wrappedButton>;
const buttonColors = {
  ...transformObject<ButtonColor>(themeVars.colors),
};

// create button sprinkles
const buttonColorProperties = defineProperties({
  properties: {
    color: buttonColors,
    backgroundColor: buttonColors,
    borderColor: buttonColors,
  },
  shorthands: {
    bgColor: ["backgroundColor"],
  },
});

const buttonSprinkles = createSprinkles(buttonColorProperties);

const buttonClass = recipe({});
