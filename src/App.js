import "./App.css"
import ResponsiveAppBar from "./components/NavBar/ResponsiveAppBar";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import Instructions from "./components/Instructions/Instructions";
import ErrorPage from "./components/ErrorPage/ErrorPage"
import { BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <HashRouter>
        <ResponsiveAppBar />
          <Routes>
            <Route exact path='/*' element={<ErrorPage />} />
            <Route exact path='/' element={<Instructions />} />
            <Route exact path='/instructions' element={<Instructions />} activeClassName="active"/>
            <Route exact path='/Shopping-List' element={<ShoppingList />} activeClassName="active"/>
          </Routes>
          <Footer />
      </HashRouter>
    </div>
  );
}

export default App;