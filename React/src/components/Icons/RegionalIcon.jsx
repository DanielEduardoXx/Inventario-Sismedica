import ApartmentIcon from '@mui/icons-material/Apartment';
import { styled } from '@mui/material/styles';

const RegionalIcon = styled(ApartmentIcon)(({ theme }) => ({
  height:'30px',
  width:'30px',
  color: theme.palette.primary.main, // Aplica estilos personalizados
  // Puedes agregar más estilos si es necesario
}));

export default RegionalIcon