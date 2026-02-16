import Home from './pages/Home'
import './App.css'
import PokeDetails from './pages/PokeDetails'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
function App() {
  

  return (
    <>
      <QueryClientProvider client={queryClient}>
    <Navbar></Navbar>
      <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<PokeDetails />} />

      </Routes>



        
    </BrowserRouter>
    </QueryClientProvider>
       
    </>
  )
}

export default App
