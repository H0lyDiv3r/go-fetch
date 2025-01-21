import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useState } from "react";
import { MakeRequest } from "../wailsjs/go/request/Request";

function App() {
    const [url, setUrl] = useState("");
    const [token, setToken] = useState("");
    const tkn =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImpvcyIsIkVtYWlsIjoiam9zcEBnbWFpbC5jb20ifQ.t3tK7UVG33YdWpudJUAFbBvoRG1qIJpMIiLr2h8BdHQ";
    const handleRequest = (url: string) => {
        MakeRequest(
            JSON.stringify({
                method: "GET",
                url: "http://localhost:3030/todos",
                params: { param1: "param1value" },
                headers: { Authorization: tkn },
                body: {
                    Content: "aaaaaaaaaaaaaaandho",
                    Status: false,
                },
            }),
        ).then((res) => console.log(res));
    };
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
            <Button onClick={() => handleRequest(url)}>request</Button>
        </div>
    );
}

export default App;
