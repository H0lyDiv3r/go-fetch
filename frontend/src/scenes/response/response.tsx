import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import JsonFormatter from "react-json-formatter";
import { colors, fontSizes } from "../../themes";
import { useRequestStore } from "../../store/store";

export const Response = () => {
  const { response } = useRequestStore();
  const jsonStyle = {
    propertyStyle: { color: colors.brand[600], fontSize: fontSizes.cmd },
    stringStyle: { color: colors.brand[200], fontSize: fontSizes.cmd },
    numberStyle: { color: colors.brand[100], fontSize: fontSizes.cmd },
    braceStyle: { color: colors.brand[100], fontSize: fontSizes.cmd },
  };
  return (
    <Box p={2} bg={"neutral.800"} borderRadius={4} height={"100%"}>
      <JsonFormatter json={response} jsonStyle={jsonStyle} />
    </Box>
  );
};
