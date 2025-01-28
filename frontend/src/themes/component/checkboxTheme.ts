import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: {
    fontFamily: "mono", // change the font family of the label
  },
  control: {
    border: "none",
    m: 0,
    bg: "neutral.800",
    color: "brand.200",
    _checked: { bg: "brand.500", _hover: { bg: "brand.600" } },
    padding: 3, // change the padding of the control
    borderRadius: 2, // change the border radius of the control
  },
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });
