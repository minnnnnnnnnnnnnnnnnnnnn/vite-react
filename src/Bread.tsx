import "./css/breadcrumb.css"

function Bread( { path } : { path : { n : String , v : String } } ) 
{
    let li ; 
    if( path.v !== "" ) 
    {
        li = [] ; 
        let aa = [] , va = [] ; 
        for( let a of path.n.split( '>' ) ) 
        {
            aa.push( a ) ; 
        }
        for( let v of path.v.split( '>' ) ) 
        {
            va.push( v ) ; 
        }
        console.assert( aa.length == va.length , "path 名跟值對不上" ) ; 
        let i = 0 ; 
        for(; i < aa.length - 1 ; ++ i ) 
        {
            li.push( <li key={ i }><a href={ va[i] == "/" ? "" : va[i] }>{ aa[i] }</a></li> ) ; 
        }
        li.push( <li key={ i + 1 }>{ aa.at( -1 ) }</li> ) ; 
    }
    else 
    {
        li = <li>{ path.n }</li> ; 
    }
    return( 
        <div className="bread">
            <span>現在位置：</span>
            <ul>
                { li } 
            </ul>
        </div>
    ) ; 
}

export default Bread ; 