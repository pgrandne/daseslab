import gaiaxSimplified from '../style/img/gaiaxSimplified.svg'
import Daseslogo from '../style/img/favicon.svg'
import { useMatch, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { modalReducer } from '../features/reducers/connectionSlice';

const Header = ({ t, i18n }) => {
    const dispatch = useDispatch();
    const match = useMatch('/catalogue')

    return (
        <header>
            <div className="header_topBar">
                <img src={gaiaxSimplified} alt="gaiax_logo" /> inspired by <a href="https://www.gaia-x.eu/">gaia-x</a>
            </div>
            <div className="header_navBar container clearfix">
                <div className="floatLeft">
                    <Link to="/">
                        <img src={Daseslogo} alt="daseslab_logo" />
                    </Link>
                </div>
                <div className="floatRight">
                    <ul className="mainNav">
                        <li>
                            <Link to="/catalogue">
                                <button className={match ? "current" : ""}>{t('Catalogue')}</button>
                            </Link>
                        </li>
                        <li><button onClick={() => window.open("https://prometheus-x.org/", "_blank")}>{t('Communauté')}</button></li>
                        <li><button
                            className="button blackButton connectWallet"
                            onClick={() => { dispatch(modalReducer({ modal: 'welcome', source: 'header' })) }}
                        >
                            {t('Connecter')}
                        </button>
                        </li>
                        <li>
                            <section className="searchEngine container flex wrap row">
                                <select onChange={(e) => { i18n.changeLanguage(e.target.value) }}>
                                    <option value="fr">français</option>
                                    <option value="en">english</option>
                                </select>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;