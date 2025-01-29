package errs

import (
	"encoding/json"
)

type CustomError struct {
	Messages []string `json:"messages"`
}

func SendError(messages ...string) string {
	return (&CustomError{Messages: messages}).Error()
}

func (c *CustomError) Error() string {
	res, err := json.Marshal(c)
	if err != nil {
	   return `{error:Unknown error}`
	}
	return string(res)
}
