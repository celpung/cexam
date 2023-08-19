package repo

import (
	"github.com/celpung/cexam-backend/app/user/models"
	"github.com/celpung/cexam-backend/configs"
	"golang.org/x/crypto/bcrypt"
)

func LoginUser(login models.Login) (*models.User, error) {
	user := &models.User{}

	result := configs.DB.Where("email = ? AND active = ? AND email_confirmed = ?", login.Email, 1, 1).First(&user)
	if result.Error != nil {
		return nil, result.Error
	}

	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(login.Password))
	if err != nil {
		return nil, err
	}

	return user, nil
}
