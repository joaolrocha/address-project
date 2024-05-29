import ControllerButtons from "../../components/ControllerButtons/ControllerButtons"
import Header from "../../components/Header/Header"
import MainCard from "../../components/MainCard/MainCard"
import SearchAddress from "../../components/SearchAddress/SearchAddress"

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-container-header">
        <Header tittle="Address" />
      </div>

      <div className="divider-line"></div>
      
      <div className="homepage-container-controller">
        <ControllerButtons />
      </div>

      <div className="homepage-container-search">
        <SearchAddress/>
      </div>

      <div className="homepage-container-cards">
        <MainCard/>
      </div>
    </div>
  )
}


export default HomePage