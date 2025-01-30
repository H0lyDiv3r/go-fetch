import { Box, Text } from "@chakra-ui/react";
import { MultipleKeyValueInput } from "../../components";
import { useRequestStore } from "../../store/store";

export const ParamForm = () => {
  const {
    params,
    addParam,
    removeParam,
    setParamKey,
    setParamValue,
    setParamActive,
  } = useRequestStore();
  return (
    <Box aria-label="query parameters">
      <Box my={2}>
        <Text as={"h3"} fontSize={"xl"} fontWeight={"medium"}>
          Params
        </Text>
      </Box>
      <MultipleKeyValueInput
        vals={params}
        addField={addParam}
        removeField={removeParam}
        setKey={setParamKey}
        setVal={setParamValue}
        setActive={setParamActive}
      />
    </Box>
  );
};
