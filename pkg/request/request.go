package request

import (
	"context"
	"encoding/json"
	"fmt"
	"go-fetch/pkg/errs"
	"go-fetch/pkg/response"

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

func (r *Request) MakeRequest(data string) string {
	var client RequestModel
	jsonData := []byte(data)
	err := json.Unmarshal(jsonData, &client)
	if err != nil {
		return errs.SendError("request failed", err.Error())
	}

	method := client.Method

	switch method {
	case "GET":
		return client.GetRequest()
	case "POST":
		return client.PostRequest()
	case "PUT":
		return client.PutRequest()
	case "DELETE":
		return client.DeleteRequest()
	default:
		return errs.SendError("cant make request")
	}
}

func (r *RequestModel) GetRequest() string {
	client := resty.New().R()
	client.SetHeaders(r.Headers)
	client.SetQueryParams(r.Params)
	client.SetBody(r.Body)
	res, err := client.Get(r.Url)

	fmt.Println("first")
	if err != nil {
		return errs.SendError("request failed", err.Error())
	}
	return response.SendResponse(res.RawResponse, res.Body())
}
func (r *RequestModel) PostRequest() string {
	client := resty.New().R()
	client.SetHeaders(r.Headers)
	client.SetQueryParams(r.Params)
	client.SetBody(r.Body)
	response, err := client.Post(r.Url)
	if err != nil {
		return errs.SendError("request failed", err.Error())
	}
	return string(response.Body())
}
func (r *RequestModel) PutRequest() string {
	client := resty.New().R()
	client.SetHeaders(r.Headers)
	client.SetQueryParams(r.Params)
	client.SetBody(r.Body)
	response, err := client.Put(r.Url)
	if err != nil {
		return errs.SendError("request failed", err.Error())
	}
	return string(response.Body())
}
func (r *RequestModel) DeleteRequest() string {
	client := resty.New().R()
	client.SetHeaders(r.Headers)
	client.SetQueryParams(r.Params)
	client.SetBody(r.Body)
	response, err := client.Delete(r.Url)
	if err != nil {
		return errs.SendError("request failed", err.Error())
	}
	return string(response.Body())
}
