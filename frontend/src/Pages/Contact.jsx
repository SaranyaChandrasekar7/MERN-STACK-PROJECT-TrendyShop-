// import React from "react";
// import Title from "../Components/Title";
// import { assets } from "../assets/assets";
// import NewsLetterBox from "../Components/NewsLetterBox";
// import './Contact.css';

// const Contact = () => {
//   return (
//     <div className="contact-wrapper">
//       <div className="contact-title">
//         <Title text1={'CONTACT'} text2={'US'} />
//       </div>

//       <div className="contact-section">
//         <img className="contact-image" src={assets.contact_icon} alt="contact" />
//         <div className="contact-text">
//           <p className="contact-heading">Our Store</p>
//           <p className="contact-detail">
//             54709 Willms Station, Suite 350, Washington
//           </p>
//           <p className="contact-detail">
//             Tel: (91) 902231111 | Email: admin@Trendy.com
//           </p>
//           <p className="contact-heading">Careers at Trendy</p>
//           <p className="contact-detail">
//             Learn more about our teams and job openings.
//           </p>
//           <button className="explore-button">Explore Jobs</button>
//         </div>
//       </div>

//       <NewsLetterBox />
//     </div>
//   );
// };

// export default Contact;

//Final Upated version
import React from 'react';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../Components/NewsletterBox';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-title">
        <Title text1="CONTACT" text2="US" />
      </div>

      <div className="contact-content">
        <img className="contact-image" src={assets.contact_icon} alt="Contact" />
        <div className="contact-details">
          <p className="contact-heading">Our Store</p>
          <p className="contact-text">
            533786 flower StatioN <br /> 12/3 trendy street, Chennai
          </p>
          <p className="contact-text">
            Tel: 96553542525444 <br /> Email: admin@Trendy.com
          </p>
          <p className="contact-heading">Careers at Trendy</p>
          <p className="contact-text">Learn more about our teams and job openings.</p>
          <button className="contact-button">Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
