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
  useDisclosure,
} from "@chakra-ui/react";
import { Methods, useRequestStore } from "../../store/store";
import { MakeRequest } from "../../../wailsjs/go/request/Request";
import { colors } from "../../themes";

export const UrlForm = () => {
  const { url, method, params, headers, body, setUrl, setMethod, setJsonBody } =
    useRequestStore();
  const tkn =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImpvcyIsIkVtYWlsIjoiam9zcEBnbWFpbC5jb20ifQ.t3tK7UVG33YdWpudJUAFbBvoRG1qIJpMIiLr2h8BdHQ";
  const handleRequest = () => {
    console.log(method, url);
    MakeRequest(
      JSON.stringify({
        method: method,
        url: url,
        // params: { param1: "param1value" },
        headers: { Authorization: tkn },
        // body: {
        //     Content: "aaaaaaaaaaaaaaandho",
        //     Status: true,
        // },
      }),
    )
      .then((res) => console.log(JSON.parse(res)))
      .catch((res) => console.log("unknown error"));
  };

  return (
    <>
      <Flex p={"8px"}>
        <MethodSelector method={method} setMethod={setMethod} />
        <FormInput value={url} setValue={(e) => setUrl(e.target.value)} />
        <DefaultButton action={() => handleRequest()}>Send</DefaultButton>
      </Flex>
      <MultipleKeyValueInput />
    </>
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
        mx={"4px"}
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
