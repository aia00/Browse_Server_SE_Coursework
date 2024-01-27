package main

import (
	"backend/server"
)

func main() {
	panic(server.CreateServer().Run(":8000"))
}
