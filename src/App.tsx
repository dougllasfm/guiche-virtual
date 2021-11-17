// import SearchTickets from './pages/SearchTickets'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BuyTickets from './pages/BuyTickets/index'
import SearchTickets from './pages/SearchTickets'
import GlobalStyle from './styles/GlobalStyle'

const App = function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/comprar-passagem" element={<BuyTickets />} />
          <Route path="/" element={<SearchTickets />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
