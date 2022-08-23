import { NavLink } from "react-router-dom";
import { DropdownItem } from "reactstrap";

function ProfileDropdown() {
  const isSignedIn = true;

  if (isSignedIn === true) {
    return (
      <>
        <DropdownItem>
          <NavLink to="/profile">Profile</NavLink>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <NavLink to="/favorites">Favorites</NavLink>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Log Out</DropdownItem>
      </>
    );
  } else {
    return (
      <>
        <DropdownItem>
          <NavLink to="/login">Login</NavLink>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <NavLink to="/signup">Signup</NavLink>
        </DropdownItem>
      </>
    );
  }
}

export default ProfileDropdown;
