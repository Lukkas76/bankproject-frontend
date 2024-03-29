import React from 'react';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

export const Sidebar = (props) => {
    const { user, logoutHandler, changePage, page } = props;
    let menu = null;

    if (user) {
        menu = <ClientMenu changePage={changePage} page={page} logoutHandler={logoutHandler} />;
    }

    return (
        <section id="side-menu">
            <h1 id="logo"><i className='bx bxs-bank'></i> Fiap Bank</h1>
            {menu}
        </section>
    )
}

export const ClientMenu = (props) => {
    const { changePage, logoutHandler, page } = props;

    const handleLogout = () => {
        logoutHandler();
    };

    return (
        <ul>
            <SideLink to="/" active={page} text="Home" icon="bx bx-home" />
            <SideLink to="/saque" active={page} text="Saque" icon="bx bx-money" />
            <SideLink to="/deposito" active={page} text="Depósito" icon="bx bx-dollar-circle" />
            <SideLink to="/" onClick={handleLogout} text="Sair" icon="bx bx-log-out" />
        </ul>
    )
}

export const SideLink = (props) => {
    const { icon, text, to, active, onClick } = props;

    return (
        <li>
            <Link to={to} className={active === to ? 'active' : ''} onClick={onClick}>
                <i className={icon}></i> {text}
            </Link>
        </li>
    )
}
