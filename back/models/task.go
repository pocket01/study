package models

type Task struct {
	Cd          string `gorm:"primaryKey;column:cd"`
	Title       string `gorm:"column:title"`
	Content     string `gorm:"column:content"`
	Create_date string `gorm:"column:create_date"`
	Create_user string `gorm:"column:create_user"`
	Update_date string `gorm:"column:update_date"`
	Update_user string `gorm:"column:update_user"`
}

func (Task) TableName() string {
	return "task"
}
