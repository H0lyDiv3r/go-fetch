package response

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Body map[string]interface{}
type Header map[string][]string

type ResponseModel struct {
	ContentLength string `json:"content-length"`
	ContentType   string `json:"content-type"`
	TimeStamp     string `json:"timeStamp"`
	StatusCode    uint8  `json:"statusCode"`
	Status        string `json:"status"`
	Body          Body   `json:"body"`
}

func SendResponse(res *http.Response, body []byte) string {
	var bodyData Body

	err := json.Unmarshal(body, &bodyData)
	if err != nil {
		fmt.Println("there has been an error parsing the bodysss", err)
		return "parsing error"
	}
	response := &ResponseModel{
		TimeStamp:     res.Header.Get("Date"),
		ContentType:   res.Header.Get("Content-Type"),
		ContentLength: res.Header.Get("Content-Length"),
		Status:        res.Status,
		StatusCode:    uint8(res.StatusCode),
		Body:          bodyData,
	}

	jsonRes, err := json.Marshal(response)

	if err != nil {
		return "parsing error"
	}

	return string(jsonRes)
}
