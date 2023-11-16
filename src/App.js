import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { PrimeReactProvider } from 'primereact/api';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import "primereact/resources/themes/lara-light-indigo/theme.css";
        

function App() {
    return (
        <BrowserRouter>
        <PrimeReactProvider>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
            </PrimeReactProvider>
        </BrowserRouter>
    );
}

export default App;
