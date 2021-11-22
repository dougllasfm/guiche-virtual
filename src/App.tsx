// import SearchTickets from './pages/SearchTickets'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AcentContextProvider } from './contexts/AcentContext'

import BuyTickets from './pages/BuyTickets/index'
import SearchTickets from './pages/SearchTickets'
import PickSeat from './pages/PickSeat'
import Receipt from './pages/Receipt'

import GlobalStyle from './styles/GlobalStyle'

const App = function App() {
  return (
    <>
      <BrowserRouter>
        <AcentContextProvider>
          <Routes>
            <Route path="/" element={<SearchTickets />} />
            <Route path="/comprar-passagem" element={<BuyTickets />} />
            <Route path="/escolher-poltrona" element={<PickSeat />} />
            <Route path="/comprovante" element={<Receipt />} />
          </Routes>
        </AcentContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
