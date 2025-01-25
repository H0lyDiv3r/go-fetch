import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { UrlForm } from "../scenes";

export const Layout = () => {
    return (
        <Grid
            templateColumns={"repeat(12,1fr)"}
            height={"100vh"}
            bg={"gray.900"}
        >
            <GridItem width={"200px"} bg={"gray.800"}>
                aaa
            </GridItem>
            <GridItem colSpan={7}>
                <UrlForm />
            </GridItem>
            <GridItem colSpan={3}>aaa</GridItem>
        </Grid>
    );
};
