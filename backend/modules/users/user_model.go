package users

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

type Login struct {
	Email    string `gorm:"not null" json:"email" binding:"required"`
	Password string `gorm:"not null" json:"password" binding:"required"`
}

type Register struct {
	Name     string `gorm:"not null" json:"name" binding:"required"`
	Email    string `gorm:"unique" json:"email" binding:"required"`
	Phone    string `gorm:"unique" json:"phone" binding:"required"`
	Password string `json:"password" binding:"required,min=8"`
}

type Google struct {
	Name     string `gorm:"not null" json:"name" binding:"required"`
	Email    string `gorm:"unique" json:"email" binding:"required"`
	GoogleID string `gorm:"unique" json:"google_id" binding:"required"`
}

type UserPhoto struct {
	UserID uint   `gorm:"not null" json:"user_id"`
	Photo  string `gorm:"not null" json:"photo"`
	gorm.Model
}

type EmailConfirmation struct {
	ID    uint   `gorm:"primaryKey"`
	Email string `gorm:"unique" json:"email" binding:"required"`
	Token string `gorm:"not null" json:"token"  binding:"required"`
	gorm.Model
}
