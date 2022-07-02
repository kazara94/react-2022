import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Header() {
  const { t } = useTranslation();
  const navigation = ["Home", "About", "Contact", "Products"];
  return (
    <header>
      <nav>
        <ul>
          {navigation.map((li, index) => {
            return (
              <li key={index}>
                <Link className="navLink" to={`${li === "Home" ? "/" : li}`}>
                  {t(li)}
                </Link>
              </li>
            );
          })}
          {/* <li>
            <Link to={'/'} className="navLink">Home</Link>
          </li>
          <li>
            <Link to={'about'} className="navLink">About</Link>
          </li>
          <li>
            <Link to={'contact'} className="navLink">Contact</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
