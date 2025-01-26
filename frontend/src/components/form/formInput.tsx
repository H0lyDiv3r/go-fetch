import { FormControl, Input } from "@chakra-ui/react";

type FormInputProps = {
  value: string;
  setValue: (val: any) => void;
  placeholder?: string;
};

export const FormInput: React.FC<FormInputProps> = ({
  value,
  setValue,
  placeholder,
}) => {
  return (
    <FormControl border={"none"} fontSize={"xs"} mx={1}>
      <Input
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
