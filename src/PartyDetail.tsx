import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import parties from "./json/parties.json"

function PartyDetail() 
{
    const [ a ] = useSearchParams() ; 
    let p = parties[0].Parties[( a.get( "party" ) ? Number(a.get( "party" )) : 0 )] ; 
    useEffect( () => { document.title = p.PartyName ; } ) ; 
    return (
        <>
            <h1>{ p.PartyName }</h1>
            <div id="pd">
                <div className="pl">
                    <img src={ "i/parties/" + p.Logo[0] } alt={ p.PartyName + " 標章" } />
                    {
                        (p.Logo.length == 2) ? 
                        <>
                            <audio className="printNoDisplay" controls src={ "A/parties/" + p.Logo[1] }></audio>
                            <a className="onlyPrint" href={ "A/parties/" + p.Logo[1] }>https://tcfshsu.github.io/law/a/parties/{ p.Logo[1] }</a>
                        </>
                        : <></>
                    }
                </div>
                <div className="pt">
                    <dl>
                        <dt>政黨名稱</dt>
                        <dd>{ p.PartyName }</dd>
                        {
                            (p.PartyAbbreviation != "") ? 
                            <>
                                <dt>政黨簡稱</dt>
                                <dd>{ p.PartyAbbreviation }</dd>
                            </> : <></>
                        }
                        <dt>政黨負責人</dt>
                        <dd>{ p.Chairman }</dd>
                        <dt>狀態</dt>
                        <dd>{ p.PartyState }</dd>
                        {
                            (p.PartyRegisteredDate != "")?
                            <>
                                <dt>註冊日期</dt>
                                <dd>{ p.PartyRegisteredDate }</dd>
                            </>:<></>
                        }
                        {
                            (p.PartyEstablishedDate != "") ?
                            <>
                                <dt>成立日期</dt>
                                <dd>{ p.PartyEstablishedDate }</dd>
                            </>:<></>
                        }
                        {
                        (p.PartyURL != "") ?
                        <>
                            <dt>政黨官網</dt>
                            <dd>
                                <a href={ p.PartyURL } target="_blank">
                                    <span>{ p.PartyURL }</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ex-link">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            </dd>
                            </>:<></>
                        }
                    </dl>
                </div>
            </div>
        </>
    ) ; 
}

export default PartyDetail ; 