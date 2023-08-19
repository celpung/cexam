package utils

import (
	"math/rand"
	"time"
)

func TokenGenerator(length int) string {
	source := rand.NewSource(time.Now().UnixNano())
	generator := rand.New(source)

	const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	b := make([]byte, length)
	for i := range b {
		b[i] = letterBytes[generator.Intn(len(letterBytes))]
	}

	return string(b)
}
