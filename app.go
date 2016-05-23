package app

import (
    "net/http"
)

func init() {
    fs := http.FileServer(http.Dir("view"))
    http.Handle("/", fs)
}
