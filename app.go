package app

import (
    //"fmt"
    "net/http"
)

func init() {
    //http.HandleFunc("/", handler)
    fs := http.FileServer(http.Dir("view"))
    http.Handle("/", fs)
}

/*func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello, world!")
}*/
