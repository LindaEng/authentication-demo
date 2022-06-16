import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo"> Authentication Demo</span>
            <ul className="list">
                <li className="listItem">
                    <img src="https://images.unsplash.com/photo-1574950578143-858c6fc58922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="avatar"/>
                </li>
                <li className="listItem">Apprentice</li>
                <li className="listItem">Logout</li>
            </ul>
        </div>
    )
}
