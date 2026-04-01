
function sort_cat( a : { "LawCategory" : string } , b : { "LawCategory" : string } ) 
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

function sort_date( a : any , b : any ) 
{
  return a.LawModifiedDate - b.LawModifiedDate ; 
}
function sort_date_rev( a : any , b : any ) 
{
  return b.LawModifiedDate - a.LawModifiedDate ; 
}
function sort_long( a : any , b : any ) 
{
  return b.LawName.length - a.LawName.length ; 
}
function sort_short( a : any , b : any ) 
{
  return a.LawName.length - b.LawName.length ; 
}
function sort_long_pure( a : any , b : any ) 
{
  return b.LawName.replace( "臺中市立臺中第一高級中等學校學生自治聯合會", "" ).replace("臺中第一高級中學", "").length - a.LawName.replace("臺中市立臺中第一高級中等學校學生自治聯合會", "").replace("臺中第一高級中學", "").length ; 
}
function sort_short_pure( a : any , b : any ) 
{
  return a.LawName.replace( "臺中市立臺中第一高級中等學校學生自治聯合會", "" ).replace("臺中第一高級中學", "").length - b.LawName.replace("臺中市立臺中第一高級中等學校學生自治聯合會", "").replace("臺中第一高級中學", "").length ; 
}
function sort_a_to_z( a : any , b : any ) 
{
  return a.LawName.localeCompare( b.LawName , "zh-Hant-TW" ) ; 
}
function sort_z_to_a( a : any , b : any ) 
{
  return b.LawName.localeCompare( a.LawName , "zh-Hant-TW" ) ; 
}
const l_lvl = [ "命令" , "法律" , "章程" ] ; 
function sort_law_level( a : any , b : any ) 
{
  return l_lvl.indexOf( b.LawLevel ) - l_lvl.indexOf( a.LawLevel ) ; 
}
function sort_law_level_rev( a : any , b : any ) 
{
  return l_lvl.indexOf( a.LawLevel ) - l_lvl.indexOf( b.LawLevel ) ; 
}

export { sort_date , sort_date_rev , sort_long , sort_short , sort_long_pure , sort_short_pure , sort_a_to_z , sort_z_to_a , sort_law_level , sort_law_level_rev } ; 
export default sort_cat ; 