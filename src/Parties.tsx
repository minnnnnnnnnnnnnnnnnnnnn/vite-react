import { useSearchParams } from "react-router-dom";
import Back from "./Back";
import search from "./i/icon/search.svg"
import parties from "./json/parties.json"

function Parties() 
{
    const [ a ] = useSearchParams() ; 
    let q = a.get( "q" ) , s = a.get( "s" ) ; 
    return ( 
        <>
            <form action="parties" method="get" className="pq printNoDisplay">
                <label htmlFor="s">狀態：</label>
                <select name="s" id="s">
                    <option value="">不限</option>
                    <option value="一般">一般</option>
                    { /*<option value="廢止備案">廢止備案</option>*/ }
                    { /*<option value="自行解散">自行解散</option>*/ }
                </select>
                <p>
                    <input type="search" placeholder="輸入關鍵字以搜尋政黨" name="q" value={ q ? q : "" } />
                    <input type="submit" style={ { backgroundImage : search , width : "24px" , height : "24px" , backgroundColor : "#0000" , border : "0" , cursor : "pointer" } } value="" alt="搜尋！" />
                </p>
            </form>
            <table className="p">
                <thead>
                    <tr>
                        <th>編號</th>
                        <th>政黨名稱</th>
                        <th>負責人</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        parties[0].Parties.map( p => 
                            <tr>
                                <td><a href={ `detail?party=${ p.Party }&q=${ q ? q : "" }&s=${ s ? s : "" }` }>{ p.Party }</a></td>
                                <td><a href={ `detail?party=${ p.Party }&q=${ q ? q : "" }&s=${ s ? s : "" }` }>{ p.PartyName }</a></td>
                                <td>{ p.Chairman }</td>
                            </tr>
                        ) 
                    } 
                </tbody>
            </table>
            <br className="printNoDisplay" />
            <Back href="/" b={ true } />
        </> 
    ) ; 
}

export default Parties ; 