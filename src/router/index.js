import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import List from "../pages/List";
import GoodsList from "../pages/Goods";
import GoodsDetail from "../pages/GoodsDetail";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
import Order from "../pages/Order";

const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/list' element={<List/>}></Route>
                <Route path='/goods' element={<GoodsList/>} />
            </Route>

            <Route path='/goods/:id' element={<GoodsDetail />}></Route>
            <Route path='/card' element={<Cart />}></Route>
            <Route path='/payment' element={<Payment />}></Route>
            <Route path='/order' element={<Order />}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        </Routes>
    </Router>
)

export default BaseRouter