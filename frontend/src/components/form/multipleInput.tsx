import React, { useEffect, useState } from "react";
import { FormInput } from "./formInput";
import { Checkbox, Flex } from "@chakra-ui/react";

type MultipleValueInputProps = {
  vals: any;
  addField: () => void;
  setKey: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  setVal: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  setActive: (id: number) => void;
};

export const MultipleKeyValueInput: React.FC<MultipleValueInputProps> = ({
  vals,
  addField,
  setKey,
  setVal,
  setActive,
}) => {
  return (
    <>
      {vals.map((item: any) => (
        <Flex key={item.id} m={2} p={0} alignItems={"center"}>
          <Checkbox
            size={"lg"}
            isChecked={item.active}
            colorScheme={"green"}
            onChange={() => setActive(item.id)}
          ></Checkbox>
          <FormInput value={item.key} setValue={(e) => setKey(e, item.id)} />
          <FormInput value={item.value} setValue={(e) => setVal(e, item.id)} />
        </Flex>
      ))}
      <button onClick={addField}>add</button>
    </>
  );
};
