package main

import (
	"fmt"
	"log"
	"os"

	"github.com/celpung/cexam-backend/configs"
	"github.com/celpung/cexam-backend/modules/users"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env", err)
	}

	configs.ConnectDatabase()
	if migrateErr := configs.DB.AutoMigrate(
		&users.User{},
	); migrateErr != nil {
		panic(migrateErr)
	}

	r := gin.Default()

	r.Static("/public", "./public")

	api := r.Group("/")
	users.UserController(api)

	r.Run(fmt.Sprintf(":%s", os.Getenv("PORT")))
}
