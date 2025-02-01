import { Box, Input, Textarea } from "@chakra-ui/react";
import { FormTextArea } from "../../components";
import { isValidJSON, useRequestStore } from "../../store/store";
import { colors, fontSizes } from "../../themes";
import JsonFormatter from "react-json-formatter";

export const JsonBodyInput = () => {
  const { body, setJsonBody } = useRequestStore();
  const jsonStyle = {
    propertyStyle: { color: colors.brand[500], fontsize: fontSizes.cmd },
    stringStyle: { color: colors.brand[200], fontsize: fontSizes.cmd },
    numberStyle: { color: colors.brand[200], fontsize: fontSizes.cmd },
    braceStyle: { color: colors.brand[200], fontsize: fontSizes.cmd },
  };
  return (
    <Box display={"flex"} gap={2}>
      <FormTextArea value={body} setValue={setJsonBody} />
      <Box bg={"neutral.800"} width={"100%"} borderRadius={4} p={2}>
        <JsonFormatter
          json={isValidJSON(body) ? JSON.parse(body) : body}
          jsonStyle={jsonStyle}
        />
      </Box>
    </Box>
  );
};
