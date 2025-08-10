// import React from "react";
// import Title from "../Components/Title";
// import { assets } from "../assets/assets";
// import NewsLetterBox from "../Components/NewsLetterBox";
// import './About.css';

// const About = () => {
//   return (
//     <div className="about-wrapper">
//       <div className="about-title">
//         <Title text1={'ABOUT'} text2={'US'} />
//       </div>

//       <div className="about-section">
//         <img className="about-img" src={assets.about_icon} alt="About" />
//         <div className="about-text">
//           <p>
//             Forever was born out of a passion for innovation and discover, explore,
//             and purchase a wide range of products from the comfort of their homes.
//           </p>
//           <p>
//             Since our inception we've worked tirelessly to curate a diverse selection
//             of high-quality products that cater to every taste and preference. From fashion
//             and beauty to electronics and home essentials, we offer an extensive collection
//             sourced from trusted brands and suppliers.
//           </p>
//           <b className="about-heading">Our Mission</b>
//           <p>
//             Our mission at Forever is to empower customers with choice, convenience,
//             and confidence. We’re dedicated to providing a seamless shopping experience
//             that exceeds expectations, from browsing and ordering to delivery and beyond.
//           </p>
//         </div>
//       </div>

//       <div className="choose-title">
//         <Title text1={'WHY'} text2={'CHOOSE US'} />
//       </div>

//       <div className="choose-section">
//         <div className="choose-box">
//           <b>Quality Assurance:</b>
//           <p className="gray-text">
//             We meticulously select and vet each product to ensure it meets our stringent quality standards.
//           </p>
//         </div>

//         <div className="choose-box">
//           <b>Convenience:</b>
//           <p className="gray-text">
//             With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
//           </p>
//         </div>

//         <div className="choose-box">
//           <b>Exceptional Customer Service:</b>
//           <p className="gray-text">
//             Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.
//           </p>
//         </div>
//       </div>

//       <NewsLetterBox />
//     </div>
//   );
// };

// export default About;


// final updated version


import React from 'react';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../Components/NewsletterBox';
import './About.css';

const About = () => {
  return (
    <div className="about-container">

      <div className="about-header">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="about-content">
        <img className="about-image" src={assets.about_icon} alt="About us" />
        <div className="about-text">
          <p>
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <b className="about-subheading">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className="choose-title">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="choose-boxes">
        <div className="choose-box">
          <b>Quality Assurance:</b>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="choose-box">
          <b>Convenience:</b>
          <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className="choose-box">
          <b>Exceptional Customer Service:</b>
          <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;



