
function includes( a : { "LawName" : string , "LawForeword" : string , "LawAttachments" : { "FileName" : string }[] , "LawArticles" : { "ArticleType" : string , "ArticleNo" : string , "ArticleContent" : string }[] } , qq : string[] , out : { i : number , val : { n : string[] , prev : string[] }[] } ) 
{
    let r = false , b = Array() ; 
    for( let q of qq )
    {
        b.push( a.LawName.includes( q ) ) ; 
    }
    if( b.filter( bb => bb ).length ) 
    {
        console.assert( qq.length == b.length ) ; 
        r = true ; 
        for( let i = 0 ; i < b.length ; ++ i ) 
        {
            if( b[i] ) 
            {
                out.val.push( { n : [] , prev : [] } ) ; 
                const temp = a.LawName.split( qq[i] ) ; 
                let ii = temp.length - 1 ; 
                for( let aa of temp ) 
                {
                    if( aa ) 
                    {
                        out.val[out.i].n.push( aa ) ; 
                        if( ii ) 
                        {
                            out.val[out.i].n.push( qq[i] ) ; 
                        }
                    }
                    -- ii ; 
                }
                ++ out.i ; 
            }
        }
    }
    else 
    {
        for( let q of qq ) 
        {
            r = a.LawForeword.includes( q ) ; 
            for( let aa of a.LawAttachments ) 
            {
                if( aa.FileName.includes( q ) ) { r = true ; } 
            }
            for( let aa of a.LawArticles ) 
            {
                if( aa.ArticleContent.includes( q ) || aa.ArticleNo.includes( q ) || aa.ArticleType.includes( q ) ) { r = true ; } 
            }
        }
    }
    return r ; 
}

export default includes ; 