import { useState } from "react";
import { FormInput } from "../../components";
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
    ).then((res) => console.log(JSON.parse(res)));
  };

  return (
    <>
      <Flex p={"8px"}>
        <MethodSelector method={method} setMethod={setMethod} />
        <FormInput value={url} setValue={(e) => setUrl(e.target.value)} />
        <Button onClick={() => handleRequest()} bg={"neutral.900"}>
          send Request
        </Button>
      </Flex>
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
  return (
    <Menu matchWidth={true} closeOnBlur={true} closeOnSelect={true}>
      <MenuButton
        p={"4px"}
        bg={"blue"}
        borderRadius={"10px"}
        minWidth={"100px"}
      >
        <Box>{method}</Box>
      </MenuButton>
      <MenuList minW={0} defaultValue={"GET"}>
        <MenuItem onClick={() => setMethod(Methods.GET)}>GET</MenuItem>
        <MenuItem onClick={() => setMethod(Methods.POST)}>POST</MenuItem>
        <MenuItem onClick={() => setMethod(Methods.PUT)}>PUT</MenuItem>
        <MenuItem onClick={() => setMethod(Methods.DELETE)}>DELETE</MenuItem>
      </MenuList>
    </Menu>
  );
};
