import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import user from '../../assets/images/profile_3135715.png'
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className="container-fluid" >
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0  bg-black sidebar" style={{height:'100%', width:'fit-content'}}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <img src={Logo} alt='Logo' className='navbar-brands' style={{maxWidth:'130px', maxHeight:'110px'}}/>
                        <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/" className="nav-link custom-sidebar-link px-0">
                            <i className="fas fa-bell p-2"></i> <span className="ms-1 d-none d-sm-inline">Alert</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link custom-sidebar-link  px-0">
                            <i className="fas fa-graduation-cap p-2"></i> <span className="ms-1 d-none d-sm-inline">Training</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link custom-sidebar-link  px-0">
                            <i className="fas fa-gears p-2"></i> <span className="ms-1 d-none d-sm-inline">Automation</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link custom-sidebar-link  px-0">
                            <i className="fas fa-folder-open p-2"></i> <span className="ms-1 d-none d-sm-inline">Portfolio</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link custom-sidebar-link  px-0">
                            <i className="fas fa-arrow-up-right-dots p-2"></i> <span className="ms-1 d-none d-sm-inline">Trading</span>
                            </Link>
                        </li>
                        </ul>
                        <div className={`${styles.personalInfo} d-flex  row mt-auto text-align-center `}>

                            <div className='col-3'> 
                                {/* <i className='far fa-circle-user p-2 '></i> */}
                                <img src={user} alt='' style={{scale: '1.5'}} />
                            </div>

                            <div className="col-9 ps-4 d-none d-sm-inline">
                                <p> Moni Roi <br/> <span className={`${styles.title} custom-secondary-text `}>Beginner</span></p>
                            </div>
                        </div>
                        <div className={`d-none d-sm-inline ${styles.footer}`}>
                            Street Suite. 2.0
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    };
    

export default Sidebar