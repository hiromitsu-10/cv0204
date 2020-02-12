import React, { useState } from "react"


const Player = (props) => {

    const [count, setCount] = useState(0)

    return (
        <>
            <h1>{props.playerProf.name}:{count}</h1>
            <p>特技：{props.playerProf.skills}</p>
            <button
                type="button"
                onClick={() => setCount(count + 1)}
            >
                おせ
            </button>
        </>
    )
}

export default Player