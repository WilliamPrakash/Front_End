import React from 'react'
import '../css/Home.css'

export default function Home() {

  function scrollToElement(elementId) {
    console.log('Scrolling to: ' + elementId)
    let element = document.getElementById(elementId)
    element.scrollIntoView(true)
  }

  return (
    <div className='home'>
          
      <header className = 'flex'>
        <h2>Inside Home.jsx</h2>
      </header>
          
      <div className='flex grid'>
        <h3>Choose which block to scroll to:</h3>
        <ul>
          <li>Section 1</li>
          <li>Section 2</li>
          <li>Section 3</li>
          {/*<li ><a href='#box4' type='button'>Section 4 href</a></li>*/}
          <li onClick={() => scrollToElement('box4')}>Section 4</li>
        </ul>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, est doloremque. Maxime porro obcaecati laborum magnam dicta inventore aut repellendus corporis nostrum, necessitatibus iste magni? Veritatis obcaecati consequatur, laudantium porro fuga amet eveniet, omnis ad sed deserunt doloremque quidem necessitatibus beatae nemo non? Autem ad nihil voluptate optio reiciendis deserunt.</div>
      </div>

      <div className='flex box1'>

      </div>

      <div className='flex box2'>

      </div>

      <div className='flex box3'>

      </div>

      <div id='box4' className='flex box4'>
        <p>Box 4</p>
      </div>

    </div>
  )
}
