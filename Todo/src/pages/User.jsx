import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";
import { useGetList } from "../hooks/useGetList";
import { useEffect, useState } from "react";
import { usePost } from "../hooks/usePost";

const User = () => {
    const { user } = useAuthContext()
    const { username } = useParams();

    const { post, data, postIsLoading, postError } = usePost()
    const [body, setBody] = useState(null)

    if(user?.username !== username){
        return(
            <Navigate to="/"/>
        )
    }

    const { getList, list, isLoading, error } = useGetList()

    useEffect(() => {
        getList()
    },[])

    const makePost = (e) => {
        e.preventDefault()
        post(body)
    }

    useEffect(() => {
        getList()
    },[data])

    return(
        <div className="user">
            <h1 className="title">The shit i am going to do today</h1>

            <div className="list">
            {list && list.map((item) => (
                <div className="item" key={item?._id}>
                    <p>{item?.body}</p>
                </div>
            ))}
            </div>

            <form onSubmit={(e) => makePost(e)}>
                <input className="inputField" type="text" placeholder="Type new shit here..." onChange={(e) => setBody(e.target.value)}/>
            </form>
        </div>
    )
}

export default User