package user_models

import "gorm.io/gorm"

type UserPhoto struct {
	UserID uint   `gorm:"not null" json:"user_id"`
	Photo  string `gorm:"not null" json:"photo"`
	gorm.Model
}
