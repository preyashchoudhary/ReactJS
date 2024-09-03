import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import Info from './info.jsx'
import './index.css'
import leonbet from './assets/Leonbet.jpg'
import megapari from './assets/Megapari.jpg'
import parimatch from './assets/Parimatch.jpg'
import win1 from './assets/1win.jpg'
import dafabet from './assets/Dafabet.jpg'
import img1 from './assets/1.png'
import img2 from './assets/2.jpeg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.png'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <div className="card-container">
    <Card image={leonbet}
          bonus="100% upto Rs. 100,000" 
          p1="Good casino" p2="wow casino" p3="Good casino app" 
          url="https://google.com"/>

    <Card image={megapari}
          bonus="100% upto Rs. 200,000" 
          p1="Good casino" p2="wow casino" p3="Good casino app" 
          url="https://google.com"/>

    <Card image={parimatch} 
          bonus="100% upto Rs. 100,000" 
          p1="Good casino" p2="wow casino" p3="Good casino app" 
          url="https://google.com"/>

    <Card image={win1}
          bonus="100% upto Rs. 100,000" 
          p1="Good casino" p2="wow casino" p3="Good casino app" 
          url="https://google.com"/>

    <Card image={dafabet}
          bonus="100% upto Rs. 100,000" 
          p1="Good casino" p2="wow casino" p3="Good casino app" 
          url="https://google.com"/>

    <Card image={win1}
          bonus="100% upto Rs. 100,000" 
          p1="Good casino" p2="wow casino" p3="Good casino app" 
          url="https://google.com"/>

    <Card image={win1}
          title="Preyash" 
          bonus="100% upto Rs. 100,000" 
          p1="Good casino" p2="wow casino" p3="Good casino app" 
          url="https://google.com"/>

    <Card image={win1}
          title="Preyash" 
          bonus="100% upto Rs. 100,000" 
          p1="Good casino" p2="wow casino" p3="Good casino app" 
          url="https://google.com"/>
    </div>
    <div className="info-container">
      <Info image={img1}
            heading="Security"
            p="Our team of casino enthusiasts, online casino employees, offers expert advice, unique benefits, and filters out unreliable sites. For quality, bonuses, free spins, and a professional approach to gambling, you're in the right place."/>
      <Info image={img2}
            heading="Game selection"
            p="Another significant advantage of online Casino is the extensive range of games available. From classic table games like blackjack and roulette to modern video slots, there are many games to choose from."/>
      <Info image={img3}
            heading="Bonuses"
            p="Online Casino often provide players with attractive bonuses and promotions, such as deposit bonuses, free spins, and cashback rewards, which can help increase their bankroll and improve their chances of winning."/>
      <Info image={img4}
            heading="Customer support"
            p="Reputable online Casino provide excellent customer support services, including live chat, email support, and phone support, which can help players resolve any issues they may encounter while playing."/>
      <Info image={img5}
            heading="Secure Payments"
            p="Casino sites use advanced encryption technology to protect players' personal and financial information, ensuring that all transactions are safe and secure."/>
      <Info image={img6}
            heading="mobile compatibility"
            p="Online Casino are now optimized for mobile devices, allowing players to enjoy their favourite games on the go, anywhere and anytime they want. This flexibility is a significant perk for online casino players."/>
    </div>
    <div className="footer-container">
      <h5>Created By Preyash❤️</h5>
    </div>
  </StrictMode>,
)
