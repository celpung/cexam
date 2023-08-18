package utils

import (
	"errors"

	"golang.org/x/crypto/bcrypt"
)

func HashingPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", errors.New("failed to hashing password")
	}

	return string(hashedPassword), nil
}
