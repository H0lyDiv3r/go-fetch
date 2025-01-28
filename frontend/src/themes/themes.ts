import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { colors } from "./colors";
import { fontSizes } from "./sizes";
import { checkboxTheme } from "./component";

export const theme: ThemeOverride = extendTheme({
  colors: { ...colors },
  fontSizes: { ...fontSizes },
  components: { Checkbox: checkboxTheme },
});
