import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Fragment } from "react";
import callCenter from "./assets/call.png";
import rightImg from "./assets/siderBar.png";
import cardImg1 from "./assets/card1.png";
import cardImg2 from "./assets/card2.png";
import cardImg3 from "./assets/card3.png";
import serviceImg1 from "./assets/service-card1.png";
import serviceImg2 from "./assets/service-card2.png";
import serviceImg3 from "./assets/service-card3.png";
import articleImg1 from "./assets//girl.png";
import cleanerImg1 from "./assets/cleaner.png";
import cleanerImg2 from "./assets/cleaner-woman.png";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Header />
        {/* 1 */}
        <main>
          <div className="left-texts">
            <h1>Quality cleaning for your home</h1>
            <p>
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className="call">
              <button>Get a free quote</button>
              <div className="call-center">
                <img src={callCenter} alt="call-center" />
                <div className="in-texts">
                  <p>Call us now</p>
                  <p className="number-p">(414) 567 - 2109</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section">
            <img src={rightImg} alt="rightImg" />
          </div>
        </main>
        {/* 2 */}
        <section>
          <div className="about-us">
            <h2>About Us</h2>
            <p>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
            <div className="in-cards">
              <div className="card">
                <img src={cardImg1} alt="cardImg1" />
                <h3>1. Schedule online</h3>
                <p>
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
              <div className="card">
                <img src={cardImg2} alt="cardImg2" />
                <h3>2. Pay online easily</h3>
                <p>
                  Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                  amet at nunc.
                </p>
              </div>
              <div className="card">
                <img src={cardImg3} alt="cardImg2" />
                <h3>3. Get your house cleaned</h3>
                <p>
                  Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                  cursus eleifend.
                </p>
              </div>
            </div>
            <div className="connect-btn">
              <button>Get a free quote</button>
              <button>Explore services</button>
            </div>
          </div>
        </section>
        {/* 3 */}
        <section>
          <div className="services">
            <div className="service-top">
              <h2>Our Services</h2>
              <button>Explore services</button>
            </div>
            <div className="service-cards">
              <div className="service-card">
                <img src={serviceImg1} alt="serviceImg1" />
                <h3>House Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>

              <div className="service-card">
                <img src={serviceImg2} alt="serviceImg2" />
                <h3>Office cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>

              <div className="service-card">
                <img src={serviceImg3} alt="serviceImg3" />
                <h3>Industrial cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 4 */}
        <section className="testimonials-section">
          <div className="testimonials">
            <div className="img_card">
              <img src={articleImg1} alt="articleImg1" />
            </div>
            <div className="test-text-card">
              <p>Covid-19 sanitization</p>
              <h3>
                We follow guidelines to keep you safe from the COVID-19 virus
              </h3>
              <p className="test-p">
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
              <div className="call">
                <button>Get a free quote</button>
                <div className="call-center">
                  <img src={callCenter} alt="call-center" />
                  <div className="in-texts">
                    <p>Call us now</p>
                    <p className="number-p">(414) 567 - 2109</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 5 */}
        <section className="article-resource">
          <div className="article">
            <div className="articele-texts">
              <h2>Articles & resources</h2>
              <div className="connect-btn">
                <button>Get a free quote</button>
                <button>Browse articles</button>
              </div>
            </div>

            <div className="article-cards">
              <div className="article-card">
                <img src={cleanerImg1} alt="cleanerImg1" />
                <div className="in__card">
                  <h3>
                    8 best vacuum cleaners to clean any mess for your home in
                    2022
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>
                </div>
              </div>

              <div className="article-card">
                <img src={cleanerImg2} alt="cleanerImg2" />
                <div className="in__card">
                  <h3>How to clean your house in 30 minutes</h3>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 6 */}
        <section className="contact-section">
          <div className="contact">
            <h2>Contact Us</h2>
            <p className="contact-p">
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <div className="contact-mee">
              <div className="contact-xz">
                <img src={callCenter} alt="callCenter" />
                <div className="in-texts">
                  <p>Call us now</p>
                  <p className="number-p">(414) 567 - 2109</p>
                </div>
              </div>
              <hr />
              <h3>Not convinced yet?</h3>
              <p className="contact-p_2">
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </p>
              <button>Browse our packages</button>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Full Name" />
              <input type="tel" placeholder="Phone number" />
              <input type="text" placeholder="Address" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Requested service" />
              <input type="date" placeholder="Day of service" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
