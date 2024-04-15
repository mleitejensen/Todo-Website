import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useDeletePost = () => {
    const [deleteError, setDeleteError] = useState(null)
    const [deleteIsLoading, setDeleteIsLoading] = useState(null)
    const { user } = useAuthContext()

    const deletePost = async (_id) => {
        setDeleteError(null)
        setDeleteIsLoading(true)

        const response = await fetch("http://localhost:3000/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({_id})
        })
        const json = await response.json()

        if(!response.ok){
            setDeleteIsLoading(false)
            setDeleteError(json.error)
        }
        if(response.ok){
            setDeleteIsLoading(false)
        }

    }

    return { deletePost, deleteIsLoading, deleteError }

}