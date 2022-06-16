import React from 'react'
import {posts} from '../data'
import { Card } from '../components/Card'

export const Home = () => {
    return (
        <div className="home">
            {posts.map ((post, idx) => {
                return <Card key={idx} posts={post} />
            })}
        </div>
    )
}
