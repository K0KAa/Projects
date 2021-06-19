import React from 'react'

export default function Button({handleDelete}) {
    return (
        <div>
            <button type="button" style ={{background: "red", color:"white"}} onClick = {handleDelete}>delete me</button>
        </div>
    )
}
