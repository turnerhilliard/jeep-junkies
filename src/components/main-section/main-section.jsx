import React from 'react';
import { withRouter } from 'react-router-dom';
import jeep7 from '../../assets/jeep7.jpg';
import './main-section.styles.scss';

const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={jeep7} alt='jeep 7'/>
        </div>
        <div className='ms-m-description'>
          <h2>Affordable OEM parts.</h2>
          <p>
          At Jeep-Junkies we specialize in used Jeep Wrangler parts across a large selection of years and models.
          Whether you're looking for a hood prop, or an enire frame or engine; we have you covered.
          Located in Savannah Georgia, we offer shipping as well as local-pickup at our store.
          Thank you for shoppping with us today, please contact us for questions or help placing an order.
          </p>
          <button className='button is-black' id='shop-now' onClick={()=> history.push('/product/6')}>
            Buy a Hood
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MainSection);