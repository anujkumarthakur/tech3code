
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: blue;
`;
    
const Tabs = styled(NavLink)`
    color: white;
    margin-right: 20px;
    margin-left: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="./" exact>Tech3Code</Tabs>
                <Tabs to="golang" exact>Golang Development</Tabs>
                <Tabs to="database" exact>Database Developemnt</Tabs>
                <Tabs to="fronted" exact>React Developemnt</Tabs>
                <Tabs to="mobile" exact>Android/IOS App Developemnt</Tabs>
                <Tabs to="blockchain" exact>Blockchain Developemnt</Tabs>
                <Tabs to="blog" exact>Code Blog</Tabs>

            </Toolbar>
        </Header>
    )
}

export default NavBar;