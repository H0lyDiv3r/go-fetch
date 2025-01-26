import { useState } from "react";
import { FormInput } from "./formInput";
import { Flex } from "@chakra-ui/react";

export const MultipleKeyValueInput = () => {
  const [params, setParam] = useState([{ p1: "aa" }]);
  return (
    <>
      {params.map((item: any) => (
        <Flex>
          {Object.keys(item).map((param, idx) => (
            <>
              <FormInput value={param} setValue={() => console.log()} />
              <FormInput value={item[param]} setValue={() => console.log()} />
            </>
          ))}
        </Flex>
      ))}
    </>
  );
};
