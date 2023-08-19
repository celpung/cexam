package functions

import (
	"net/http"

	"github.com/celpung/cexam-backend/app/user/models"
	"github.com/celpung/cexam-backend/app/user/repo"
	"github.com/celpung/cexam-backend/utils"
	"github.com/gin-gonic/gin"
)

func Login(ctx *gin.Context) {
	var login models.Login

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
	user, err := repo.LoginUser(login)
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
}
