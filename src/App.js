import React from "react"
import Player from "./Player"
import players from "./index"

const App = () => {

    return (
        <>
            <Player playerProf={players[0]} />
            <Player playerProf={players[1]} />
        </>
    )
}

export default App

