package models

import (
	"gorm.io/gorm"
)

type User struct {
	ID             uint      `gorm:"primaryKey" json:"id"`
	Name           string    `gorm:"not null" json:"name" binding:"required"`
	Email          string    `gorm:"unique" json:"email" binding:"required"`
	Phone          string    `gorm:"unique" json:"phone"`
	Password       string    `json:"password"`
	Role           uint      `gorm:"not null;default:1" json:"role"`
	Active         bool      `gorm:"not null;default:1" json:"active"`
	EmailConfirmed bool      `gorm:"not null;default:0" json:"email_confirmed"`
	UserPhoto      UserPhoto `gorm:"foreignKey:UserID" json:"photo"`
	GoogleID       string    `json:"google_id"`
	gorm.Model
}
