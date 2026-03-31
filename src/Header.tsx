import { useState } from "react";
import "./css/header.css"
import logo from "./i/icon/logo.png"
import search_w from "./i/icon/search_w.svg"

function Header( { q } : { q : String } ) 
{
    const [ barOrX , toggleMenuBar ] = useState( true ) ; 
    const [ zState , zoom ] = useState( 0 ) ; 
    const X = "M3 3L21 21M3 21L21 3" , BAR = "M3 12L21 12M3 6L21 6M3 18L21 18" ; 
    let NavMenuCssClass = () => barOrX ? "collapse" : undefined ; 
    return (
        <header>
            <style>:root{ "{zoom:" + (() => zState ? ( zState - 1 ? "85%" : "115%" ) : "100%")() + "}" }</style>
            <div className="top-guide">
                <ul>
                    <li><a href="guide" tabIndex={ 1 }>網站導覽</a></li>
                    <li id="zoom">
                        <span tabIndex={ 1 } onClick={ () => { zoom( () => { return -1 ; } ) ; } } className={ zState === -1 ? "Y" : undefined } style={ { fontSize: "13.6px" } }>A</span>
                        <span tabIndex={ 2 } onClick={ () => { zoom( () => { return  0 ; } ) ; } } className={ zState ===  0 ? "Y" : undefined } style={ { fontSize: "16px"   } }>A</span>
                        <span tabIndex={ 3 } onClick={ () => { zoom( () => { return +1 ; } ) ; } } className={ zState === +1 ? "Y" : undefined } style={ { fontSize: "18.4px" } }>A</span>
                    </li>
                    {/* <li>
                        <div className="toggleD" darkToggle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        </div>
                    </li> */}
                </ul>
            </div>
            <div className="top">
                <a tabIndex={ 4 } className="" href=""><img src={ logo } alt="首頁" /></a>
                <form action="laws" method="get">
                    <label htmlFor="lqc">類別：</label>
                    <select tabIndex={ 5 } name="c" id="lqc">
                        <option value="">不限</option>
                        <option selected={ false } value="c">中央法規</option>
                        <option selected={ false } value="ex">行政法規</option>
                        <option selected={ false } value="l">立法法規</option>
                        <option selected={ false } value="j">司法法規</option>
                        <option selected={ false } value="el">選舉法規</option>
                    </select>
                    <label htmlFor="lql">位階：</label>
                    <select tabIndex={ 5 } name="l" id="lql">
                        <option value="">不限</option>
                        <option selected={ false } value="章程">章程</option>
                        <option selected={ false } value="法律">法律</option>
                        <option selected={ false } value="命令">命令</option>
                    </select>
                    <p>
                        <input tabIndex={ 6 } type="search" placeholder="輸入關鍵字以搜尋" name="q" defaultValue={ q.toString() } />
                        <input tabIndex={ 7 } type="submit" style={ { backgroundImage: "url(\"" + search_w + "\"" , width: "24px" , height: "24px" , backgroundColor: "#0000" , border: "0" , cursor: "pointer" } } value="" alt="搜尋！" />
                    </p>
                </form>
                <div tabIndex={ 8 }>
                    <svg onClick={ () => { toggleMenuBar( () => { return !barOrX ; } ) ; } }xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={ (() => barOrX ? BAR : X )() } /></svg>
                </div>
            </div>
            <nav className={ NavMenuCssClass() }>
                <ul>
                    <li><a href="laws?c=c" tabIndex={ 9 } >中央法規</a></li>
                    <li><a href="laws?c=ex" tabIndex={ 9 } >行政法規</a></li>
                    <li><a href="laws?c=l" tabIndex={ 9 } >立法法規</a></li>
                    <li><a href="laws?c=j" tabIndex={ 9 } >司法法規</a></li>
                    <li><a href="laws?c=el" tabIndex={ 9 } >選舉法規</a></li>
                    <li><a href="cases" tabIndex={ 9 } >判例查詢</a></li>
                    <li><a href="parties" tabIndex={ 9 } >政黨查詢</a></li>
                    <li><a href="rel" tabIndex={ 9 } >相關連結</a></li>
                </ul>
            </nav>
        </header>
    ) ; 
}

export default Header 