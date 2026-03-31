import "./css/s.css"
import laws from "./json/laws.json"
import cases from "./json/cases.json"

function S() 
{
    let r = [ { "A" : "你" , "C" : 1 } ] , rc = [ { "A" : "𐀀" , "C" : 0 } ] ; 
    let l = Array.from( laws[0].Laws.toString().replace( /[!-⬍⿰-㏿ﬓ-�\s]/g , "" ) ) ; 
    let c = cases[0].Cases ; 
    console.log( c ) ; 
    let wc = l.length ; 
    return ( 
        <>
            <h1>統計</h1>
            <h3>法規</h3>
            <table className="statistics_table">
                <thead style={ { fontFamily: "'IBM Plex Mono', 'Sonti TC' , '標點' , 'Noto Serif KR' , 'Noto Serif TC' , 'Noto Serif JP' , 'Noto Serif SC' , sans-serif" } }>
                    <tr>
                        <th>字</th>
                        <th>unicode</th>
                        <th>出現次數</th>
                        <th>占比( ‰ )</th>
                    </tr>
                </thead>
                <tbody style={ { fontFamily : "'Fira Code', 'Sonti TC' , '標點' , 'Noto Serif KR' , 'Noto Serif TC' , 'Noto Serif JP' , 'Noto Serif SC' , sans-serif" } }>
                    {
                        r.map( x => 
                            <tr>
                                <td>{ x.A }</td>
                                <td style={ { minWidth : "calc(6em + 2px)" } }>{ "U+" + x.A.charCodeAt( 0 ).toString( 16 ) }</td>
                                <td>{ x.C }</td>
                                <td>{ ( x.C * 1000 ) / wc }</td>
                            </tr>
                        ) 
                    }
                </tbody>
            </table>
            <br />
            <br />
            <h3>判例</h3>
            <table className="statistics_table">
                <thead style={ { fontFamily : "'IBM Plex Mono', 'Sonti TC' , '標點' , 'Noto Serif KR' , 'Noto Serif TC' , 'Noto Serif JP' , 'Noto Serif SC' , sans-serif"} }>
                    <tr>
                        <th>字</th>
                        <th>unicode</th>
                        <th>出現次數</th>
                    </tr>
                </thead>
                <tbody style={ { fontFamily : "'Fira Code', 'Sonti TC' , '標點' , 'Noto Serif KR' , 'Noto Serif TC' , 'Noto Serif JP' , 'Noto Serif SC' , sans-serif" } }>
                    {
                        rc.map( x => 
                            <tr>
                                <td>{ x.A }</td>
                                <td style={ { minWidth : "calc(6em + 2px)" } }>{ "U+" + x.A.codePointAt( 0 )?.toString( 16 ) }</td>
                                <td>{ x.C }</td>
                            </tr>
                        ) 
                    }
                </tbody>
            </table>
        </>
    ) ; 
}

export default S ; 