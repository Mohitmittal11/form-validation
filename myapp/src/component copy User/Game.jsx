import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/game.css';
const Game = () => {

  const myFunction = ()=> {
    var values=document.getElementById("navdata");
    if(values.style.display=== "block")
    {
        values.style.display="none";
    }
    else
    {
        values.style.display="block";
    }
}

  return (
    <div>
      <div className="main">
        <div className="header">
          <div className="left-header">
            <img src="/images/logo-2150297_640.webp" alt="logo" />
            <a>LUGX</a>
          </div>
          <div className="right-header" id="navdata">
            <a className="home">Home</a>
            <a>Our Shop</a>
            <a>Product Details</a>
            <a >Contact Us</a>
            <Link to={'/signin'}><a className="signin">Sign IN</a></Link>
          </div>
          <button onclick={myFunction}> Show</button>
        </div>
        <div className="welcome">
          <div className="leftcontent">
            <p>WELCOME TO LUGX</p>
            <h1>BEST GAMING SITE EVER!</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates omnis quo enim ipsa repellendus non ex necessitatibus dignissimos corporis nemo?  </p>
            <div className="inputfield">
              <input type="text" placeholder="Type Something" />
              <a >Search Now</a>
            </div>
          </div>
          <div className="rightcontent">
            <img src="/images/image1.jpg" alt="gamealian" />
            <div className="price">
              <p> $22 </p>
            </div>
            <div className="discount">
              <p>-40% </p>
            </div>
          </div>
        </div>
        <section className="mainCardContainer">
          <div className="cards">
            <div className="freestorage">
              <img className="twitter" src="/images/twitter.png" alt='logo' />
              <p>Free Storage</p>
            </div>
            <div className="freestorage">
              <img className="twitter" src="/images/twitter.png" alt='logo' />
              <p>User More</p>
            </div>
            <div className="freestorage">
              <img className="twitter" src="/images/twitter.png" alt='logo' />
              <p>Reeply Ready</p>
            </div>
            <div className="freestorage">
              <img className="twitter" src="/images/twitter.png" alt='logo' />
              <p>Easy Layout</p>
            </div>
          </div>
        </section>
      </div>

      <div className="trending">
        <p>Trending</p>
        <div className="trending-games">
          <h2>Trending Games</h2>
          <a >VIEW ALL</a>
        </div>
      </div>
      <div className="game-image">
        <div className="img1">

          <img className="game-img1" src="/images/images1.jpeg" alt='game1' />
          <p>$20</p>
          <h4>Action</h4>
          <div className="description">
            <h3>Assasin Creed</h3>
            <img src="/images/logos.png" alt='instagram' />
          </div>
        </div>
        <div className="img1">
          <img className="game-img1" src="/images/images2.jpeg" alt='game2' />
          <p>$44</p>
          <h4>Action</h4>
          <div className="description">
            <h3>Assasin Creed</h3>
            <img src="/images/logos.png" alt='instagram' />

          </div>
        </div>
        <div className="img1">
          <img className="game-img1" src="/images/images3.jpeg" alt='game3' />
          <p>$44</p>
          <h4>Action</h4>
          <div className="description">
            <h3>Assasin Creed</h3>
            <img src="/images/logos.png" alt='instagram' />
          </div>
        </div>
        <div className="img1">
          <img className="game-img1" src="/images/images4.jpeg" alt='game4' />
          <p>$32</p>
          <h4>Action</h4>
          <div className="description">
            <h3>Assasin Creed</h3>
            <img src="/images/logos.png" alt='instagram' />
          </div>
        </div>
      </div>
      <div className="outer">
        <div className="topgames">
          <p>TOP GAMES</p>
          <div className="mostplayed">
            <h2>Most Played</h2>
            <a >VIEW ALL</a>
          </div>
        </div>
        <div className="mostplayed-images">
          <div className="newimg1">
            <img className="heroimg" src="/images/movies1.jpeg" alt='hero1' />
            <p>Adventure</p>
            <h3>Assasin Creed</h3>
            <h4>Explore</h4>
          </div>
          <div className="newimg1">
            <img className="heroimg" src="/images/movies2.jpeg" alt='hero2' />
            <p>Adventure</p>
            <h3>Assasin Creed</h3>
            <h4>Explore</h4>
          </div>
          <div className="newimg1">
            <img className="heroimg" src="/images/movies3.jpeg" alt='hero3' />
            <p>Adventure</p>
            <h3>Assasin Creed</h3>
            <h4>Explore</h4>
          </div>
          <div className="newimg1">
            <img className="heroimg" src="/images/movies4.jpeg" alt='hero4' />
            <p>Adventure</p>
            <h3>Assasin Creed</h3>
            <h4>Explore</h4>
          </div>
          <div className="newimg1">
            <img className="heroimg" src="/images/movies5.jpeg" alt='hero5' />
            <p>Adventure</p>
            <h3>Assasin Creed</h3>
            <h4>Explore</h4>
          </div>
          <div className="newimg1">
            <img className="heroimg" src="/images/movies6.jpeg" alt='hero6' />
            <p>Adventure</p>
            <h3>Assasin Creed</h3>
            <h4>Explore</h4>
          </div>
        </div>
      </div>
      <div className="category">
        <p>Categories</p>
        <h2>Top Categories</h2>
      </div>
      <div className="superhero">
        <div className="superhero-img1">
          <img src="/images/superhero1.jpeg" alt='superhero1' />
          <p>Action</p>
        </div>
        <div className="superhero-img2">
          <img src="/images/superhero2.jpeg" alt='superhero2' />
          <p>Action</p>
        </div>
        <div className="superhero-img3">
          <img src="/images/superhero3.jpeg" alt='superhero3' />
          <p>Action</p>
        </div>
        <div className="superhero-img4">
          <img src="/images/superhero4.jpeg" alt='superhero4' />
          <p>Action</p>
        </div>
        <div className="superhero-img5">
          <img src="/images/superhero5.jpeg" alt='superhero5' />
          <p>Action</p>
        </div>
      </div>
      <div className="shoping-cards">
        <div className="shoping-card1">
          <p className="shop">Our Shop</p>
          <h3>Go Pre-Order Buy & Get Best <span>Prices</span> For You! </h3>
          <p className="data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quod hic veritatis nobis impedit consequatur placeat doloremque excepturi quo odit?</p>
          <p className="btn">Shop Now</p>
        </div>
        <div className="shoping-card2">
          <img src="/images/gameimage.jpeg" alt='game1' />
        </div>
        <div className="shoping-card3">
          <p className="news">NEWSLETTER</p>
          <h3> Get Up To $100 Off Just Buy <span>Subscribe </span> Newsletter </h3>
          <input type="text" placeholder="Your email" />
          <p className="newbtn">Subscribe Now</p>
        </div>
      </div>
      <div className="footer">
        <p>Copyright @ 2024</p>
      </div>
    </div>
  )
}

export default Game;
