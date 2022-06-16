import React from 'react'

export const Card = ({posts}) => {
    console.log(posts)
    return (
        <div className="card">
            <span className="title">{posts.title}</span>
            <img src={posts.img} alt="" className="img" />
            <p className="desc">{posts.desc}</p>
            <button className="cardButton">Read More</button>
        </div>
    )
}
