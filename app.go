package app

import (
	"net/http"
	"os"

	"github.com/captaincodeman/prpl-server-go"
)

func init() {
	version := os.Getenv("STATIC_VERSION")
	m, _ := prpl.New(
		prpl.WithVersion(version),
		prpl.WithRoot("./build"),
		prpl.WithConfigFile("./build/polymer.json"),
	)

	http.Handle("/", m)
}
