import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

enum Methods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}
type Headers = { [key: string]: string };
type Params = { [key: string]: string };
type JsonBody = { [key: string]: string | number | boolean | JsonBody };
type requestStore = {
    method: Methods;
    url: string;
    params: Params;
    headers: Headers;
    body: JsonBody;
    setMethod: (method: Methods) => void;
    setUrl: (url: string) => void;
    addParam: (name: string, value: string) => void;
    addHeader: (name: string, value: string) => void;
    setJsonBody: (body: string) => void;
};

export const useRequestStore = create<requestStore>()(
    persist(
        (set, get) => ({
            method: Methods.GET,
            url: "",
            params: {},
            headers: {},
            body: {},
            setMethod: (method: Methods) =>
                set((state) => ({ ...state, method: method })),
            setUrl: (url: string) => set((state) => ({ ...state, url: url })),
            addParam: (name: string, value: string) =>
                set((state) => {
                    const params = { ...state.params };
                    params[name] = value;
                    return { ...state, params: params };
                }),
            addHeader: (name: string, value: string) =>
                set((state) => {
                    const headers = { ...state.headers };
                    headers[name] = value;
                    return { ...state, headers: headers };
                }),
            setJsonBody: (body: string) =>
                set((state) => {
                    if (isValidJSON(body)) {
                        const jsonBody = JSON.parse(body);
                        return { ...state, body: JSON.parse(body) };
                    }
                    return { ...state, body: {} };
                }),
        }),
        {
            name: "requestStore",
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);

const isValidJSON = (str: string) => {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};
