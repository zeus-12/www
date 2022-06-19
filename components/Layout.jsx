import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="mt-16">{children}</div>
      {/* footer */}
    </>
  );
};

export default Layout;
