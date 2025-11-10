
import './App.css';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/utils/protected-route';
import ClientDashBoard from './components/client/client-dashboard';
import ClientBuy from './components/client/client-buy';
import ManagerDashboard from './components/manager/manager-dashboard';
import ClientSell from './components/client/client-sell';
import ClientMoneyTransfer from './components/client/client-money-transfer';
import ClientPastOrders from './components/client/client-past-orders';
import TraderDashboard from './components/trader/trader-dashboard';
import ClientSearch from './components/trader/trader-client-search';
import CancelLog from './components/trader/trader-cancel-log';
import FoundClient from './components/trader/trader-found-client';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute />} >
          <Route path='/client-dashboard' element={<ClientDashBoard />} />
          <Route path='/client-dashboard/buy-bitcoin' element={<ClientBuy />} />
          <Route path='/client-dashboard/sell-bitcoin' element={<ClientSell />} />
          <Route path='/client-dashboard/transfer-money' element={<ClientMoneyTransfer />} />
          <Route path='/client-dashboard/orders' element={<ClientPastOrders />} />
          <Route path='/manager-dashboard' element={<ManagerDashboard />} />
          <Route path='/trader-dashboard' element={<TraderDashboard />} />
          <Route path='/trader-dashboard/client-search' element={<ClientSearch />} />
          <Route path='/trader-dashboard/cancel-log' element={<CancelLog />} />
          <Route path='/trader-dashboard/client-search/clients/search' element={<FoundClient />} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
