import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {FaHome, FaRegLightbulb, FaInfoCircle, FaGraduationCap} from "react-icons/fa";
import {ImTrophy } from "react-icons/im"


export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Lemontri
      </Link>
      <ul>
        <CustomLink to="/Home"><FaHome /> Accueil</CustomLink>
        <CustomLink to="/#"><ImTrophy /> Quizzes</CustomLink>
        <CustomLink to="/#"><FaGraduationCap /> Cours</CustomLink>
        <CustomLink to="/#"><FaRegLightbulb /> Info+</CustomLink>
        <CustomLink to="/#"><FaInfoCircle /> Hotline</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}