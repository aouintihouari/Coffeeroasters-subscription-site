import Logo from "./Logo";
import NavBar from "./Header/NavBar";
import NavBarMobile from "./Header/NavBarMobile";
import OpenMenu from "./Header/OpenMenu";
import CloseMenu from "./Header/CloseMenu";

const Header = ({ openMenu, onOpenMenu }) => {
  return (
    <header className="flex items-center justify-between">
      <Logo usage={"header"} />
      <NavBar />
      {openMenu ? (
        <div className="relative">
          <CloseMenu onOpenMenu={onOpenMenu} />
          <NavBarMobile />
        </div>
      ) : (
        <OpenMenu onOpenMenu={onOpenMenu} />
      )}
    </header>
  );
};

export default Header;
