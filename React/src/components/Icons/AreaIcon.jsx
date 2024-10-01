
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { styled } from '@mui/material/styles';

const AreaIcono = styled(WorkspacesIcon)(({ theme }) => ({
  height:'30px',
  width:'30px',
  color: theme.palette.primary.main, // Aplica estilos personalizados
  // Puedes agregar más estilos si es necesario
}));

export default AreaIcono;