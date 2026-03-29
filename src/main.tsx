import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./css/color.css"
import "./css/fonts.css"
import "./css/law.css"
import "./css/site.css"
import Header from "./Header.tsx"
import Home from './Home.tsx'
import Print from './Print.tsx'
import Rel from './Rel.tsx'
import Open from './Open.tsx'
import Latest from './Latest.tsx'
import ToTop from './ToTop.tsx'
import Footer from "./Footer.tsx"
import Back from './Back.tsx'
import Guide from './Guide.tsx'

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
      <BrowserRouter basename="/vite-react">
        <main className="main">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/print" element={ <Print /> } />
            <Route path="/rel" element={ <Rel /> } />
            <Route path="/open" element={ <Open /> } />
            <Route path="/guide" element={ <Guide /> } />
            <Route path="/latest" element={ <Latest /> } />
          </Routes>
          <Back href="/" />
        </main>
      </BrowserRouter>
      <ToTop />
    </div>
    <Footer />
  </StrictMode>,
) ; 
