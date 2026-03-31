
function Back( { href , b = false } : { href : string , b ?: boolean } ) 
{
    return <a className="printNoDisplay" href={ href == "/" ? "" : href }>{ b ? "回首頁" : "回上一頁" }</a> ; 
}

export default Back ; 