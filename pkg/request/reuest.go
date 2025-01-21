package request

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"

	"github.com/go-resty/resty/v2"
)

type header map[string]string
type param map[string]string
type body map[string]interface{}

type RequestModel struct {
	Method  string `json:"method"`
	Url     string `json:"url"`
	Params  param  `json:"params"`
	Headers header `json:"headers"`
	Body    body   `json:"body"`
}

type Request struct {
	ctx context.Context
}

func Req() *Request {
	return &Request{}
}

func (r *Request) StartUp(ctx context.Context) {
	r.ctx = ctx
}

func (r *Request) MakeRequest(data string) (string, error) {
	var client RequestModel
	jsonData := []byte(data)
	err := json.Unmarshal(jsonData, &client)
	if err != nil {
		return "there has been an error", err
	}

	method := client.Method

	switch method {
	case "GET":
		return client.GetRequest(), nil
	default:
		return "", errors.New("unknown method")
	}
}

func (r *RequestModel) GetRequest() string {
	client := resty.New().R()
	client.SetHeaders(r.Headers)
	client.SetQueryParams(r.Params)
	client.SetBody(r.Body)
	fmt.Println(r.Body)
	response, err := client.Get(r.Url)
	if err != nil {
		return "there has been an error" + r.Url
	}
	return string(response.Body())
}
