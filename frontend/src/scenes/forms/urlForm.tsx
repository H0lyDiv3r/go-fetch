import { useState } from "react";
import { FormInput } from "../../components";

export const UrlForm = () => {
    const [value, setValue] = useState("");
    const handleSetVal = (e: any) => {
        setValue(e.target.value);
    };
    return (
        <>
            <FormInput value={value} setValue={handleSetVal} />
            {value}
        </>
    );
};
