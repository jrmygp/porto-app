package models

import "time"

type Skill struct {
	ID        int
	Title     string
	Image     string
	CreatedAt time.Time
	UpdatedAt time.Time
}
