import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {FaHome, FaRegLightbulb, FaInfoCircle, FaGraduationCap} from "react-icons/fa";
import {ImTrophy } from "react-icons/im"


export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/lesaviezvous"><FaRegLightbulb /></CustomLink>
        <CustomLink to="/cours"><FaGraduationCap /></CustomLink>
        <CustomLink to="/accueil"><FaHome /></CustomLink>
        <CustomLink to="/quizzes"><ImTrophy /></CustomLink>
        <CustomLink to="/info"><FaInfoCircle /></CustomLink>
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
