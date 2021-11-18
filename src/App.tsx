// import SearchTickets from './pages/SearchTickets'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BuyTickets from './pages/BuyTickets/index'
import SearchTickets from './pages/SearchTickets'
import PickSeat from './pages/PickSeat'

import GlobalStyle from './styles/GlobalStyle'

const App = function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchTickets />} />
          <Route path="/comprar-passagem" element={<BuyTickets />} />
          <Route path="/escolher-poltrona" element={<PickSeat />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
