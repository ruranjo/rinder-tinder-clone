import './App.css'
import Header from './components/Header'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
    <BrowserRouter >
      <Routes>
        
          <Route path= "/" element={<Header/>}></Route>
          <Route path= "/chats" element={<>hola</>}>
            
          </Route>
      </Routes>
    </BrowserRouter>
      
      
          
      
      
    </div>
    </>
  )
}

export default App
