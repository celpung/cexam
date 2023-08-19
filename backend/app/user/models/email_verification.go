package models

import "gorm.io/gorm"

type EmailVerification struct {
	ID    uint   `gorm:"primaryKey" json:"id"`
	Email string `gorm:"not null" json:"email" binding:"required"`
	Token string `gorm:"not null" json:"token" binding:"required"`
	gorm.Model
}
