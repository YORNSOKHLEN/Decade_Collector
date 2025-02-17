import Footer from "../Elements/Footer";
import GroupMenu from "../Elements/GroupMenu";
import GroupSerieMovie from "../Elements/GroupSerieMovie";
import Header from "../Elements/Header";
import NavBar from "../Elements/NavBar";
import Decade from "./Decade";

// import Footer from "./components/JSX/Elements/Footer";
const DecadeApp = () => {
  return (
    <>
      <Header />
      <div className="w-full mt-[90px] flex">
        <GroupMenu />
        <div className="w-full ml-[60px]">
          <NavBar />
          <GroupSerieMovie />
          <Decade />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DecadeApp;
