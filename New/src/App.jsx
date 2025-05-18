import React from 'react'
import './css/App.css'

export default function App() {

    function scrollToElement(elementId) {
        console.log('Scrolling to: ' + elementId)
        let element = document.getElementById(elementId)
        element.scrollIntoView(true)
    }

  return (
    <div className='app'>
          
      <header className = 'flex'>
        <h2 className='h2_home'>Inside Home.jsx</h2>
      </header>
          
      <div className='flex grid'>
        <h3>Choose which block to scroll to:</h3>
        <ul className='ul_home'>
          <li className='li_home' onClick={() => scrollToElement('box1')}>Section 1</li>
          <li className='li_home' onClick={() => scrollToElement('box2')}>Section 2</li>
          <li className='li_home' onClick={() => scrollToElement('box3')}>Section 3</li>
          <li className='li_home' onClick={() => scrollToElement('box4')}>Section 4</li>
          {/*<a onClick={() => scrollToElement('box4')}>Section 4</a>*/}
        </ul>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, est doloremque. Maxime porro obcaecati laborum magnam dicta inventore aut repellendus corporis nostrum, necessitatibus iste magni? Veritatis obcaecati consequatur, laudantium porro fuga amet eveniet, omnis ad sed deserunt doloremque quidem necessitatibus beatae nemo non? Autem ad nihil voluptate optio reiciendis deserunt.</div>
      </div>

      <div id='box1' className='flex box1'>
        <h4>Box 1</h4>
      </div>

      <div id='box2' className='flex box2'>
        <h4>Box 2</h4>
      </div>

      <div id='box3' className='flex box3'>
        <h4>Box 3</h4>
      </div>

      <div id='box4' className='flex box4'>
        <h4>Box 4</h4>
      </div>

    </div>
  )
}