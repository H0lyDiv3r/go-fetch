import React, { useEffect, useState } from "react";
import { FormInput } from "./formInput";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { DefaultButton } from "./buttons";
import { DeleteIcon, SearchIcon } from "@chakra-ui/icons";

type MultipleValueInputProps = {
  vals: any;
  addField: () => void;
  setKey: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  setVal: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  setActive: (id: number) => void;
  removeField: (id: number) => void;
};

export const MultipleKeyValueInput: React.FC<MultipleValueInputProps> = ({
  vals,
  addField,
  removeField,
  setKey,
  setVal,
  setActive,
}) => {
  return (
    <Box>
      <DefaultButton action={addField}>Add Field</DefaultButton>
      {vals.length < 1 && (
        <Flex my={2}>
          <Box
            display={"flex"}
            w={"100%"}
            bg={"neutral.800"}
            p={2}
            borderRadius={4}
          >
            <Text fontSize={"md"}>Key</Text>
          </Box>

          <Box
            display={"flex"}
            w={"100%"}
            bg={"neutral.800"}
            p={2}
            mx={2}
            borderRadius={4}
          >
            <Text fontSize={"md"}>Value</Text>
          </Box>
        </Flex>
      )}
      {vals.length > 0 &&
        vals.map((item: any) => (
          <Flex key={item.id} my={2} p={0} alignItems={"center"}>
            <Checkbox
              size={"lg"}
              isChecked={item.active}
              colorScheme={"green"}
              onChange={() => setActive(item.id)}
            ></Checkbox>
            <FormInput value={item.key} setValue={(e) => setKey(e, item.id)} />
            <FormInput
              value={item.value}
              setValue={(e) => setVal(e, item.id)}
            />
            <IconButton
              variant={"ghost"}
              colorScheme="red"
              _hover={{ bg: "none" }}
              onClick={() => removeField(item.id)}
              aria-label="Remove field"
              icon={<DeleteIcon />}
            />
          </Flex>
        ))}
    </Box>
  );
};
