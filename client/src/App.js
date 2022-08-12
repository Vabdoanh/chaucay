import "./App.css";

import FormInput from "./components/FormInput";
import Header from "./components/Header";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Product from "./components/Product";

function App() {

  return (
    // <div className="App">
    <>
      <Header />
      <Router>
        <Routes>
          <Route path= '/forminput' element= {<FormInput />} /> 
          <Route path= '/' element= {<Product />} />

        </Routes>
      </Router>
    </>
    // </div>
  );
}

export default App;

