
function includes( a : 
    { 
        "LawName" : string , 
        "LawForeword" : string , 
        "LawAttachments" : {
            "FileName" : string 
        }[] , 
        "LawArticles" : {
            "ArticleType" : string , 
            "ArticleNo" : string , 
            "ArticleContent" : string 
        }[]
    } , qq : string[] ) 
{
    for( let q of qq ) 
    {
        if( a.LawName.includes( q ) || a.LawForeword.includes( q ) ) { return true ; } 
        for( let aa of a.LawAttachments ) 
        {
            if( aa.FileName.includes( q ) ) { return true ; } 
        }
        for( let aa of a.LawArticles ) 
        {
            if( aa.ArticleContent.includes( q ) || aa.ArticleNo.includes( q ) || aa.ArticleType.includes( q ) ) { return true ; } 
        }
    }
    return false ; 
}

export default includes ; 