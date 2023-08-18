package user

import (
	"net/http"

	"github.com/celpung/cexam-backend/app/user/user_models"
	"github.com/celpung/cexam-backend/app/user/user_repo"
	"github.com/celpung/cexam-backend/configs"
	"github.com/celpung/cexam-backend/utils"
	"github.com/gin-gonic/gin"
)

// Initialize the user package.
func init() {
	configs.ConnectDatabase()

	// Auto migrate the User model for database schema evolution.
	if migrateErr := configs.DB.AutoMigrate(
		&user_models.User{},
	); migrateErr != nil {
		panic(migrateErr)
	}
}

// UserHandler defines the user-related routes and their handlers.
func UserHandler(r *gin.RouterGroup) {
	router := r.Group("/user")

	router.POST("/register", func(ctx *gin.Context) {
		var user user_models.User

		// Bind JSON data from the request body to the user object.
		if err := ctx.ShouldBindJSON(&user); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"success": false,
				"message": "Failed to bind JSON data",
				"error":   err.Error(),
			})
			return
		}

		// Hash the user's password.
		hashedPassword, err := utils.HashingPassword(user.Password)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"success": false,
				"message": "Failed to hash password",
				"error":   err.Error(),
			})
			return
		}

		user.Password = hashedPassword

		// Create the user in the database.
		if err := user_repo.CreateUser(user); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"success": false,
				"message": "Failed to create user",
				"error":   err.Error(),
			})
			return
		}

		ctx.JSON(http.StatusCreated, gin.H{
			"success": true,
			"message": "Registered successfully!",
		})
	})

	router.POST("/login", func(ctx *gin.Context) {
		var login user_models.Login

		// Bind JSON data from the request body to the Login object.
		if err := ctx.ShouldBindJSON(&login); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"success": false,
				"message": "Failed to bind JSON data",
				"error":   err.Error(),
			})
			return
		}

		// Attempt to log in the user.
		user, err := user_repo.LoginUser(login)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"success": false,
				"message": "Login failed!",
				"error":   err.Error(),
			})
			return
		}

		// Generate a JWT token for the user.
		tokenString, err := utils.JWTGenerator(*user)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"success": false,
				"message": "Login failed!",
				"error":   err.Error(),
			})
			return
		}

		ctx.JSON(http.StatusOK, gin.H{
			"success": true,
			"message": "Login success!",
			"token":   tokenString,
		})
	})
}
