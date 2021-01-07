import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


function Footer() {
    return (
        <>
            <footer>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ backgroundColor: "#442e19"}}
                    className="footer__container"
                >
                    <Grid
                        item
                        xs={12}
                        md={12}
                        lg={4}
                        justify="center"
                        alignItems="center"
                        className="footer__social"
                        style={{ textAlign: "center" }}
                    >
                        <div className='footer__sicial__block'>
                            <h2 className="footer__social__name">
                                СОЦИАЛЬНЫЕ СЕТИ
                            </h2>
                            <a href="https://www.facebook.com/groups/262014790913584/" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{color:"wheat", marginLeft:"10px"}} fontSize="large"></FacebookIcon>
                            </a>
                            <a href="https://www.instagram.com/m_studio_dancing/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{color:"wheat", marginLeft:"10px"}} fontSize="large"></InstagramIcon>
                            </a>
                        </div>
                        <div className='footer__contacts__block'>
                            <h2 className="footer__contacts__name">
                                СВЯЗЬ
                                </h2>
                            <h3 className="footer__contacts">
                                <a href="tel:+380955777072" className="footer__phones" >+380955777072</a>
                                <br />
                                <a href="tel:+380955777046" className="footer__phones" >+380955777046</a>
                            </h3>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        lg={4}
                        justify="center"
                        alignItems="center"
                        style={{ textAlign: "center" }}
                    >
                        <h2 className="footer__contacts__name">
                            АДРЕС
                            </h2>
                        <h3 className="footer__contacts">
                            Украина <br />
                                г.Сумы<br />
                                ул.Привокзальная 25
                            </h3>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        lg={4}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <div className="footer__links">
                            <h2
                                className="footer__links__name"
                            >
                                СТРАНИЦЫ
                            </h2>
                            <ul>
                                <li className="footer__link">
                                    <Link to='/'>
                                        Главная
                                        </Link>
                                </li>
                                <li className="footer__link">
                                    <Link to='/about'>
                                        О нас
                                        </Link>
                                </li>
                                <li className="footer__link">
                                    <Link to='/music'>
                                        Музыка
                                        </Link>
                                </li>
                                <li className="footer__link">
                                    <Link to='/trainers'>
                                        Тренера
                                        </Link>
                                </li>
                                <li className="footer__link">
                                    <a href='https://goo.gl/maps/b62aZ2uzUHo59eu98' target="_blank" rel="noopener noreferrer">
                                        Отзывы
                                        </a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </footer>
        </>
    )
}
export default Footer;
