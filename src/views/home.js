import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Kalamata Olives Tours</title>
        <meta property="og:title" content="Kalamata Olives Tours" />
      </Helmet>
      <div className="home-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer home-navbar-interactive"
        >
          <span className="home-logo">
            <span className="logo">kalamata olive tours</span>
            <br></br>
          </span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <Link to="/" className="home-nav12 bodySmall">
                Home
              </Link>
              <a href="#about" className="home-nav22 bodySmall">
                About
              </a>
              <a href="#tours" className="home-nav32 bodySmall">
                Tours
              </a>
              <Link to="/gallery" className="home-nav42 bodySmall">
                Gallery
              </Link>
              <a href="#contact" className="home-nav52 bodySmall">
                Contact
              </a>
            </nav>
            <div className="home-buttons">
              <a href="#tours" className="home-register buttonFilled">
                Book Now
              </a>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">OLIVE</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav121 bodySmall">Home</span>
                <span className="home-nav221 bodySmall">About</span>
                <span className="home-nav321 bodySmall">Tours</span>
                <span className="home-nav421 bodySmall">Gallery</span>
                <span className="home-nav521 bodySmall">Contact</span>
              </nav>
              <div className="home-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1 heroContainer">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              Discover the Olive Tree
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Experience the beauty of Messinia through agrotourism
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <a href="#tours" className="home-hero-button1 buttonFilled">
                Book Now
              </a>
              <a href="#about" className="home-hero-button2 buttonFlat">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="home-banner">
        <span className="home-text016 Content">
          <span className="bodyLarge">
            Green Land co-farming is a cooperative farming business with a focus
            on producing and exporting high-quality olive oil and olive-based
            products. The location in Sterna, Messinia, provides a unique and
            authentic experience for visitors, allowing them to witness the
            olive production process and immerse themselves in the rich
            tradition of the Messinian olive groves.
          </span>
          <br className="bodyLarge"></br>
          <br className="bodyLarge"></br>
          <span className="bodyLarge">
            The numerous international quality awards, including the Sial
            Innovation Award in 2023, highlight the commitment to excellence and
            innovation in the production of olive-based products. Opening the
            farm and bottling place to visitors for the past five years,
            especially from May to September, enhances the experience for guests
            who can witness firsthand the production of olives and olive oil.
            The opportunity to explore the olive groves, visit an olive farm,
            and taste local food adds a personal touch to the overall
            experience.
          </span>
          <br className="bodyLarge"></br>
          <br className="bodyLarge"></br>
          <span className="bodyLarge">
            The promise of a culminating experience with a carefully prepared
            table filled with local tastes and aromas, and the use of fresh
            ingredients from the organic vegetable garden and local sources adds
            a delightful dimension to the visit.
          </span>
          <br className="bodyLarge"></br>
          <br className="bodyLarge"></br>
          <span className="bodyLarge">
            The mention of the big wooden garden table, serving local wine, and
            traditional dishes like Gemista and Moussaka further emphasizes the
            commitment to providing an authentic and memorable culinary
            experience.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="bodyLarge"></br>
          <br className="bodyLarge"></br>
          <span className="home-text029">International quality Awards</span>
          <br className="bodyLarge"></br>
          <br className="bodyLarge"></br>
          <span className="bodyLarge">
            Olive Japan 2014,- “Gold Award’, The Los Angeles International Extra
            Virgin Olive Oil Competition, “Silver Medal ” 2014 and 2016, Great
            taste Awards 2016 and 2018, Sial Innovation Award 2023
          </span>
          <br className="bodyLarge"></br>
          <br className="bodyLarge"></br>
        </span>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Immerse Yourself in the World of Olives
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Experience the beauty and flavors of Messinia through our
                      unique agrotourism package
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                heading="Once upon an olive grove"
                subHeading="Take a walk to the olive groves of the village. Learn about the crops and harvesting. Meet farmers and see how they work, learn about the different olive varieties in the region, how extra virgin olive oil is produced, how we treat our olive groves and trees."
              ></FeatureCard>
              <FeatureCard
                heading="Olive Oil Tasting"
                subHeading="Through this process one may taste local olive oils and learn to distinguish flavours and aromas. Depending on the harvest period, one will be able to distinguish different characteristics and learn what extra virgin olive oil means."
              ></FeatureCard>
              <FeatureCard
                heading="Local Cuisine Delights"
                subHeading="Our food represents the traditional Greek gastronomy based on the most important ingredient: our Olive oil. Seize the opportunity to learn the story of the extra virgin olive oil, enjoy a tasting and learn how to introduce it in your kitchen."
              ></FeatureCard>
              <FeatureCard
                heading="Visit to the village's olive press"
                subHeading="Sterna's Agricultural Cooperative (founded 1982) is one of the largest in the region.  It employs over 20 people and allows visitors to observe olive oil production."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div id="tours" className="pricingContainer">
          <div className="home-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">Discover Messinia through Olive Trees</h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Choose the perfect agrotourism package for your journey
                </span>
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="basicPricingCard home-pricing-card">
              <div className="home-container06">
                <span className="bodySmall">
                  Enhance your agrotourism experience with our tour package
                  starting from
                </span>
              </div>
              <div className="home-container07">
                <span className="home-text057">From:  </span>
                <span className="home-text058">€</span>
                <span className="home-basic-plan-pricing">50</span>
                <span className="home-text059"> / person</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text060">✔</span>
                  <span className="bodySmall">
                    Extended guided tour of olive groves
                  </span>
                </div>
                <div className="home-container10">
                  <span className="home-text061">✔</span>
                  <span className="bodySmall">
                    Hands-on olive picking experience
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text062">✔</span>
                  <span className="bodySmall">Olive oil tasting session</span>
                </div>
                <div className="home-container12">
                  <span className="home-text063">✔</span>
                  <span className="bodySmall">Dining services included</span>
                </div>
              </div>
              <a
                href="https://b.tlintegration.com/?hotel=504026"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link buttonFilledSecondary"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner1">
        <div className="home-banner2 bannerContainer">
          <h1 className="home-banner-heading heading2">
            Immerse Yourself in the World of Olive Trees
          </h1>
          <div className="home-container13">
            <div className="home-container14">
              <div className="home-container15">
                <span className="home-text064">✔</span>
                <span className="bodySmall">Duration - 2h</span>
              </div>
              <div className="home-container16">
                <span className="home-text066">✔</span>
                <span>Availability - Up to 4 persons</span>
              </div>
              <div className="home-container17">
                <span className="home-text067">✔</span>
                <span className="bodySmall">Guided Tour - Up to 4 persons</span>
              </div>
              <div className="home-container18">
                <span className="home-text068">✔</span>
                <span className="bodySmall">Overnight Stay - Not Provided</span>
              </div>
              <div className="home-container19">
                <span className="home-text069">✔</span>
                <span className="bodySmall">
                  Active Months - May, Jun, Jul, Aug, Sep, Oct
                </span>
              </div>
              <div className="home-container20">
                <span className="home-text070">✔</span>
                <span className="bodySmall">
                  Transfer service with extra charge
                </span>
              </div>
            </div>
            <div className="home-container21">
              <div className="home-container22">
                <span className="home-text071">✔</span>
                <span>Dining Services Included</span>
              </div>
              <div className="home-container23">
                <span className="home-text073">✔</span>
                <span className="bodySmall">Toilets</span>
              </div>
              <div className="home-container24">
                <span className="home-text074">✔</span>
                <span className="bodySmall">Accessibility</span>
              </div>
              <div className="home-container25">
                <span className="home-text075">✔</span>
                <span className="bodySmall">
                  Retail shop with olive oil products
                </span>
              </div>
              <div className="home-container26">
                <span className="home-text076">✔</span>
                <span className="bodySmall">Pet Friendly</span>
              </div>
              <div className="home-container27">
                <span className="home-text077">✔</span>
                <span className="bodySmall">
                  Tour Languages - Greek, English
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container28">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text081 heading2">Common questions</h2>
              <span className="home-text082 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container29">
              <Question1
                answer="Agrotourism is a form of tourism that involves visiting agricultural areas to learn about the local farming practices and culture."
                question="What is agrotourism?"
              ></Question1>
              <Question1
                answer="Messinia is known for its high-quality olive oil production, and experiencing agrotourism centered around the olive tree allows visitors to immerse themselves in the rich history and traditions of this region."
                question="Why choose an agrotourism tour focused on the olive tree in Messinia?"
              ></Question1>
              <Question1
                answer="The agrotourism tour package includes olive tree grove visits, olive oil tasting sessions, traditional Greek cooking classes, and guided tours of local villages."
                question="What activities are included in the agrotourism tour package?"
              ></Question1>
              <Question1
                answer="No, accommodation itself isn't included in the tour package. However, there are many hotels and rentals to choose from in the area!"
                question="Is accommodation provided as part of the tour package?"
              ></Question1>
              <Question1
                answer="You can easily book your agrotourism tour in Messinia by clicking on the 'Book Now' button on our website and following the simple booking process."
                question="How can I book an agrotourism tour in Messinia?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="home-container30">
        <div className="home-container31">
          <div className="home-container32">
            <div className="home-container33">
              <Script
                html={`<div class="formbold-main-wrapper">
  <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com -->
  <div class="formbold-form-wrapper">
    <form name="contact" action="https://formbold.com/s/3npzA" method="POST" data-netlify="true">
      <div class="formbold-input-flex">
        <div>
          <label for="firstname" class="formbold-form-label">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Jane"
            class="formbold-form-input"
          />
        </div>
        <div>
          <label for="lastname" class="formbold-form-label">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Cooper"
            class="formbold-form-input"
          />
        </div>
      </div>

      <div class="formbold-input-flex">
        <div>
          <label for="email" class="formbold-form-label">Mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="jhon@mail.com"
            class="formbold-form-input"
          />
        </div>
        <div>
          <label for="phone" class="formbold-form-label">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="(319) 555-0115"
            class="formbold-form-input"
          />
        </div>
      </div>
      <div>
        <label for="message" class="formbold-form-label">Message</label>
        <textarea
          rows="6"
          name="message"
          id="message"
          placeholder="Type your message"
          class="formbold-form-input"
        ></textarea>
      </div>
      <button class="formbold-btn">Send Message</button>
    </form>
  </div>
</div>
<style>  
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Inter", sans-serif;
  }
  .formbold-main-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;
  }

  .formbold-form-wrapper {
    margin: 0 auto;
    max-width: 550px;
    width: 100%;
    background: #10170b;
  }

  .formbold-input-flex {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
  }
  .formbold-input-flex > div {
    width: 50%;
  }

  .formbold-input-radio-wrapper {
    margin-bottom: 28px;
  }
  .formbold-radio-flex {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .formbold-radio-label {
    font-size: 14px;
    line-height: 24px;
    color: ##FFFFFF;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .formbold-input-radio {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .formbold-radio-checkmark {
    position: absolute;
    top: -1px;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #ffffff;
    border: 1px solid #dde3ec;
    border-radius: 50%;
  }
  .formbold-radio-label
    .formbold-input-radio:checked
    ~ .formbold-radio-checkmark {
    background-color: #6a64f1;
  }
  .formbold-radio-checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .formbold-radio-label
    .formbold-input-radio:checked
    ~ .formbold-radio-checkmark:after {
    display: block;
  }

  .formbold-radio-label .formbold-radio-checkmark:after {
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffffff;
    transform: translate(-50%, -50%);
  }

  .formbold-form-input {
    width: 100%;
    padding: 13px 22px;
    border-radius: 5px;
    border: 1px solid #dde3ec;
    background: #ffffff;
    font-weight: 500;
    font-size: 16px;
    color: #07074d;
    outline: none;
    resize: none;
  }
  .formbold-form-input::placeholder {
    color: #536387;
  }
  .formbold-form-input:focus {
    border-color: #6a64f1;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }
  .formbold-form-label {
    color: #FFFFFF;
    font-size: 14px;
    line-height: 24px;
    display: block;
    margin-bottom: 10px;
  }

  .formbold-btn {
    text-align: center;
    width: 100%;
    font-size: 16px;
    border-radius: 5px;
    padding: 14px 25px;
    border: none;
    font-weight: 500;
    background-color: #768350;
    color: white;
    cursor: pointer;
    margin-top: 25px;
  }
  .formbold-btn:hover {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }
</style>
`}
              ></Script>
            </div>
          </div>
        </div>
        <div className="home-testimonial-card">
          <div className="home-testimonial">
            <span className="home-text085">
              <span className="Heading">Contact us</span>
              <br></br>
              <br></br>
              <span>Sterna Messinia 24015 Greece</span>
              <br></br>
              <br></br>
              <span>Phone: +306936849530</span>
              <br></br>
              <span>             +306976690656</span>
              <br className="home-text095"></br>
              <br></br>
              <span>E-mail: info@greenlandproducts.gr</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container34">
            <span className="logo">kalamata olives tours</span>
            <nav className="home-nav1">
              <Link to="/" className="home-nav122 bodySmall">
                Home
              </Link>
              <a href="#about" className="home-nav222 bodySmall">
                About
              </a>
              <a href="#tours" className="home-nav322 bodySmall">
                Tours
              </a>
              <Link to="/gallery" className="home-nav422 bodySmall">
                Gallery
              </Link>
              <a href="#contact" className="home-nav522 bodySmall">
                Contact
              </a>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container35">
            <span className="home-text099">
              <span className="bodySmall">
                © 2024
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://greenlandproducts.gr/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                Greenland Co-Farming
              </a>
              <span className="bodySmall">, All Rights Reserved.</span>
            </span>
            <div className="home-icon-group1">
              <a
                href="https://www.instagram.com/greenland.products/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon10 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/GreenLandProducts"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon12 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
