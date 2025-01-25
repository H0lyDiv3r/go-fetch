import { MakeRequest } from "../wailsjs/go/request/Request";
import { useRequestStore } from "./store/store";
import { Layout } from "./layout/layout";

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
                method: method,
                url: url,
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
        <div>
            {/* <Input
                className="text-black"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            /> */}
            <Layout />
        </div>
    );
}

export default App;
