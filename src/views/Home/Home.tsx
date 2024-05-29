import ControllerButtons from "../../components/ControllerButtons/ControllerButtons"
import Header from "../../components/Header/Header"

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
    </div>
  )
}


export default HomePage