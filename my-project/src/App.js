
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import { useState } from 'react';
// import Container from './component/Container';
// import ContainerHook from './component/ContainerHook';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Routers from './component/Routers';
import Login from './login/Login';
function App() {
  const [logged, changeLogged] = useState(true);
  function changeLoggedStatus (status) {
    changeLogged(!this.logged);
  }
  if(logged) 
    return <>
    <BrowserRouter>
        <Header></Header>
        <Routes>
          {
          Routers.map(item => {
            return <Route key={item.path} path={item.path} element={item.element}></Route>})
            }
          {/* <Route path='/Product' element={<ContainerHook/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Topic' element={<Topic/>}></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  else {
    return <Login hangeLoggedStatus = {changeLoggedStatus}></Login>
  }
}

export default App;
