import './App.css'
import NFTIcon from './assets/images/image-equilibrium.jpg'
import ETHIcon from './assets/images/icon-ethereum.svg'
import ClockIcon from './assets/images/icon-clock.svg'
import Avatar from './assets/images/image-avatar.png'

function App() {

  return (
    <div className="main-component-container">
      <div className="nft-img-container">
        <img src={NFTIcon} alt="Equilibrium NFT Icon" className='nft-img'/>
      </div>
      <div className="nft-description-container">
        <div className="nft-name">Equilibrium #3429</div>
        <div className="nft-description">Our Equilibrium collection promotes balance and calm.</div>
        <div className="eth-info">
          <div className="eth-price">
            <img src={ETHIcon} alt="eth icon" className='eth-icon'/>
            <span>0.041 ETH</span>
          </div>
          <div className="eth-date">
            <img src={ClockIcon} alt="Clock Icon" className='eth-icon'/>
            <span>3 days left</span>
          </div>
        </div>
        <div className="line"></div>
        <div className="nft-creator">
          <div className="creator-avatar">
            <img src={Avatar} alt="Avatar icon" className='avatar-icon'/>
          </div>
          <div className="nft-creator-info">
            Creation of <span>Jules Wyvern</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
