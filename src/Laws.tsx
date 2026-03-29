import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { tokenise_search } from "./ts/tokenisation";
import laws from "./json/laws.json"
import includes from "./ts/includes";
import sort_cat, { sort_a_to_z, sort_date, sort_date_rev, sort_law_level, sort_law_level_rev, sort_long, sort_long_pure, sort_short, sort_short_pure, sort_z_to_a } from "./ts/sort";

function Laws() 
{
    const [ a ] = useSearchParams() ; 
    let q = tokenise_search( String( a.get( "q" ) ) ) , c = String( a.get( "c" ) ) , l = String( a.get( "l" ) ) , ab = String( a.get( "ab" ) ); 
    let lq = laws[0].Laws.sort( sort_cat ).filter( l => !c || ( c.toUpperCase() == "EL" ? l.LawCategory.includes( "選舉法規" ) : ( c.toUpperCase() == "C" ? ( !l.LawCategory.includes( "選舉法規" ) && l.LawCategory.includes( "中央法規" ) ) : ( c.toUpperCase() == "EX" ? ( !l.LawCategory.includes( "選舉法規" ) && l.LawCategory.includes( "行政法規" ) ) : ( c.toUpperCase() == "L" ? ( !l.LawCategory.includes( "選舉法規" ) && l.LawCategory.includes( "立法法規" ) ) : ( c.toUpperCase() != "J" || ( !l.LawCategory.includes( "選舉法規" ) && l.LawCategory.includes( "司法法規" ) )  ) ) ) ) ) ) ; 
    if( ab )
    {
        lq = lq.filter( l => ab === "true" ? l.LawAbandonNote : ( ab === "false" ? !l.LawAbandonNote : true ) ) ; 
    }
    if( l == "章程" || l == "法律" || l == "命令" ) 
    {
        lq = lq.filter( l => l.LawLevel == c ) ; 
    }
    if( q ) 
    {
        if( q.b ) 
        {}
        else 
        {
            lq = lq.filter( l => includes( l , q.v ) ) ; 
        }
    }
    const [ s , so ] = useState( lq ) , lq_def = lq ; 
    return ( 
        <><select onChange={ e => { so( () => { 
            switch( e.target.value ) 
            { 
                case "latest" : return lq.sort( sort_date ) ; 
                case "oldest" : return lq.sort( sort_date_rev ) ; 
                case "long" : return lq.sort( sort_long ) ; 
                case "short" : return lq.sort( sort_short ) ; 
                case "longPure" : return lq.sort( sort_long_pure ) ; 
                case "shortPure" : return lq.sort( sort_short_pure ) ; 
                case "AtoZ" : return lq.sort( sort_a_to_z ) ; 
                case "ZtoA" : return lq.sort( sort_z_to_a ) ; 
                case "CtoO" : return lq.sort( sort_law_level ) ; 
                case "OtoC" : return lq.sort( sort_law_level_rev ) ; 
                case "" : return lq_def ; 
                default: return lq ; 
            } 
        } ) } }><option value="">預設</option><option value="latest">最後異動日期（新 &gt; 舊）</option><option value="oldest">最後異動日期（舊 &gt; 新）</option><option value="long">全名長度（長 &gt; 短）</option><option value="short">全名長度（短 &gt; 長）</option><option value="longPure">名稱長度（長 &gt; 短）</option><option value="shortPure">名稱長度（短 &gt; 長）</option><option value="AtoZ">筆劃（少 &gt; 多）</option><option value="ZtoA">筆劃（多 &gt; 少）</option><option value="CtoO">位階（高 &gt; 低）</option><option value="OtoC">位階（低 &gt; 高）</option></select>
        { s.map( l => <div key={ l.LawURL }>{ l.LawAbandonNote + l.LawName }</div> ) }</>
    ) ; 
}

export default Laws ; 