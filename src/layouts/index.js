import Navbars from "../components/NavBar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbars />
      {children}
    </>
  );
};

export default Layout;
