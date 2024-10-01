import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import SidebarMenu from "../Common/SidebarMenu";

function Side() {
  return (
    <Sidebar
      sx={{
        height: "100vh",
        width: 250,
      }}
    >
      <SidebarMenu />

    </Sidebar>
  );
}

export default Side;
