import parties from "./json/parties.json"

function Parties() 
{
    return ( 
        <>
            { parties[0].Parties.map( p => <a href={ "" }>{ p.Party + p.PartyName }</a> ) } 
        </> 
    ) ; 
}

export default Parties ; 