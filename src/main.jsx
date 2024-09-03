import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './Card.jsx'
import Hero from './Hero.jsx'
import './index.css'
import leonbet from './assets/Leonbet.jpg'
import megapari from './assets/Megapari.jpg'
import parimatch from './assets/Parimatch.jpg'
import win1 from './assets/1win.jpg'
import dafabet from './assets/Dafabet.jpg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <div className="card-container">
    <Card image={leonbet}
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image={megapari}
          bonus="100% upto Rs. 200,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image={parimatch} 
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image={win1}
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image={dafabet}
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image={win1}
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image={win1}
          title="Preyash" 
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image={win1}
          title="Preyash" 
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>
    </div>

  </StrictMode>,
)
