import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const usePost = () => {
    const [postError, setPostError] = useState(null)
    const [postIsLoading, setPostIsLoading] = useState(null)
    const [data, setData] = useState(null)
    const { user } = useAuthContext()

    const post = async (body) => {
        setPostError(null)
        setPostIsLoading(true)

        const response = await fetch("http://localhost:3000/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({body})
        })
        const json = await response.json()

        if(!response.ok){
            setPostIsLoading(false)
            setPostError(json.error)
        }
        if(response.ok){
            setData(json)
            setPostIsLoading(false)
        }

    }

    return { post, data, postIsLoading, postError }

}