package user

import (
	"github.com/celpung/cexam-backend/app/user/functions"
	"github.com/celpung/cexam-backend/app/user/models"
	"github.com/celpung/cexam-backend/configs"
	"github.com/gin-gonic/gin"
)

// Initialize the user package.
func init() {
	configs.ConnectDatabase()

	// Auto migrate the User model for database schema evolution.
	if migrateErr := configs.DB.AutoMigrate(
		&models.User{},
		&models.EmailVerification{},
	); migrateErr != nil {
		panic(migrateErr)
	}
}

// UserHandler defines the user-related routes and their handlers.
func UserHandler(r *gin.RouterGroup) {
	router := r.Group("/user")

	router.POST("/register", func(ctx *gin.Context) {
		functions.Register(ctx)
	})

	router.POST("/login", func(ctx *gin.Context) {
		functions.Login(ctx)
	})
}
