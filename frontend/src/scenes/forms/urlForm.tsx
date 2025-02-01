import { useState } from "react";
import {
  DefaultButton,
  FormInput,
  MultipleKeyValueInput,
} from "../../components";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Methods, useRequestStore } from "../../store/store";
// import { MakeRequest } from "../../../wailsjs/go/request/Request";
import { colors } from "../../themes";
import { MakeRequest } from "../../../wailsjs/go/request/Request";
import { ParamForm } from "./paramForm";
import { HeaderForm } from "./headerForm";
import { JsonBodyInput } from "./jsonBodyInput";

export const UrlForm = () => {
  const { url, method, params, headers, setUrl, setMethod, setResponse, body } =
    useRequestStore();
  const tkn =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImpvcyIsIkVtYWlsIjoiam9zcEBnbWFpbC5jb20ifQ.t3tK7UVG33YdWpudJUAFbBvoRG1qIJpMIiLr2h8BdHQ";
  const handleRequest = () => {
    const newParams: { [key: string]: string } = {};
    const newHeaders: { [key: string]: string } = {};
    headers.forEach((headers) => {
      if (headers.active) {
        newHeaders[headers.key] = headers.value;
      }
    });
    params.forEach((param) => {
      if (param.active) {
        newParams[param.key] = param.value;
      }
    });

    MakeRequest(
      JSON.stringify({
        method: method,
        url: url,
        params: newParams,
        headers: newHeaders,
        body: JSON.parse(body),
      }),
    )
      .then((res) => {
        setResponse(JSON.parse(res));
      })
      .catch((res) => console.log("unknown error"));
  };

  return (
    <Box>
      <Box aria-label="Search url and method">
        <Flex>
          <MethodSelector method={method} setMethod={setMethod} />
          <FormInput value={url} setValue={(e) => setUrl(e.target.value)} />
          <DefaultButton action={() => handleRequest()}>Send</DefaultButton>
        </Flex>
      </Box>
      <ParamForm />
      <HeaderForm />
      <Box>
        <JsonBodyInput />
      </Box>
    </Box>
  );
};

type MethodSelectorType = {
  method: string;
  setMethod: (method: Methods) => void;
};

const MethodSelector: React.FC<MethodSelectorType> = ({
  method,
  setMethod,
}) => {
  const methods = ["GET", "PUT", "POST", "DELETE"];
  return (
    <Menu matchWidth={true} closeOnBlur={true} closeOnSelect={true}>
      <MenuButton
        fontSize={"xs"}
        px={1}
        bg={"neutral.800"}
        borderRadius={"md"}
        minWidth={"60px"}
      >
        {method}
      </MenuButton>
      <MenuList
        border={"none"}
        p={"6px"}
        minW={0}
        defaultValue={"GET"}
        bg={"neutral.800"}
        textAlign={"center"}
      >
        {methods.map((item: any, idx) => (
          <MenuItem
            key={idx}
            borderRadius={"md"}
            justifyContent={"center"}
            px={0}
            _hover={{ bg: `${colors.brand[500]}` }}
            bg={"neutral.800"}
            onClick={() => setMethod(Methods[item as Methods])}
          >
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

// export const paramsToObject = (array: any[]) => {
//   const newObject: { [key: string]: string } = {};
//   array.forEach((item) => {
//     Object.keys(item);
//     Object.values(item);
//     console.log(item);
//   });
// };
