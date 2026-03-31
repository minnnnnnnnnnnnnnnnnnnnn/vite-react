import "./css/s.css"
import s_csv from "./csv/s_csv.ts"
import s_csv_c from "./csv/s_csv_c.ts"

function S() 
{
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
                        s_csv.split('|').map( x => 
                            <tr>
                                <td>{ x.split( ',' )[0] }</td>
                                <td style={ { minWidth : "calc(6em + 2px)" } }>{ x.split( ',' )[1] }</td>
                                <td>{ x.split( ',' )[2] }</td>
                                <td>{ x.split( ',' )[3] }</td>
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
                        s_csv_c.split( '|' ).map( x => 
                            <tr>
                                <td>{ x.split( ',' )[0] }</td>
                                <td style={ { minWidth : "calc(6em + 2px)" } }>{ x.split( ',' )[1] }</td>
                                <td>{ x.split( ',' )[2] }</td>
                            </tr>
                        ) 
                    }
                </tbody>
            </table>
        </>
    ) ; 
}

export default S ; 