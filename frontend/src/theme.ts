import {
    createSystem,
    defaultConfig,
    defineConfig,
    mergeConfigs,
} from "@chakra-ui/react";

const customConfig = defineConfig({
    theme: {
        tokens: {
            colors: {
                primary: { value: "#0FEE0F" },
                red: {
                    DEFAULT: { value: "green" },
                },
                secondary: { value: "#EE0F0F" },
            },
            fonts: {
                body: { value: "system-ui, sans-serif" },
            },
        },
    },
});
const theme = mergeConfigs(defaultConfig, customConfig);

export default createSystem(theme);
