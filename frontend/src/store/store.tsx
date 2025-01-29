import React from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
type Headers = { id: number; key: string; value: string; active: boolean }[];
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
  removeParam: (id: number) => void;
  setParamKey: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  setParamValue: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  setParamActive: (id: number) => void;
  addHeader: () => void;
  removeHeader: (id: number) => void;
  setHeaderKey: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  setHeaderValue: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  setHeaderActive: (id: number) => void;
  setJsonBody: (body: string) => void;
};

export const useRequestStore = create<requestStore>()(
  persist(
    (set, get) => ({
      method: Methods.GET,
      url: "",
      params: [{ id: 1, key: "", value: "", active: false }],
      headers: [{ id: 1, key: "", value: "", active: false }],
      body: {},
      setMethod: (method: Methods) =>
        set((state) => ({ ...state, method: method })),
      setUrl: (url: string) => set((state) => ({ ...state, url: url })),
      //==============================params=====================
      addParam: () =>
        set((state) => {
          const params = [
            ...state.params,
            {
              id:
                state.params.length > 0
                  ? state.params[state.params.length - 1].id + 1
                  : 1,
              key: "",
              value: "",
              active: false,
            },
          ];
          return { ...state, params: params };
        }),
      removeParam: (id: number) =>
        set((state) => {
          return {
            ...state,
            params: state.params.filter((param) => param.id !== id),
          };
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
      //============================header==================
      addHeader: () =>
        set((state) => {
          const headers = [
            ...state.headers,
            {
              id:
                state.headers.length > 0
                  ? state.headers[state.headers.length - 1].id + 1
                  : 1,
              key: "",
              value: "",
              active: false,
            },
          ];
          return { ...state, headers: headers };
        }),
      removeHeader: (id: number) =>
        set((state) => {
          return {
            ...state,
            headers: state.headers.filter((header) => header.id !== id),
          };
        }),
      setHeaderKey: (e: React.ChangeEvent<HTMLInputElement>, id: number) =>
        set((state) => {
          const newKey = e.target.value;

          return {
            ...state,
            headers: state.headers.map((header) => {
              return header.id === id ? { ...header, key: newKey } : header;
            }),
          };
        }),
      setHeaderValue: (e: React.ChangeEvent<HTMLInputElement>, id: number) =>
        set((state) => {
          const newKey = e.target.value;
          return {
            ...state,
            headers: state.headers.map((header) => {
              return header.id === id ? { ...header, value: newKey } : header;
            }),
          };
        }),
      setHeaderActive: (id: number) =>
        set((state) => {
          return {
            ...state,
            headers: state.headers.map((header) => {
              return header.id === id
                ? { ...header, active: !header.active }
                : header;
            }),
          };
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
