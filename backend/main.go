package main

import (
	"fmt"
	"log"
	"os"

	"github.com/celpung/cexam-backend/configs"
	"github.com/celpung/cexam-backend/routers"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env", err)
	}

	configs.ConnectDatabase()
	if migrateErr := configs.DB.AutoMigrate(
	// &models.User{},
	); migrateErr != nil {
		panic(migrateErr)
	}

	fmt.Println("are you redy !!!")
	r := routers.Api()
	r.Static("/public", "./public")

	r.Run(fmt.Sprintf(":%s", os.Getenv("PORT")))
}
