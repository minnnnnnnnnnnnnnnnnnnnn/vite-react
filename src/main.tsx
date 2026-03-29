import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/color.css"
import "./css/fonts.css"
import "./css/law.css"
import "./css/site.css"
import Header from "./Header.tsx"
import Home from './Home.tsx'
// import Print from './Print.tsx'
// import Rel from './Rel.tsx'
// import Open from './Open.tsx'
// import Latest from './Latest.tsx'
import ToTop from './ToTop.tsx'
import Footer from "./Footer.tsx"
import Back from './Back.tsx'

declare module 'react' 
{
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> 
  {
    ahhhhaaaahaha ?: string;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header q="" />
    <div>
      <div id="top"></div>
      <main className="main">
        <Home />
        {/* <Print /> */}
        {/* <Rel /> */}
        {/* <Open /> */}
        {/* <Latest a={0} /> */}
        <Back href="" />
      </main>
      <ToTop />
    </div>
    <Footer />
  </StrictMode>,
) ; 
