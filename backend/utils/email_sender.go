package utils

import (
	"os"

	"github.com/go-gomail/gomail"
)

func EmailSender(email, token string, subject string, body string) error {
	m := gomail.NewMessage()
	m.SetHeader("From", os.Getenv("SMTP_EMAIL_SENDER"))
	m.SetHeader("To", email)
	m.SetHeader("Subject", subject)

	htmlBody := body
	m.SetBody("text/html", htmlBody)

	d := gomail.NewDialer(os.Getenv("SMTP_HOST"), 465, os.Getenv("SMTP_USER"), os.Getenv("SMTP_PASSWORD"))
	if err := d.DialAndSend(m); err != nil {
		return err
	}

	return nil
}
