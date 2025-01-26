import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { colors } from "./colors";
import { fontSizes } from "./sizes";

export const theme: ThemeOverride = extendTheme({
  colors: { ...colors },
  fontSizes: { ...fontSizes },
});
