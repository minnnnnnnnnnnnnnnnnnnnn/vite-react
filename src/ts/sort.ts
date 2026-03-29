
function sort_cat( a: any , b: any ) 
{
  let aa = a.LawCategory.replace( "廢止法規 > " , "" ) , bb = b.LawCategory.replace( "廢止法規 > " , "" ) ; 
  if( aa === bb || ( aa.includes( "選舉法規" ) && bb.includes( "選舉法規" ) ) )
  {
    return 0 ; 
  }
  if( aa === "中央法規" ) 
  {
    return -1 ; 
  }
  if( bb === "中央法規" ) 
  {
    return 1 ; 
  }
  if( aa.includes( "選舉法規" ) ) 
  {
    return 1 ; 
  }
  if( bb.includes( "選舉法規" ) ) 
  {
    return -1 ; 
  }
  if( aa === "行政法規" )
  {
    return -1 ; 
  }
  if( bb === "行政法規" )
  {
    return 1 ; 
  }
  if( aa === "立法法規" )
  {
    return -1 ; 
  }
  if( bb === "立法法規" )
  {
    return 1 ; 
  }
  if( aa === "司法法規" )
  {
    return -1 ; 
  }
  if( bb === "司法法規" )
  {
    return 1 ; 
  }
  return 0 ; 
}

export default sort_cat ; 