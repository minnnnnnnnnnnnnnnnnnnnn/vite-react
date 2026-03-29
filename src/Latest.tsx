import Bread from "./Bread";
import latest from "./json/latest.json"
import token_t from "./ts/token_t";
import tokenise from "./ts/tokenisation";

function gen( i : number ) 
{
    let a = Array() ; 
    let l = latest.at( i ) ; 
    a.push( <dt>日期</dt> ) ; 
    a.push( <dd>{ l?.Date }</dd> ) ; 
    a.push( <dt>標題</dt> ) ; 
    a.push( <dd>{ l?.Title }</dd> ) ; 
    a.push( <dt>修正內容</dt> ) ; 
    let tmp = Array() ; 
    for( let aa of ( l?.Content === undefined ? [] : l?.Content ) ) 
    {
        let temp = Array() ; 
        temp.push( <dt>修正法規</dt> ) ; 
        temp.push( <dd><a href={ aa.LawURL }>{ aa.LawName }</a></dd> ) ; 
        temp.push( <dt></dt> ) ; 
        let ls = Array() ; 
        for( let ll of aa.LawArticles ) 
        {
            let cont = Array() , amnd = Array() , reas = Array() ; 
            for( let lll of tokenise( ll.ArticleContent , ll.ArticleType == "C" ) ) 
            {
                cont.push( <li>{ lll["t"] === token_t.p ? lll["val"] : <><span style={ ll.ArticleType == "C" && lll["t"] != token_t.new ? { paddingRight: ".5rem" } : {} }>{ lll["i"] }</span><span>{ lll["val"] }</span></> }</li> ) ; 
            }
            for( let lll of tokenise( ll.Amendment , ll.ArticleType == "C" ) ) 
            {
                amnd.push( <li>{ lll["t"] === token_t.p ? lll["val"] : <><span style={ ll.ArticleType == "C" ? { paddingRight: ".5rem" } : {} }>{ lll["i"] }</span><span>{ lll["val"] }</span></> }</li> ) ; 
            }
            for( let lll of ll.Reason.split( "\r\n" ) ) { reas.push( lll ) ; reas.push( <br /> ) ; }
            ls.push( <tr><td>{ ll.ArticleType == "C" ? "" : ll.ArticleNo }</td><td><ul>{ cont }</ul></td><td><ul>{ amnd }</ul></td><td>{ reas }</td></tr> ) ; 
        }
        temp.push( <dd><dl><table><thead><tr><th>條號</th><th>原條文</th><th>修正條文</th><th>理由</th></tr></thead><tbody>{ ls }</tbody></table></dl></dd> ) ; 
        tmp.push( <dl>{ temp }</dl> ) ; 
    }
    a.push( <dd>{ tmp }</dd> ) ; 
    a.push( <dt>相關會長令</dt> ) ; 
    a.push( <dd>{ l?.Orders.map( o => 
        <dl>
            <dt>檔案名稱</dt>
            <dd>
                <a target="_blank" href={ o.FileURL }>{ o.FileName }</a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ex-link">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </dd>
            <dt>主要內容</dt>
            <dd>{ o.Main }</dd>
        </dl>
    ) }</dd> ) ; 
    return a ; 
}

function Latest( { a } : { a ?: number } ) 
{
    if( a !== undefined )
    {
        console.assert( a < latest.length && a > -1 , "invalid index of latest.json" ) ; 
        return (
            <>
                <Bread path={ { "n": "首頁>最新消息" , "v": "/>" } } />
                <dl className="la">
                    { gen( a ) } 
                </dl>
            </>
        ) ; 
    }
    else 
    {
        let content = Array() , temp = Array() ; 
        content.push( <Bread path={ { "n": "首頁>最新消息" , "v": "/>" } } /> ) ; 
        let i = latest.length ; 
        while( i -- ) 
        {
            temp.push( gen( i ) ) ; 
        }
        content.push( <dl className="la">{ temp }</dl> ) ; 
        return <>{ content }</> ; 
    }
}

export default Latest ; 