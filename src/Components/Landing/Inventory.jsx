import React, { useContext } from 'react'
import './inventory.css'
import { CardContext } from '../../App'
import { GrNext } from "react-icons/gr";

function Inventory() {
    const [cards]=useContext(CardContext)
    console.log(cards);
  return (
    <div className='inventory'>

        
        <div className="inventory-contents">
            <div className="inv-heads">
            <h1 id='h1-inv'>Meet The All In-One-Ev Platform</h1>
        <p id='p-inv'>at future we believe buying a car will be easier than buying any other electronics</p>
            </div>
            </div>
            
            <div className="heads">
                <div className='order'> Order online</div>
                <div className='browse'> browse inventory <GrNext className='icon-next'/></div>
            </div>
            <div className="cardsscontain">
           

            <div className="cards-container">
                {cards.map((obj)=><>
                    <div className="cards-car">
                    <div className="image-card"><img src={obj.Image} alt="no image" /></div>
                    <div className="contents-card">
                        <div className="name-card">{obj.CarName}</div>
                        <div className="price-card">{obj.Price}</div>
                        <div className="buttons-card">
                            <div className="buy-button"><button>buy</button></div>
                            <div className="customise-button"><button>Customise</button></div>
                        </div>
                        
                    </div>
                </div>
                </>)}
              
            </div>
            </div>
        
      
    </div>
  )
}

export default Inventory
