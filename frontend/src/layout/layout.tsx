import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { UrlForm } from "../scenes";

export const Layout = () => {
    return (
        <Grid templateColumns={"repeat(12,1fr)"} height={"100vh"}>
            <GridItem width={"200px"} bg={"gray.800"}>
                aaa
            </GridItem>
            <GridItem colSpan={{ base: 10, lg: 6 }} minW={"400px"}>
                <UrlForm />
            </GridItem>
            <GridItem colSpan={4} hideBelow={"lg"}>
                Response
            </GridItem>
        </Grid>
    );
};
