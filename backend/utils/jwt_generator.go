package utils

import (
	"os"

	userModel "github.com/celpung/cexam-backend/app/user/models"
	"github.com/dgrijalva/jwt-go/v4"
)

func JWTGenerator(user userModel.User) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email": user.Email,
		"id":    user.ID,
		"role":  user.Role,
	})

	tokenString, err := token.SignedString([]byte(os.Getenv("JWT_TOKEN")))
	if err != nil {
		return "", err
	}

	return tokenString, nil
}
