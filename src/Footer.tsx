import "./css/footer.css"
import laws from "./json/laws.json"
import cases from "./json/cases.json"
import parties from "./json/parties.json"

function Footer() 
{
    const [ ly , ltm , ltd ] = laws[0].UpdateDate.split( '/' ) ; 
    const [ cy , ctm , ctd ] = cases[0].UpdateDate.split( '/' ) ; 
    const [ py , ptm , ptd ] = parties[0].UpdateDate.split( '/' ) ; 
    const lty = Number( ly ) - 1911 ; 
    const pty = Number( py ) - 1911 ; 
    const cty = Number( cy ) - 1911 ; 
    return( 
        <footer>
            <div className="footer-upper">
                <ul>
                    <li><a href="laws?c=c" tabIndex={ 9 }>中央法規</a></li>
                    <li><a href="laws?c=ex" tabIndex={ 9 }>行政法規</a></li>
                    <li><a href="laws?c=l" tabIndex={ 9 }>立法法規</a></li>
                    <li><a href="laws?c=j" tabIndex={ 9 }>司法法規</a></li>
                    <li><a href="laws?c=el" tabIndex={ 9 }>選舉法規</a></li>
                    <li><a href="cases" tabIndex={ 9 }>判例查詢</a></li>
                    <li><a href="parties" tabIndex={ 9 }>政黨查詢</a></li>
                    <li><a href="rel" tabIndex={ 9 }>相關連結</a></li>
                </ul>
            </div>
            <div className="footer-note">
                <ul>
                    <li>本網站係提供法規之最新動態資訊及資料檢索，並不提供法規及法律諮詢之服務。</li>
                    <li>若有任何法律上的疑義，建議您可逕向發布法規之主管機關洽詢。</li>
                    <li>本網站法規資料係由各機關提供之電子檔或書面文字登打製作，若與各法規主管機關之公布文字有所不同，仍以各法規主管機關之公布資料為準。</li>
                    <li>部分資料內容，使用特殊文字或符號，如欲詳閱內容，請連結至<a tabIndex={ 0 } href="https://www.cns11643.gov.tw/downloadList.jsp?ID=1" target="_blank">全字庫</a>下載造字檔或<a tabIndex={ 0 } href="https://data.gov.tw/dataset/5961" target="_blank">政府資料開放平臺</a>下載全字庫字形檔。</li>
                    <li>建議使用<a href="https://www.google.com/intl/zh-TW/chrome/" target="_blank">Google Chrome</a>、<a href="https://www.firefox.com/zh-TW/" target="_blank">Mozilla Firefox</a>、<a href="https://brave.com/zh-tw/" target="_blank">Brave</a>或<a href="https://www.opera.com/" target="_blank">Opera</a>瀏覽本網頁；並建議使用電腦版<a href="https://www.google.com/intl/zh-TW/chrome/" target="_blank">Google Chrome</a>或<a href="https://brave.com/zh-tw/" target="_blank">Brave</a>列印。</li>
                    <li>法規整編資料截止日：民國 { lty } 年 { ltm } 月 { ltd } 日</li>
                    <li>政黨整編資料截止日：民國 { pty } 年 { ptm } 月 { ptd } 日</li>
                    <li>判例整編資料截止日：民國 { cty } 年 { ctm } 月 { ctd } 日</li>
                </ul>
            </div>
            <div className="footer-bottom">
                <ul>
                    <li><a tabIndex={ 0 } href="open">資料開放宣告</a></li>
                    <li><a tabIndex={ 0 } href="print">法規彙編列印</a></li>
                    <li><a tabIndex={ 0 } href="s">統計</a></li>
                </ul>
                <span>本網站由臺中市立臺中第一高級中等學校學生自治聯合會學生會自治部及評議委員會共同維運管理</span><br/>
                <span><span>市立臺中一中學聯會辦公室地址：</span><span>404臺中市北區育才街2號 敬業樓3樓</span></span><br/>
                <span>信箱：
                    <ul>
                        <li><span>學生會：</span><a tabIndex={ 0 } href="mailto:tcfshsa290801@gmail.com">tcfshsa290801@gmail.com</a></li>
                        <li><span>學生議會：</span><a tabIndex={ 0 } href="mailto:tcfshsc101@gmail.com">tcfshsc101@gmail.com</a></li>
                        <li><span>評議委員會：</span><a tabIndex={ 0 } href="mailto:tcfshstudentcourt@std.tcfsh.tc.edu.tw">tcfshstudentcourt@std.tcfsh.tc.edu.tw</a></li>
                    </ul>
                </span>
            </div>
        </footer>
    ) ; 
}

export default Footer ; 