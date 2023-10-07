import '../css/about.css';

const About = () => {

  return (
    <section>
      <img className='about__image' src={require('../images/about-hero.png')} alt="man sitting on van" />
      <div className='content__container'>
      <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
      <p>
        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans go off without a hitch. <br />
        (Hitch costs extra 😊)
      </p>
      <p>
        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels. 
      </p>
      <div className='about__explore'>
        <h2>Your destination is waiting.</h2>
        <h2>Your van is ready.</h2>
        <button>Explore our vans</button>
      </div>
      </div>
    </section>
  )
}

export default About