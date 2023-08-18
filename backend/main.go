package main

import (
	"fmt"
	"log"
	"os"

	"github.com/celpung/cexam-backend/app/user"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env", err)
	}

	r := gin.Default()

	r.Static("/public", "./public")

	api := r.Group("/")
	user.UserHandler(api)

	r.Run(fmt.Sprintf(":%s", os.Getenv("PORT")))
}
