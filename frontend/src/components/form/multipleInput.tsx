import React, { useEffect, useState } from "react";
import { FormInput } from "./formInput";
import { Flex } from "@chakra-ui/react";
import { DefaultButton } from "./buttons";
import { useRequestStore } from "../../store/store";

export const MultipleKeyValueInput = () => {
  const { addParam, params, setParamKey } = useRequestStore();
  const [param, setParam] = useState([
    { id: 1, key: "Auth", value: "TOKEN GOES HERE" },
  ]);

  const handleAddField = () => {
    setParam((params) => {
      return [
        ...params,
        { id: params[params.length - 1].id + 1, key: "", value: "" },
      ];
    });
  };

  // const setParamKey = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
  //   const newKey = e.target.value;

  //   setParam((prevParams) => {
  //     return prevParams.map((param) =>
  //       param.id === id ? { ...param, key: newKey } : param,
  //     );
  //   });
  // };

  const setParamVal = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    setParam((prev) => {
      return prev.map((param) =>
        param.id === id ? { ...param, value: e.target.value } : param,
      );
    });
  };

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <>
      {params.map((item: any) => (
        <Flex key={item.id} my={2}>
          <FormInput
            value={item.key}
            setValue={(e) => setParamKey(e, item.id)}
          />
          <FormInput
            value={item.value}
            setValue={(e) => setParamVal(e, item.id)}
          />
        </Flex>
      ))}
      <button onClick={addParam}>add</button>
    </>
  );
};
