import React, {useState, useEffect} from "react"
import topListData from "./topListData";


const Context = React.createContext()

function ContextProvider(props) {

    const [topListCreators, setTopListCreators] = useState(
        JSON.parse(localStorage.getItem("topList")) || topListData)

    function toggleFollow(id) {
        const updatedArray = topListCreators.map(item => {
            if (item.id === id) {
                return {...item, isFollowed: !item.isFollowed}
            }
            return item
        })
        setTopListCreators(updatedArray)
    }

    useEffect(() => {
        localStorage.setItem("topList", JSON.stringify(topListCreators))
    }, [topListCreators])



    return (
        <Context.Provider value={{topListCreators, toggleFollow}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}