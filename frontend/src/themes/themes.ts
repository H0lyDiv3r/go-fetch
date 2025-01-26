import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { colors } from "./colors";

export const theme:ThemeOverride = extendTheme({ colors:{...colors} });
