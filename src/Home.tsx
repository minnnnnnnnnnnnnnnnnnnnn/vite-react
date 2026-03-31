import latest from "./json/latest.json"
import Bread from "./Bread"
import "./css/home.css"
import { useEffect } from "react";

function Home() 
{
    let content = Array() ; 
    useEffect( () => { document.title = "首頁" ; } ) ; 
    for( let a of latest.sort( ( a , b ) => { return Number( b.No ) - Number( a.No ) ; } ) ) 
    {
        content.push( <li><a href={ `latest?no=${ Number( a.No ) - 1 }` }>{ a.Title }</a></li> ) ; 
    }
    return (
        <>
            <Bread path={ { "n": "首頁" , "v": "" } }/>
            <div className="latest">
                <h1 tabIndex={-1}>最新消息</h1>
                <ul>
                    { content }
                </ul>
            </div>
        </>
    ) ; 
}

export default Home ; 