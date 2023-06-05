import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './css/overview.css';


import Content from './views/content';
import Footer from './views/footer';
import Header from './views/header';

function App() {
  return (
    <div className="App">
      <Header/>
        <div className='container col-5 p-5 mt-5 mb-5 border border-primary rounded'>
          <Content/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
