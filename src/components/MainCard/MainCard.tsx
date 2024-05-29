const MainCard = () => {
  return (
    <div className="maincard-container">
      <div className="maincard-container-infos">
        <div className="maincard-container-infos-map">

        </div>

        <div className="maincard-container-infos-address">
          <div className="maincard-container-infos-address-role">
            Main house
          </div>
          <div className="maincard-container-infos-address-name">
            Maren Calzoni
          </div>
          <div className="maincard-container-infos-address-phone">
            (702) 555-1990
          </div>
          <div className="maincard-container-infos-address-streets">
            4517 Washington Avenue, Manchester, Kentucky 39495
          </div>
        </div>

        <div className="maincard-container-infos-address-radius">
          <button>checked</button>
        </div>
      </div>

      <div className="maincard-container-footer">

        <button>Edit Address</button>
        <button>Delete Address</button>

      </div>

    </div>
  )
}

export default MainCard