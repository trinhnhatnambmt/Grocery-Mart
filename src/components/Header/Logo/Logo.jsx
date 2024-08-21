import { Link } from "react-router-dom";
import "./Logo.scss";
function Logo() {
    return (
        <Link to="/" className="logo">
            <img
                src="src\assets\icon\logo.svg"
                alt="grocerymart"
                className="logo__img"
            />
            <h1 className="logo__title">grocerymart</h1>
        </Link>
    );
}

export default Logo;
