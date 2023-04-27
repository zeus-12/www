import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="mt-16">{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
