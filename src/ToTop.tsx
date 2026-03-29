import "./css/to_top.css" 

function ToTop() 
{
    return <div className="toTop" tabIndex={0} onClick={ ()=>{ document.getElementById('top')!.scrollIntoView({behavior:'smooth'}) } }><span>回最</span><span>上方</span></div> ; 
}

export default ToTop ; 