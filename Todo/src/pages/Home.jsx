import { useEffect, useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'
import { Navigate } from 'react-router-dom'

const Home = () => {
    const { user } = useAuthContext()

    
    return(
        <div className="home">

        <h1 className="title">The ultimate to-do-list app</h1>
        <h1>Get shit done today!</h1>
        <p>Login to start using the app</p>
        </div>
    )
}

export default Home