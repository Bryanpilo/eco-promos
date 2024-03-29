import { Outlet } from "react-router-dom";
import { Fragment } from "react";

import Header from "../../components/header/header-component";
import Footer from "../../components/footer/footer-component";

import "./layout-styles.css"

const Layout = () =>{
    return(
        <Fragment>
            <div className="main-page-container">
                <Header/>
                <div className="layout-container">
                <Outlet/>
                </div>
                <Footer/>
            </div>
        </Fragment>
    )
}

export default Layout;