import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchItems from "../components/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const FetchStatus = useSelector((store)=>store.fetchStatus);
  return (
    <>
      <Header />
      {(FetchStatus.currentlyfetching) ? <LoadingSpinner/> : <Outlet /> }
      <FetchItems/>
      {/* <Outlet /> */}
      <Footer />
    </>
  );
}

export default App;
