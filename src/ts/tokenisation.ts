import token_t from "./token_t";

function tokenise( str : String , b : boolean = false )
{
  let a = Array() ; 
  let t , num , v ; 
  if( b ) 
  {
    if( str[0] === "第" )
    {
      t = token_t.Part ; 
      v = str.split( /^第 [一二三四五六七八九十百千万壹貳參肆伍陸柒捌玖拾佰仟萬]+ 編/ )[1] ; 
      num = str.split( v )[0] ; 
    }
    else if( str[3] == "第" ) 
    {
      t = token_t.Chapter ; 
      v = str.split( /^   第 [一二三四五六七八九十百千万壹貳參肆伍陸柒捌玖拾佰仟萬]+ 章/ )[1] ; 
      num = str.split( v )[0] ; 
    }
    else if( str[6] === "第" ) 
    {
      t = token_t.Section ; 
      v = str.split( /^      第 [一二三四五六七八九十百千万壹貳參肆伍陸柒捌玖拾佰仟萬]+ 節/ )[1] ; 
      num = str.split( v )[0] ; 
    }
    else if( str[9] === "第" ) 
    {
      t = token_t.Subsection ; 
      v = str.split( /^         第 [一二三四五六七八九十百千万壹貳參肆伍陸柒捌玖拾佰仟萬]+ 款/ )[1] ; 
      num = str.split( v )[0] ; 
    }
    else if( str[12] === "第" ) 
    {
      t = token_t.Item ; 
      v = str.split( /^            第 [一二三四五六七八九十百千万壹貳參肆伍陸柒捌玖拾佰仟萬]+ 目/ )[1] ; 
      num = str.split( v )[0] ; 
    }
    else 
    {
        t = token_t.new ; 
        num = "" ; 
        v = str ; 
    }
    a.push( { "t": t , "i": num + " " , "val": v } ) ; 
  }
  else  
  {
    let regex = /^[壹貳參肆伍陸柒捌玖拾佰仟萬一二三四五六七八九十百千万]+、|^[（(][壹貳參肆伍陸柒捌玖拾佰仟萬一二三四五六七八九十百千万]+[）)]|^[1234567890１２３４５６７８９０]+[\.、]/ ; 
    for( let s of str.split( "\r\n" ) ) 
    {
      if( regex.test( s ) ) 
      {
        v = s.split( regex )[1] ; 
        num = s.match( regex ) ; 
        if( /^[壹貳參肆伍陸柒捌玖拾佰仟萬一二三四五六七八九十百千万]+、/.test( s ) ) 
        {
          t = token_t.subp ; 
        }
        else if( /^[（(][壹貳參肆伍陸柒捌玖拾佰仟萬一二三四五六七八九十百千万]+[）)]/.test( s ) ) 
        {
          t = token_t.item ; 
        }
        else if( /^[1234567890１２３４５６７８９０]+[\.、]/.test( s ) ) 
        {
          t = token_t.of ; 
        }
      }
      else
      {
        v = s ; 
        num = "" ; 
        t = token_t.p ; 
      }
      a.push( { "t": t , "i": num , "val": v } ) ; 
    }
  }
  return a ; 
}

function tokenise_search( a : string | null ) 
{
    if( !a ) { return false ; }
    return { "b" : false , "v" : a.split( /\s/g ) } ; 
}

export { tokenise_search } ; 
export default tokenise ; 