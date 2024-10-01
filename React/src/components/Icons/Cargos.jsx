import WorkIcon from '@mui/icons-material/Work';
import { styled } from '@mui/material/styles';

const CargoIcono = styled(WorkIcon)(({ theme }) => ({
  height:'30px',
  width:'30px',
  color: theme.palette.primary.main, // Aplica estilos personalizados
  // Puedes agregar más estilos si es necesario
}));

export default CargoIcono;