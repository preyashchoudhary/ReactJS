import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Card from './Card.jsx'
import Hero from './Hero.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <div className="card-container">
    <Card image="https://picsum.photos/200/100" 
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image="https://picsum.photos/200/100" 
          bonus="100% upto Rs. 200,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image="https://picsum.photos/200/100" 
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image="https://picsum.photos/200/100" 
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image="https://picsum.photos/200/100" 
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image="https://picsum.photos/200/100" 
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image="https://picsum.photos/200/100" 
          title="Preyash" 
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>

    <Card image="https://picsum.photos/200/100" 
          title="Preyash" 
          bonus="100% upto Rs. 100,000" 
          li1="Good casino" li2="wow casino" li3="Good casino app" 
          url="https://google.com"/>
    </div>

  </StrictMode>,
)
