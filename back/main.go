package main

import (
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)


type Task struct {
	CD string `json:"cd"`
	TITLE string `json:"title"`
	CONTENT string `json:"content"`
}

var tasks = []Task{
	{
		CD:"TASK0001",
		TITLE:"タスク1",
		CONTENT:"タスク1メモ",
	},
	{
		CD:"TASK0002",
		TITLE:"タスク2",
		CONTENT:"タスク2メモ",
	},
}

func corsConfig() *gin.Engine {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		// アクセスを許可したいアクセス元
		AllowOrigins: []string{
			"https://localhost:3000",
		},
		// アクセスを許可したいHTTPメソッド(以下の例だとPUTやDELETEはアクセスできません)
		AllowMethods: []string{
			"GET",
			"POST",
			"PUT",
			"DELETE",
		},
		// // 許可したいHTTPリクエストヘッダ
		// AllowHeaders: []string{
		// 	"Access-Control-Allow-Credentials",
		// 	"Access-Control-Allow-Headers",
		// 	"Content-Type",
		// 	"Content-Length",
		// 	"Accept-Encoding",
		// 	"Authorization",
		// },
		// cookieなどの情報を必要とするかどうか
		AllowCredentials: true,
		// preflightリクエストの結果をキャッシュする時間
		MaxAge: 24 * time.Hour,
	  }))
	return r
}

// func mysqlConfig() *gin.Engine {
// 	article := article.New()
//     user := user.New()
// 	lib.DBOpen()
//     defer lib.DBClose()
// }

func createRouter() *gin.Engine {
	r := corsConfig()

	r.GET("/app/pTask/", func(c *gin.Context) {
		c.JSON(http.StatusOK, tasks)
	})
	return r
}

func main() {
	r := createRouter()
	// Listen and Server in 0.0.0.0:8080
	r.Run("localhost:8080")
}
