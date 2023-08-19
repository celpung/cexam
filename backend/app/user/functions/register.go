package functions

import (
	"fmt"
	"net/http"
	"os"

	"github.com/celpung/cexam-backend/app/user/models"
	"github.com/celpung/cexam-backend/app/user/repo"
	"github.com/celpung/cexam-backend/utils"
	"github.com/gin-gonic/gin"
)

func Register(ctx *gin.Context) {
	var user models.User

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
	if err := repo.CreateUser(user); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"success": false,
			"message": "Failed to create user",
			"error":   err.Error(),
		})
		return
	}

	// Generate a verification token.
	token := utils.TokenGenerator(12)

	if err := repo.CreateEmailVerification(user.Email, token); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"success": false,
			"message": "Failed to create verification email",
			"error":   err.Error(),
		})
		return
	}

	// Construct the verification URL.
	verificationURL := fmt.Sprintf("%s/auth/email-confirmation/%s/%s", os.Getenv("BASE_URL"), user.Email, token)

	// Construct the HTML email body.
	htmlBody := fmt.Sprintf(`
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<title>Confirm Your Email Address</title>
				<style>
				body {
					font-family: Arial, sans-serif;
					font-size: 14px;
					line-height: 1.5;
					color: #333;
					background-color: #f5f5f5;
					padding: 20px;
				}
				h1 {
					font-size: 24px;
					margin-top: 0;
					color: #333;
				}
				p {
					margin: 0 0 20px;
				}
				a {
					color: #007bff;
					text-decoration: none;
				}
				.button {
					display: inline-block;
					padding: 10px 20px;
					font-size: 16px;
					font-weight: bold;
					color: #ffffff;
					background-color: #007bff;
					border-radius: 5px;
					text-decoration: none;
				}
				</style>
			</head>
			<body>
				<h1>Confirm Your Email Address</h1>
				<p>Please click the following button to confirm your email address:</p>
				<p><a href="%s" class="button">Confirm Email Address</a></p>
			</body>
		</html>
	`, verificationURL)

	// Send the verification email.
	utils.EmailSender(user.Email, token, "Confirm Your Email", htmlBody)

	ctx.JSON(http.StatusCreated, gin.H{
		"success": true,
		"message": "Registered successfully!",
	})
}
