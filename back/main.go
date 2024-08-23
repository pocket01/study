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

func mysqlConfig() *gorm.DB {
	// env読み込み
	err := godotenv.Load(".env.local")
	if err != nil {
		fmt.Println("Error loading .env file")
		return nil
	}

	// DB設定
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbScheme := os.Getenv("DB_SCHEME")
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true", dbUser, dbPassword, dbHost, dbPort, dbScheme)

	// DBに接続
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	return db
}

func corsConfig() *gin.Engine {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		// アクセスを許可したいアクセス元
		AllowOrigins: []string{
			"https://localhost:3000",
		},
		AllowHeaders: []string{
			"Content-Type",
		},
		AllowMethods: []string{
			http.MethodGet,
			http.MethodPost,
			http.MethodPut,
			http.MethodDelete,
		},
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
		db := mysqlConfig()
		
		var tasks []models.Task
		result := db.Find(&tasks)

		if result.Error != nil {
			fmt.Println("[error]result.Error:", result.Error)
		}
		c.JSON(http.StatusOK, tasks)
	})
	r.POST("/app/pTask/", func(c *gin.Context) {
		var task models.Task
		if err := c.BindJSON(&task); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		db := mysqlConfig()

		// タスクコードを新規採番
		var newCode []string
		db.Raw("CALL get_next_task_cd()").Scan(&newCode)

		if db != nil {
			task.Cd = newCode[0]
			db.Create(models.Task{Cd: task.Cd, Title: task.Title, Content: task.Content, CreateUser: task.CreateUser})
		}
	})

	r.PUT("/app/pTask/", func(c *gin.Context) {
		var task models.Task
		if err := c.BindJSON(&task); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		db := mysqlConfig()

		if db != nil {
			db.Model(&task).Updates(&models.Task{Title: task.Title, Content: task.Content, UpdateUser: task.UpdateUser})
		}
	})

	r.DELETE("/app/pTask/", func(c *gin.Context) {
		var task models.Task
		if err := c.BindJSON(&task); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		db := mysqlConfig()

		if db != nil {
			db.Delete(&task)
		}
	})
	
	return r
}

func main() {
	r := createRouter()
	r.Run("localhost:8080")
}
