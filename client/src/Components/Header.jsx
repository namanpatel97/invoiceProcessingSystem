import {AppBar, Toolbar} from '@mui/material';

const Header = () => {
    const logo = "https://dashboard.invoice.ng/dboard/img/logo.png";
    return <AppBar color = "secondary" position="static">
        <Toolbar>
        <img src={logo} alt="logo" style={{width : 120}}/>
        </Toolbar>
    </AppBar>;
  }
export default Header;