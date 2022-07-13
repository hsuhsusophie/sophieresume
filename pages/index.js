/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { FiFacebook, FiGithub } from "react-icons/fi";
import {  BsInstagram } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import React from "react";

// import {IoCloseSharp, } from "react-icons/io"



class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      test:""
    }

  }
  onClickTest = () => {
    
  }


  
render (){
  const {} = this.state
  return (
    <div className={styles.container}>
      <Head>
        <title>Sophie</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <div>
          <nav>
            <div className="top">
              <a href="#">
                <h3>Sophie</h3>
              </a>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#About" onClick={this.onClickTest} >About</a>  
                  {/* onclick之後會跑過去 onClickTest這個功能 */}
                </li>
                <li>
                  <a href="#Skills" onClick={this.onClickTest}>Skills</a>
                </li>
                <li>
                  <a href="#contact" onClick={this.onClickTest}>Contact</a>
                </li>
              </ul>

              <button>
                <HiMenu/>
              </button>
            </div>
          </nav>

          <section className="landing">
            <div className="container">
              <div className="socials">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiFacebook />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
                <a href="https:github.com" target="_blank" rel="noreferrer">
                  <FiGithub />
                </a>
              </div>

              <div className="info">
                <h1>Junior Front-End Web Developer</h1>
                <p>
                  I am a Junior Web Designer from
                  Taiwan. And I'm very creative and passionate at my work. It's
                  very nice to meet you.
                </p>
              </div>

              <div className="circle--square">
                <img src="./images/img_po.png" />
              </div>
            </div>
          </section>
        </div>

        <section className="about" id="about">
          <div className="item">
            <h1>About Me</h1>
          </div>
          <div className="item">
            <img src="./images/img_about.png" />
          </div>
          <div className="item">
            <h5>
              Name: Sophie Hsu
              <hr />
              Nationality: Taiwanese
              <hr />
              Location: Phillipines
              <hr />
              Language: Mandarin/English
              <hr />
              Interests: Travel/Photograph /Music <hr />
              <hr />
              -----Currently living in Phillipines, fonds of learning, recently
              learning front-end Developer and my goal is become a impressive
              front-end Developer.
            </h5>
          </div>
        </section>
        <section className="aboutmore">
         
          <div className="wrap">
            <h2>Ambition</h2>
            <p>Always having strong desire to do or to achieve succrss.</p>
          </div>
          <div className="wrap">
          <h2>Challenge</h2>
            <p>Never be afraid to Challenge myself.</p>
          </div>
          <div className="wrap">
            <h2>Adventure</h2>
            <p>Adventure makes me feel alive!</p>
          </div>
        </section>
        
<section className="skills" id="skills">
  <div class="row"></div>
<p>HTML</p>
<p>CSS</p> <p>SCSS</p>
<p>Javescript</p>
<p>Bootstrap</p>
<p>RWD</p>
  <div class="row"></div>
  <h2>Skills</h2>
  <div class="row"></div>
 <p>Jquery</p>
 <p>github</p>
 <p>React</p>
<p>Node.Js</p>
<p>Webpacker</p>

</section>





      </main>

      {/* <footer className={styles.footer}>
        <a
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          Made by Sophie</span>
        </a>
      </footer> */}

      <footer className="footer">
        <p>Made by Sophie</p>
      </footer>
    </div>
  );
}
}

export default Home;

