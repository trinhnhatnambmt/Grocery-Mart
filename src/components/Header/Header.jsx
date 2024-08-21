import "./Header.scss";
import Logo from "./Logo/Logo";
function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="top-bar">
                    {/* More */}
                    <button className="top-bar__more">
                        <img
                            src="src\assets\icon\more.svg"
                            alt=""
                            className="icon top-bar__more-icon"
                        />
                    </button>

                    {/* LOGO */}
                    <Logo />

                    {/* Navbar */}
                    <nav className="navbar">
                        <ul className="navbar__list">
                            <li>
                                <a href="" className="navbar__link">
                                    Departments
                                    <img
                                        src="src\assets\icon\arrow-down.svg"
                                        alt=""
                                        className="icon navbar__arrow"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="" className="navbar__link">
                                    Grocery
                                    <img
                                        src="src\assets\icon\arrow-down.svg"
                                        alt=""
                                        className="icon navbar__arrow"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="" className="navbar__link">
                                    Beauty
                                    <img
                                        src="src\assets\icon\arrow-down.svg"
                                        alt=""
                                        className="icon navbar__arrow"
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Action */}
                    <div className="top-act">
                        <div className="top-act__group top-act__group--single">
                            <button className="top-act__btn">
                                <img
                                    src="src\assets\icon\search.svg"
                                    alt=""
                                    className="icon top-act__icon"
                                />
                            </button>
                        </div>

                        <div className="top-act__group">
                            <button className="top-act__btn">
                                <img
                                    src="src\assets\icon\heart.svg"
                                    alt=""
                                    className="icon top-act__icon"
                                />
                                <span className="top-act__title">03</span>
                            </button>

                            <div className="top-act__separate"></div>

                            <button className="top-act__btn">
                                <img
                                    src="src\assets\icon\buy.svg"
                                    alt=""
                                    className="icon top-act__icon"
                                />
                                <span className="top-act__title">$65.42</span>
                            </button>
                        </div>

                        <div className="top-act__user">
                            <img
                                src="src\assets\img\avatar.jpg"
                                alt=""
                                className="top-act__avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
