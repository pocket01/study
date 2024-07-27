package main

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"studyGo/models"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func mysqlConfig() {
	// env読み込み
	err := godotenv.Load(".env.local")
	if err != nil {
		fmt.Println("Error loading .env file")
		return
	}

	// DB設定
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbScheme := os.Getenv("DB_SCHEME")
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", dbUser, dbPassword, dbHost, dbPort, dbScheme)

	// DBに接続
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	var task models.Task
	result := db.Where("cd = ?", "TASK00000001").Take(&task)

	if result.Error != nil {
		fmt.Println("[error]result.Error:", result.Error)
		return
	}

	fmt.Printf("[test]task:{%s, %s, %s}", task.Cd, task.Title, task.Content)
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

func createRouter() *gin.Engine {
	r := corsConfig()

	r.GET("/app/pTask/", func(c *gin.Context) {
		mysqlConfig()
		c.String(http.StatusOK, "OK")
	})

	return r
}

func main() {
	r := createRouter()
	// Listen and Server in 0.0.0.0:8080
	r.Run("localhost:8080")
}
