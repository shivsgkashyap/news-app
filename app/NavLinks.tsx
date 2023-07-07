import { categories } from "../constants";
import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <nav>
      {categories.map((category) => (
        <NavLink key={category} category={category} isActive={true} />
      ))}
    </nav>
  );
};

export default NavLinks;
