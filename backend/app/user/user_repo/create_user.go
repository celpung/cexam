package user_repo

import (
	"github.com/celpung/cexam-backend/app/user/user_models"
	"github.com/celpung/cexam-backend/configs"
)

func CreateUser(user user_models.User) error {

	if err := configs.DB.Create(&user).Error; err != nil {
		return err
	}

	return nil
}
