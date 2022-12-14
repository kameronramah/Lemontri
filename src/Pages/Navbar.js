import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {FaHome, FaRegLightbulb, FaInfoCircle, FaGraduationCap} from "react-icons/fa";
import {ImTrophy } from "react-icons/im"


export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/#"><FaRegLightbulb /></CustomLink>
        <CustomLink to="/#"><FaGraduationCap /></CustomLink>
        <CustomLink to="/Home"><FaHome /></CustomLink>
        <CustomLink to="/#"><ImTrophy /></CustomLink>
        <CustomLink to="/#"><FaInfoCircle /></CustomLink>
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