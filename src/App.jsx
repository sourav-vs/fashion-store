import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import WishList from './pages/WishList'
import Cart from './pages/Cart'
import View from './pages/View'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/view/:id' element={<View/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
