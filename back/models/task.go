package models

import "time"

type Task struct {
	Cd         string `gorm:"primaryKey" json:"cd"`
	Title      string `json:"title"`
	Content    string `json:"content"`
	CreateDate time.Time `gorm:"default:current_timestamp(3)" json:"createDate"`
	CreateUser string `json:"createUser"`
	UpdateDate time.Time `gorm:"default:current_timestamp(3)" json:"updateDate"`
	UpdateUser string `json:"updateUser"`
}

func (Task) TableName() string {
	return "task"
}
