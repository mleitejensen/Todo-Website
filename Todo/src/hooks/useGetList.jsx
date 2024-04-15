import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useGetList = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [list, setList] = useState(null)
    const { user } = useAuthContext()

    const getList = async () => {
        setError(null)
        setIsLoading(true)

        const response = await fetch('http://localhost:3000/list', {
            headers: {
                'Authorization': `Bearer ${user.token}`
            },
        });
        let json = await response.json();

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            setList(json)
            setIsLoading(false)
        }

    }

    return { getList, list, isLoading, error }

}