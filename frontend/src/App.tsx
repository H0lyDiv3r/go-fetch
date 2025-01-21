import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useState } from "react";
import { MakeRequest } from "../wailsjs/go/request/Request";
import { useCountStore } from "./store/store";

function App() {
    const [url, setUrl] = useState("");
    const [token, setToken] = useState("");
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
    const increment = useCountStore((state: any) => state.increment);
    const count = useCountStore((state: any) => state.count);
    const reset = useCountStore((state: any) => state.reset);
    return (
        <div>
            <Input
                className="text-black"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <Input
                className="text-black"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            />
            <p style={{ color: "black" }}>{count}</p>
            <Button onClick={increment}>inc</Button>
            <Button onClick={reset}>inc</Button>
            <Button onClick={() => handleRequest(url)}>request</Button>
        </div>
    );
}

export default App;
