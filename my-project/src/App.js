
import './App.css';
// import Header from './component/header';
// import Footer from './component/footer';
// import Container from './component/Container';
// import ContainerHook from './component/ContainerHook';

import Welcome from './ExerciseComponent/Welcome';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
   <>
   <div className='App'>
    <Welcome name="Admin"/>
   </div>
   {/* <Header/> */}
   {/* <Container/> */}
   {/* <ContainerHook/> */}
   {/* <Footer/> */}
   </>
  );
}

export default App;
