import React from 'react'
import '../css/Home.css'

export default function home() {

      return (
        <div className='home'>
          
          <header className = 'flex'>
            <h2>Inside Home.jsx</h2>
          </header>
          
          <body className='flex, grid'>
            <h3>Choose which block to scroll to:</h3>
            <ul>
              <li type='button' onClick="document.getElementById('box1').scrollIntoView()">Section 1</li>
              <li>Section 2</li>
              <li>Section 3</li>
              <li>Section 4</li>
            </ul>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, est doloremque. Maxime porro obcaecati laborum magnam dicta inventore aut repellendus corporis nostrum, necessitatibus iste magni? Veritatis obcaecati consequatur, laudantium porro fuga amet eveniet, omnis ad sed deserunt doloremque quidem necessitatibus beatae nemo non? Autem ad nihil voluptate optio reiciendis deserunt.</div>
          </body>

          <div className='flex, box1'>

          </div>

          <div className='flex, box2'>

          </div>

          <div className='flex, box3'>

          </div>

          <div className='flex, box4'>

          </div>

        </div>
      )
}

