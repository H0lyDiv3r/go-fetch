package response

import (
	"encoding/json"
	"go-fetch/pkg/errs"
	"net/http"
)

type Body map[string]interface{}

type HeaderModel struct {
	ContentLength string `json:"content-length"`
	ContentType   string `json:"content-type"`
	TimeStamp     string `json:"timeStamp"`
	StatusCode    uint8  `json:"statusCode"`
	Status        string `json:"status"`
}

type ResponseModel struct {
	Header HeaderModel `json:"header"`
	Body   Body        `json:"body"`
}

func SendResponse(res *http.Response, body []byte) string {
	var bodyData Body

	err := json.Unmarshal(body, &bodyData)
	if err != nil {
		return errs.SendError("error parsing response body", err.Error())
	}

	headers := HeaderModel{
		TimeStamp:     res.Header.Get("Date"),
		ContentType:   res.Header.Get("Content-Type"),
		ContentLength: res.Header.Get("Content-Length"),
		Status:        res.Status,
		StatusCode:    uint8(res.StatusCode),
	}
	response := &ResponseModel{
		Header: headers,
		Body:   bodyData,
	}

	jsonRes, err := json.Marshal(response)
	if err != nil {
		return errs.SendError("unknown error", err.Error())
	}

	return string(jsonRes)
}
