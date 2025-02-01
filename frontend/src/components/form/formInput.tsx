import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React from "react";

type FormInputProps = {
  value?: string;
  setValue?: (val: any) => void;
  placeholder?: string;
  name?: string;
  label?: string;
  type?: string;
};

export const FormInput: React.FC<FormInputProps> = ({
  value,
  setValue,
  placeholder,
  label,
  type = "text",
  name,
}) => {
  return (
    <FormControl border={"none"} fontSize={"xs"} mx={2} my={0} py={0}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input
        type={type}
        name={name}
        value={value}
        onChange={setValue}
        bg={"neutral.800"}
        border={"none"}
        placeholder={placeholder}
        _hover={{ borderColor: "none" }}
        _active={{ borderColor: "none" }}
        _focus={{ borderColor: "none" }}
      />
    </FormControl>
  );
};

export const FormTextArea: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  value,
  setValue,
  placeholder = "",
}) => {
  return (
    <FormControl border={"none"} fontSize={"xs"} my={0} py={0}>
      {label && <FormLabel>{label}</FormLabel>}
      <Textarea
        rows={20}
        maxH={"300px"}
        minH={"300px"}
        name={name}
        value={value}
        onChange={setValue}
        bg={"neutral.800"}
        border={"none"}
        placeholder={placeholder}
        _hover={{ borderColor: "none" }}
        _active={{ borderColor: "none" }}
        _focus={{ borderColor: "none" }}
      />
    </FormControl>
  );
};
