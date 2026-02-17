import Home from './pages/Home'
import './App.css'
import PokeDetails from './pages/PokeDetails'
import Navbar from './components/Navbar'
import PokeCaught from './pages/PokeCaught'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
function App() {
  return (
    <>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
    <Navbar></Navbar>
      
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<PokeDetails />} />
          <Route path="/caught" element={<PokeCaught />} />
      </Routes>
    
    </QueryClientProvider>
    </BrowserRouter>
       
    </>
  )
}

export default App
