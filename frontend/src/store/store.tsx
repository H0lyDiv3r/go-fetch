import React from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
type Headers = { [key: string]: string };
type Params = { id: number; key: string; value: string; active: boolean }[];
type JsonBody = { [key: string]: string | number | boolean | JsonBody };
type requestStore = {
  method: Methods;
  url: string;
  params: Params;
  headers: Headers;
  body: JsonBody;
  setMethod: (method: Methods) => void;
  setUrl: (url: string) => void;
  addParam: () => void;
  setParamKey: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  setParamValue: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  setParamActive: (id: number) => void;
  addHeader: (name: string, value: string) => void;
  setJsonBody: (body: string) => void;
};

export const useRequestStore = create<requestStore>()(
  persist(
    (set, get) => ({
      method: Methods.GET,
      url: "",
      params: [{ id: 1, key: "Auth", value: "TOKEN GOES HERE", active: true }],
      headers: {},
      body: {},
      setMethod: (method: Methods) =>
        set((state) => ({ ...state, method: method })),
      setUrl: (url: string) => set((state) => ({ ...state, url: url })),
      addParam: () =>
        set((state) => {
          const params = [
            ...state.params,
            {
              id: state.params[state.params.length - 1].id + 1,
              key: "",
              value: "",
              active: true,
            },
          ];
          return { ...state, params: params };
        }),
      setParamKey: (e: React.ChangeEvent<HTMLInputElement>, id: number) =>
        set((state) => {
          const newKey = e.target.value;

          return {
            ...state,
            params: state.params.map((param) => {
              return param.id === id ? { ...param, key: newKey } : param;
            }),
          };
        }),
      setParamValue: (e: React.ChangeEvent<HTMLInputElement>, id: number) =>
        set((state) => {
          const newKey = e.target.value;
          return {
            ...state,
            params: state.params.map((param) => {
              return param.id === id ? { ...param, value: newKey } : param;
            }),
          };
        }),
      setParamActive: (id: number) =>
        set((state) => {
          return {
            ...state,
            params: state.params.map((param) => {
              return param.id === id
                ? { ...param, active: !param.active }
                : param;
            }),
          };
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
