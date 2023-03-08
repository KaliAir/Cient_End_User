import React from 'react';
import '../AboutPage.css';

function AboutPage() {
  return (
    <div className='about-container'>
      <div className="about-page">
        <h1 className='h1'>About Us</h1>
        <p className='p'>
          JH Pro Builders is a construction firm based in Toledo City, Cebu, 
          specializing in delivering high-quality construction services to our clients.
        </p>
        <h2 className='h2'>Our Mission</h2>
        <p className='p'>
          Our mission is to provide exceptional construction services that exceed our clients' expectations 
          through our commitment to quality, safety, and innovation.
        </p>
        <h2 className='h2'>Our Projects</h2>
        <p className='p'>
          We take pride in our work and showcase our completed projects on our website. 
          Check out our portfolio to see some of our finished projects and designs that have gained 
          our clients' attention and satisfaction.
        </p>
        <h2 className='h2'>Contact Us</h2>
        <p className='p'>
          If you're interested in our services, please don't hesitate to contact us. 
          You can reach us at <a href="tel:+639266366905">09266366905</a> or send us an email at <a href="mailto:jhprobuilders@gmail.com">jhprobuilders@gmail.com</a>.
        </p>
        <p className='p'>
          Thank you for considering JH Pro Builders for your construction needs. 
          We look forward to working with you and bringing your construction visions to life.
        </p>
      </div>
    </div>
    
  );
}

export default AboutPage;
