package repo

import (
	userModel "github.com/celpung/cexam-backend/app/user/models"
	"github.com/celpung/cexam-backend/configs"
)

func CreateUser(user userModel.User) error {

	if err := configs.DB.Create(&user).Error; err != nil {
		return err
	}

	return nil
}
