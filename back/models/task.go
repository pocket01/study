package models

type Task struct {
	Cd         string `gorm:"primaryKey" json:"cd"`
	Title      string `json:"title"`
	Content    string `json:"content"`
	CreateDate string `json:"createDate"`
	CreateUser string `json:"createUser"`
	UpdateDate string `json:"updateDate"`
	UpdateUser string `json:"updateUser"`
}

func (Task) TableName() string {
	return "task"
}
