package utils

import (
	"os"

	"github.com/celpung/cexam-backend/app/user/user_models"
	"github.com/dgrijalva/jwt-go/v4"
)

func JWTGenerator(user user_models.User) (string, error) {
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
