package repo

import (
	"github.com/celpung/cexam-backend/app/user/models"
	"github.com/celpung/cexam-backend/configs"
)

func CreateEmailVerification(email string, token string) error {
	userData := &models.EmailVerification{}

	userData.Email = email
	userData.Token = token

	if err := configs.DB.Create(userData).Error; err != nil {
		return err
	}
	return nil
}
