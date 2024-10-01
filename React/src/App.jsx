import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Side from "./components/Layout/Sidebar";
import Home from "./components/Pages/Home";
import Elementos from "./components/Pages/Elementos";
import Celulares from "./components/Pages/Celulares";
import Laptops from "./components/Pages/Laptops";
import Regionales from "./components/Pages/Regionales";
import Box from "@mui/material/Box";
import Cargos from "./components/Pages/Cargos";
import Areas from "./components/Pages/Areas";
import Header from "./components/Layout/Header";
import Usuarios from "./components/Pages/Usuarios";


function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          height: "100vh",  // Asegúrate de que el contenedor principal ocupe el 100% de la altura de la ventana
        }}
      >

        <Side />


        <Box
          sx={{
            flex: 1,  
            backgroundColor:'#f3f4f7'        // Ocupa el espacio restante  
          }}
        >
          <Header />


          <Routes sx={{backgroundColor:'#dbdfe6'}}>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Elementos" element={<Elementos />} />
            <Route path="/Laptops" element={<Laptops />} />
            <Route path="/Celulares" element={<Celulares />} />
            <Route path="/Regionales" element={<Regionales />} />
            <Route path="/Cargos" element={<Cargos />} />
            <Route path="/Areas" element={<Areas />} />
            <Route path="/Usuarios" element={<Usuarios />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
