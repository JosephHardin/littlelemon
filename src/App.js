import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useState, createContext } from "react";
import Reserve from "./components/Reserve";

export const ContextProvider = ({ children }) => {
    const [items, setItems] = useState(0);
}

function App() {
    const [reserve, setReserve] = useState( 0 );
    console.log(reserve)
    let page
    if (reserve === 0 ) {
        page = <Main />
    }
    else{
        page = <Reserve/>

    }

    return (
    <div className="App">
        <Nav />
        <Header />
        {page}
        <Footer />


    </div>
  );
}

export default App;
