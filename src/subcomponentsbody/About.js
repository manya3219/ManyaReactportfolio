import my from "../images/my.png";

const About = () => {
  return (
    
    
      
    <section className="about" id="about">
      <div className="about-img">
        <img src={my} alt="true" />
      </div>
      <div className="about-more">
        <h2 className="heading">
          ABOUT <span>ME</span>
        </h2>
        <h3>Frontened Developer</h3>
        <p>
          Hello,I am Manya. I am a kind and an
          extrovert person who is full of confidence. I'm always being energetic
          and action oriented. <br />I pursue Bachelor of Technology (CSE) from
          Seth Jai Prakash Mukand lal Institute of Engineering and
          Technology.(Radaur Yamunanagar).
        </p>
        
        <a
           href="#about" 
          className="btn1"  
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;