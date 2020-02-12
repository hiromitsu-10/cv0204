import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const players = [
    {
        name: "黒川",
        skills: "テニス"
    },
    {
        name: "樹里",
        skills: "英語"
    }
]

export default players

ReactDOM.render(<App />, document.getElementById("root"))
