import cases from "./json/cases.json"

function CasesDetail() 
{
    let c = cases[0].Cases ; 
    return <>{ c.map( cc => cc.No ) }</> ; 
}

export default CasesDetail ; 