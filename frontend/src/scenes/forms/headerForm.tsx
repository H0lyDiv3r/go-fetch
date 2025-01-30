import { Box, Text } from "@chakra-ui/react";
import { MultipleKeyValueInput } from "../../components";
import { useRequestStore } from "../../store/store";

export const HeaderForm = () => {
  const {
    headers,
    addHeader,
    setHeaderKey,
    removeHeader,
    setHeaderValue,
    setHeaderActive,
  } = useRequestStore();
  return (
    <Box aria-label="query parameters">
      <Box my={2}>
        <Text as={"h3"} fontSize={"xl"} fontWeight={"medium"}>
          Headers
        </Text>
      </Box>
      <MultipleKeyValueInput
        vals={headers}
        addField={addHeader}
        removeField={removeHeader}
        setKey={setHeaderKey}
        setVal={setHeaderValue}
        setActive={setHeaderActive}
      />
    </Box>
  );
};
