import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* footer */}
    </>
  );
};

export default Layout;
