import { chakra } from "@chakra-ui/react";
import { MakeRequest } from "../wailsjs/go/request/Request";
import { Button } from "./components/ui/button";
import { useRequestStore } from "./store/store";

function App() {
    const {
        url,
        method,
        params,
        headers,
        body,
        setUrl,
        setMethod,
        setJsonBody,
    } = useRequestStore();
    const tkn =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImpvcyIsIkVtYWlsIjoiam9zcEBnbWFpbC5jb20ifQ.t3tK7UVG33YdWpudJUAFbBvoRG1qIJpMIiLr2h8BdHQ";
    const handleRequest = (url: string) => {
        MakeRequest(
            JSON.stringify({
                method: "GET",
                url: "http://localhost:3030/todos/1",
                params: { param1: "param1value" },
                headers: { Authorization: tkn },
                body: {
                    Content: "aaaaaaaaaaaaaaandho",
                    Status: true,
                },
            }),
        ).then((res) => console.log(res));
    };

    return (
        <div className="dark">
            <input value={url} onChange={(e) => setUrl(e.target.value)} />
            {/* <Input
                className="text-black"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /> */}
            <Button bg="red">aaaaa</Button>
            <button onClick={() => handleRequest(url)}>request</button>
        </div>
    );
}

export default App;
