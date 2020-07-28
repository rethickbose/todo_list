import React from 'react'

function Header() {

    const mystyle = {
        color: "#C3B091",
        backgroundColor: "Khaki",
        padding: "10px",
        fontFamily: "Arial",
        
    };

    return (  
        <div style={mystyle} >
            <h1>Task Manager</h1>
        </div>
    )
}

export default Header
