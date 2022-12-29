
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
// import Container from './component/Container';
import ContainerHook from './component/ContainerHook';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
   <>
   <Header/>
   {/* <Container/> */}
   <ContainerHook/>
   <Footer/>
   </>
  );
}

export default App;
