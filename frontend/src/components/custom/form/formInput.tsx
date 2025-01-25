import { Input } from "@chakra-ui/react";
import { Field } from "../../ui/field";

type FormInputProps = {
    value: string;
    setValue: (val: any) => void;
};

export const FormInput: React.FC<FormInputProps> = ({ value, setValue }) => {
    return (
        <Field>
            <Input value={value} onChange={setValue} />
        </Field>
    );
};
