package routers

import (
	"github.com/celpung/cexam-backend/controllers"
	"github.com/gin-gonic/gin"
)

func Api() *gin.Engine {

	r := gin.Default()

	api := r.Group("/")

	controllers.UserController(api)

	return r
}
