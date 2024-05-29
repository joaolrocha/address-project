import './_mainCard.scss'

import imageMap from '../../assets/images/Captura de Tela 2024-05-29 às 12.28.16.png'

const MainCard = () => {
  return (
    <div className="maincard-container">
      <div className='maincard-container-fix'>
        <div className="maincard-container-infos">
          <div className="maincard-container-infos-map">
            <img src={imageMap} alt="image map" />
          </div>

          <div className="maincard-container-infos-address">
            <div className="maincard-container-infos-address-role">
              <p>Main house</p>
            </div>
            <div className="maincard-container-infos-address-name">
              <h2>Maren Calzoni</h2>

            </div>
            <div className="maincard-container-infos-address-phone">
              <p>(702) 555-1990</p>
            </div>
            <div className="maincard-container-infos-address-streets">
             <p>4517 Washington Avenue, Manchester, Kentucky 39495</p> 
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
    </div>
  )
}

export default MainCard