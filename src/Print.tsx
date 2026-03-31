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
import { useEffect } from "react"


function Print() 
{
  useEffect( () => { document.title = "法規彙編" ; } ) ; 
  const 發行人 = "黃宣方" , 編輯 = [ "黃宣方" , "卓祐宸" , "陳寬澂" , "王宸翼" ] ; 
  const c = "ABCD" , cat = [ "中央法規" , "行政法規" , "立法法規" , "司法法規" ] ; 
  let content = Array() ; 
  let t_content = Array() , t = [] ; 
  let i = 0 , ci = 0 ; 
  let sorted_l = laws[0].Laws.sort( sort_cat ) ; 
  content.push( <span className="break"><div style={ { display: "inline" } }>中央法規</div></span> ) ; 
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
      content.push( <span className="break"><div style={ { display: "inline" } }>{ cat[++ci] }</div></span> ) ; 
      t = [] ; 
    }
    ++ i ; 
  }

  return (
    <>
      <Bread path={ { "n": "首頁" , "v": "" } } />
      <div ahhhhaaaahaha="">
        <span id="COVER">
            <button onClick={ () => { window.print() ; } }>列印</button>
            <div>臺中市立臺中第一高級中等學校<br />學生自治聯合會</div>
            <h1>法規彙編</h1><br/>
            <span>114-2</span>
            <small style={ { fontSize: "10pt" } }>（更新至 { laws[0].UpdateDate }）</small><br/>
        </span>
        <span className="forPrint">
          <span className="title">目錄</span>
          { t_content }
        </span>
        <span className="forView">
          <span className="title">目錄</span>
          { t_content }
        </span>
        { content }
        <span id="COVER-BACK" style={ { lineHeight: "1.3" } }>
            <h1>
                <span>臺中市立臺中第一高級中等學校學生自治聯合會&nbsp;法規彙編</span>
            </h1>
            <ul>
                <li>
                    <span>出版者：</span>
                    <span>臺中市立臺中第一高級中等學校學生自治聯合會第三十一屆學生會自治部</span>
                </li>
                <li>
                    <span>發行人：</span>
                    <span>{ 發行人 }</span>
                </li>
                <li>
                    <span>編輯：</span>
                    <span>
                        {
                          ( () => 
                          {
                            let xx = "" ; 
                            for( let x of 編輯 ) 
                            {
                                xx += x !== 編輯.at( -1 ) ? x + "、" : x 
                            }
                            return xx ; 
                          } )()
                        }
                    </span>
                </li>
                <li>
                    <span>網站：</span>
                    <a href="https://tcfshsu.github.io/law" style={ { color: "#00f" , fontFamily: "\"Noto Sans\" , sans-serif" } }>https://tcfshsu.github.io/law</a>
                </li>
                <li>
                    <span>定價：</span>
                    <span>免費供大眾下載使用</span>
                </li>
                <li>
                    <span>出版日期：</span>
                    <span>中華民國 { Number( laws[0].UpdateDate.split( '/' )[0] ) - 1911 } 年 { laws[0].UpdateDate.split( '/' )[1] } 月 { laws[0].UpdateDate.split( '/' )[2] } 日</span>
                </li>
            </ul>
        </span>
      </div>
    </>
  ) ; 
}

export default Print ; 
