import {Link} from 'react-router-dom'

import './index.css'

const Home = props => {
  const {each} = props
  return (
    <div className="home-main">
      <div className="home-body">
        <h1>Games</h1>
        <div className="home-card-div">
          <div className="home-link-card">
            <Link to="/emoji-game" className="home-link">
              <img
                src="https://res.cloudinary.com/dev-uv/image/upload/v1734702927/mini-games-react-project/sq4ijgef7afuy7uakzfu.png"
                alt=""
                className="home-game-image"
              />
            </Link>
          </div>

          <div className="home-link-card">
            <Link to="/memory-matrix" className="home-link">
              <p>Memory Matrix</p>
              <img
                src="https://res.cloudinary.com/dev-uv/image/upload/v1734702927/mini-games-react-project/udfmuljymqm8tr0rmblv.png"
                alt=""
                className="home-game-image"
              />
            </Link>
          </div>

          <div className="home-link-card">
            <Link to="/rock-paper-scissor" className="home-link">
              <p>Rock Paper Scissor</p>
              <img
                src="https://res.cloudinary.com/dev-uv/image/upload/v1734702927/mini-games-react-project/xz26hvprjft9f07ufkei.png"
                alt=""
                className="home-game-image"
              />
            </Link>
          </div>

          <div className="home-link-card">
            <Link to="/card-flip-memory-game" className="home-link">
              <p>Card Flip Memory Game</p>
              <img
                src="https://res.cloudinary.com/dev-uv/image/upload/v1734702928/mini-games-react-project/cqk08nrgu85mipfpq3i9.png"
                alt=""
                className="home-game-image"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
