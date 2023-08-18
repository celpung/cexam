package utils

import (
	"os"

	"github.com/celpung/cexam-backend/modules/users"
	"github.com/dgrijalva/jwt-go/v4"
)

func JWTGenerator(user users.User) (string, error) {
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
