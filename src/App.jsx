import './App.css'
import Header from './components/Header'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TarjetasTinder from './components/TarjetasTinder';

function App() {
  return (
    <>
    <div className="App">
    
    <BrowserRouter >
    <Header/>
      <Routes>
          <Route path= "/" element={<TarjetasTinder/>}></Route>
          
          <Route path= "/chats" element={<>hola</>}>
            
          </Route>
      </Routes>
    </BrowserRouter>
      
      
          
      
      
    </div>
    </>
  )
}

export default App
