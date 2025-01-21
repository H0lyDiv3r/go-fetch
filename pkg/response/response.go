package response

import "fmt"

type body map[string]interface{}
type header map[string]interface{}

type ResponseModel struct {
	IsError    bool
	StatusCode uint8
	Status     string
	Body       body
}

func Resp(res interface{}) {
	fmt.Println("working", &res)
}
