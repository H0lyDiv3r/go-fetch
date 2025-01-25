import { FormControl, Input } from "@chakra-ui/react";

type FormInputProps = {
    value: string;
    setValue: (val: any) => void;
};

export const FormInput: React.FC<FormInputProps> = ({ value, setValue }) => {
    return (
        <FormControl>
            <Input value={value} onChange={setValue} />
        </FormControl>
    );
};
