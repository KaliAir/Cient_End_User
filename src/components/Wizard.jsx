import React, { useEffect } from 'react';
import '../FlyingWizard.css';

const FlyingWizard = () => {
  useEffect(() => {
    const wizard = document.querySelector('.wizard');

    wizard.addEventListener('animationend', () => {
      wizard.style.animation = 'none';
    });

    wizard.style.animation = 'fly-wizard 5s linear infinite';
  }, []);

  return (
    <div className="flying-wizard">
      <img className="wizard" src="wizard.png" alt="Flying wizard" />
    </div>
  );
};

export default FlyingWizard;