import { Button } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../themes";

type DefaultButtonProps = {
  action: () => void;
  children: React.ReactNode;
};

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  action,
  children,
  ...other
}) => {
  return (
    <>
      <Button
        fontWeight={"semibold"}
        color={"brand.100"}
        mx={1}
        px={5}
        onClick={action}
        bg={"brand.500"}
        _hover={{ bg: `${colors.brand[600]}` }}
        borderRadius={"md"}
      >
        {children}
      </Button>
    </>
  );
};
