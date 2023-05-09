import './css/App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import test_1 from '/components/standard/test1.js'
import test_2 from '/components/test2.js'

// line 8-20 is throwing a 'React' must be in scope when using JSX
export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>App.js header</h1>
        <BrowserRouter>
          <Routes>
            <Route path='test_1' element={<test1/>}></Route>
            <Route path='test_2' element={<test2/>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
      <body>
        <h2>body</h2>
        <p>skajdhfklashvicshaaiwbeib</p>
      </body>
    </div>
  );
}

