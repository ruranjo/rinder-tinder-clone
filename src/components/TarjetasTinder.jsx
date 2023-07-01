import React, { useState } from 'react'
import MoveCartEffect from 'react-tinder-card'
import './TarjetaTinder.css'


export default function TarjetasTinder() {
    const [people, setPeople] = useState([
        {
            name:"Angel gil",
            url:"https://media.licdn.com/dms/image/D4E03AQHTEhUdIivElg/profile-displayphoto-shrink_800_800/0/1683056207350?e=1693440000&v=beta&t=EVFoXDNNjWglR8eA8raks2Yj1bUS6t17r8-QxkuWVIE"
        },
        
        {
            name:"monica sanchez",
            url:"https://media.licdn.com/dms/image/C4E03AQFPyqiwkolYXQ/profile-displayphoto-shrink_800_800/0/1639169460946?e=1693440000&v=beta&t=wWiAiSIFdci0BRAslgIxI4mQ8F2y-0FFiUFrPYzmw6s"
        },
        {
            name:"eric vivas",
            url:"https://media.licdn.com/dms/image/D4E03AQEesqjN525hdg/profile-displayphoto-shrink_800_800/0/1676637747616?e=1693440000&v=beta&t=iLdfSGtqfq8toytKd8_qMJAyxtjAD7rFGQLbk1aFiPg"
        },
        {
            name:"jose miguel",
            url:"https://media.licdn.com/dms/image/C4E03AQHdDfpcMQDLBg/profile-displayphoto-shrink_800_800/0/1601206476491?e=1693440000&v=beta&t=rJOChAqCg3qxWPV_XuG5SwfkRoePrZIVx1J-83r9CGU"
        },
    ])
    

  return (
    <div className='tarjetas-rinter'>
        <div className="tarjetas-content">
            {
                people.map((person,index) =>{
                    return (
                    <MoveCartEffect 
                        className='swipe'
                        key={index}
                        preventSwipe={['up','down']}
                    >
                        <div 
                            className='tarjeta'
                            style={{backgroundImage:`url(${person.url})`}}
                        >
                            <h2> {person.name} </h2>
                        </div>
                        
                    </MoveCartEffect>
                    )
                })
            }
        </div>
    </div>
  )
}
