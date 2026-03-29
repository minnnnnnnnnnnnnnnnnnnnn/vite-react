import laws from "./json/laws.json"
import token_t from "./ts/token_t";
import tokenise from "./ts/tokenisation";

function LawContent( { a } : { a : number } ) 
{
    let content = Array() ; 
    let l = laws[0].Laws[a] ; 
    let la = l.LawArticles ; 
    let fwd = [] ; 
    for( let aa of l.LawForeword.split( "\r\n" ) ) 
    {
      fwd.push( aa ) ; 
      fwd.push( <br /> ) ; 
    }
    content.push( <div className="Foreword"><span>{ a == 0 ? "宗旨" : ( l.LawForeword === "" ? "" : "前言" ) }</span><p>{ fwd }</p></div> ) ; 
    for( let aa of la ) 
    {
      if( aa.ArticleType == "C" ) 
      {
        let t_str = tokenise( aa.ArticleContent , true )[0] ; 
        switch( t_str.t ) 
        {
          case token_t.Part:
            content.push( <h1><pre>{ t_str.i }</pre><span>{ t_str.val }</span></h1> ) ; 
            break ; 
          case token_t.Chapter:
            content.push( <h2><pre>{ t_str.i }</pre><span>{ t_str.val }</span></h2> ) ; 
            break ; 
          case token_t.Section:
            content.push( <h3><pre>{ t_str.i }</pre><span>{ t_str.val }</span></h3> ) ; 
            break ; 
          case token_t.Subsection:
            content.push( <h4><pre>{ t_str.i }</pre><span>{ t_str.val }</span></h4> ) ; 
            break ; 
          case token_t.Item:
            content.push( <h5><pre>{ t_str.i }</pre><span>{ t_str.val }</span></h5> ) ; 
            break ; 
        }
        content.push( <br /> ) ; 
      }
      else 
      {
        let t_str = tokenise( aa.ArticleContent ) ; 
        // content.push( <h6><a href={ "laws/a?a=" }>{ aa.ArticleNo.includes( "【" ) ? [ <span>{ aa.ArticleNo.split( '【' )[0] }</span> , <span>{ aa.ArticleNo.split( /條(?=【)/ )[1] }</span> ] : <span>{ aa.ArticleNo }</span> }</a></h6> ) ; 
        content.push( <h6>{ aa.ArticleNo.includes( "【" ) ? [ <span>{ aa.ArticleNo.split( '【' )[0] }</span> , <span>{ aa.ArticleNo.split( /條(?=【)/ )[1] }</span> ] : <span>{ aa.ArticleNo }</span> }</h6> ) ; 
        let temp = [] ; 
        let p_count = 0 ; 
        for( let aaa of t_str ) 
        {
          if( aaa.t === token_t.p ) 
          {
            temp.push( <li className="p">{ aaa.val }</li> ) ; 
            ++ p_count ; 
          }
          else 
          {
            temp.push( <li><span>{ aaa.i }</span><span>{ aaa.val }</span></li> ) ; 
          }
        }
        content.push( <article className={ p_count > 1 ? "showNum" : "" }>{ temp }</article> ) ; 
        content.push( <br /> ) ; 
      }
    }
    return ( 
        <>
            { content } 
        </>
    ) ; 
}

export default LawContent ; 