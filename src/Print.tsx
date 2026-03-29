// import { useState } from 'react'
import laws from "./json/laws.json"
import sort_cat from "./ts/sort"
import Bread from "./Bread"
import LawContent from "./LawContent"
import "./css/print.css"
import "./css/fonts.css"
import "./css/color.css"
import "./css/site.css"
import "./css/darkmode.css"


function Print() 
{
  let content = Array() ; 
  let t_content = Array() , t = [] ; 
  let i = 0 , c = "ABCD" , cat = [ "中央法規" , "行政法規" , "立法法規" , "司法法規" ] , ci = 0 ; 
  let sorted_l = laws[0].Laws.sort( sort_cat ) ; 
  for( let a of sorted_l ) 
  {
    let l = [] ; 
    let an = [ ( a.LawName.includes( "臺中市立臺中第一高級中等學校學生自治聯合會" ) ? "臺中市立臺中第一高級中等學校學生自治聯合會" : "臺中第一高級中學" ) , <br /> , a.LawName.replace( /^臺中市立臺中第一高級中等學校學生自治聯合會|^臺中第一高級中學/ , "" ) ] ; 
    l.push( <div id="title" className="title"><span className="abandoned">{ a.LawAbandonNote }</span><span>{ an }</span></div> ) ; 
    let his = [] ; 
    for( let aa of a.LawHistories.split( "\r\n" ) ) 
    {
      his.push( <li>{ aa }</li> ) ; 
    }
    l.push( <ol className="legislativeHistory">{ his }</ol> ) ; 
    l.push( <LawContent a={ i } /> ) ; 
    content.push( <div id={ i.toString() }>{ l }</div> ) ; 
    t.push( <a href={ "#" + i.toString() }><span className="abandoned">{ a.LawAbandonNote }</span>{ a.LawName }</a>) ; 
    if( i == sorted_l.length - 1 ) 
    {
      t_content.push( <div id="E"><h1>選舉法規</h1>{ t }</div> ) ; 
    }
    else if( !sorted_l[i].LawCategory.includes( '/' ) && sorted_l[i].LawCategory.replace( "廢止法規 > " , "" ) != sorted_l[ i + 1 ].LawCategory.replace( "廢止法規 > " , "" ) )
    {
      t_content.push( <div id={ c[ci] }><h1>{ cat[ci] }</h1>{ t }</div> ) ; 
      t = [] ; 
      ci++ ; 
    }
    ++ i ; 
  }

  return (
    <>
      <Bread path={ { "n": "首頁" , "v": "" } } />
      <div ahhhhaaaahaha="">
        <span className="forPrint">
          <span className="title">目錄</span>
          { t_content }
        </span>
        <span className="forView">
          <span className="title">目錄</span>
          { t_content }
        </span>
        { content }
      </div>
    </>
  ) ; 
}

export default Print ; 
