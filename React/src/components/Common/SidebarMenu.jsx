import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Divider from '@mui/material/Divider';
import UserIcon from '../Icons/UserIcon';
import RadioIcon from '../Icons/RadioIcon';
import ElementoIcono from '../Icons/ElementoIcono';
import AreaIcono from '../Icons/AreaIcon';
import HomeIcono from '../Icons/HomeIcon';
import RegionalIcon from '../Icons/RegionalIcon';
import { styled } from '@mui/material/styles';
import CargoIcono from '../Icons/Cargos';


// Estilo para el enlace
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: 10,
  padding: 0,
  width: '50%',
  height:'50%',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.primary
  },
  '&:active': {
    backgroundColor: theme.palette.action.selected, // Color al hacer clic
    transform: 'scale(0.95)', // Reduce la escala del botón al hacer clic
  },
}));

function SidebarMenu() {


  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Menu>
      <StyledMenuItem onClick={() => handleNavigation('/Home')}>
        <HomeIcono sx={{ marginRight: 1 }} />
        Home
      </StyledMenuItem>

      <SubMenu
        label={
          <>
            <ElementoIcono sx={{ marginRight: 1 }} />
            Elementos
          </>
        }
        onClick={() => setOpen(!open)}
      >
        <StyledMenuItem onClick={() => handleNavigation('/Celulares')}>
          <RadioIcon sx={{ marginRight: 1 }} />
          Celulares
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleNavigation('/Laptops')}>
          <RadioIcon sx={{ marginRight: 1 }} />
          Laptops
        </StyledMenuItem>
        <Divider />
      </SubMenu>

      <StyledMenuItem onClick={() => handleNavigation('/Regionales')}>
        <RegionalIcon sx={{ marginRight: 1 }} />
        Regionales
      </StyledMenuItem>

      <StyledMenuItem onClick={() => handleNavigation('/Cargos')}>
        <CargoIcono sx={{ marginRight: 1 }} />
        Cargos
      </StyledMenuItem>

      <StyledMenuItem onClick={() => handleNavigation('/Areas')}>
        <AreaIcono sx={{ marginRight: 1 }} />
        Areas
      </StyledMenuItem>

      <StyledMenuItem onClick={() => handleNavigation('/Usuarios')}>
        <UserIcon sx={{ marginRight: 1 }} />
        Usuarios
      </StyledMenuItem>
    </Menu>
  );
}

export default SidebarMenu;
