package users

import (
	"github.com/gin-gonic/gin"
)

func UserController(r *gin.RouterGroup) {
	router := r.Group("/user")

	router.POST("", func(ctx *gin.Context) {})
}
