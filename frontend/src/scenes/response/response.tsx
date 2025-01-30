import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import JsonFormatter from "react-json-formatter";
import { colors, fontSizes } from "../../themes";
import { useRequestStore } from "../../store/store";

export const Response = () => {
  const { response } = useRequestStore();
  const ref = useRef<HTMLDivElement | null>(null);
  const jsonStyle = {
    propertyStyle: { color: colors.brand[500], fontSize: fontSizes.cmd },
    stringStyle: { color: colors.brand[200], fontSize: fontSizes.cmd },
    numberStyle: { color: colors.brand[200], fontSize: fontSizes.cmd },
    braceStyle: { color: colors.brand[200], fontSize: fontSizes.cmd },
  };

  useEffect(() => {
    if (ref.current) {
    }
  }, []);
  return (
    <Box p={2}>
      <JsonFormatter json={response} jsonStyle={jsonStyle} />
    </Box>
  );
};
