import React from "react";

const Slider = () => {

  
  return (
    <div className="slider-wrapper d-flex justify-content-around align-items-center flex-wrap">
     
      <div className='course-box p-4'>
         <div className='course-detail mb-3 d-flex justify-content-between'>
            <span className='course-name'>Dhiraj Saxsena</span>
            <span className='course-date'>14 Sep, 2022</span>
          </div>
          <div className='courses-des'>
            <span>Courses Enrolled(6)</span>
            <ul className='course-list'>
              <li className='course'>UI/UX</li>
              <li className='course'>Photoshop</li>
              <li className='course'>Illustrator</li>
              <li className='course'>Python</li>
              <li className='course'>MERN</li>
              <li className='course'>Java</li>
            </ul>
          </div>
          <div className='course-referral'>Referral amount <span className='referral-amount'>₹185</span></div>
       
      </div>

      <div className='course-box p-4'>
         <div className='course-detail mb-3 d-flex justify-content-between'>
            <span className='course-name'>Subhash Mishra</span>
            <span className='course-date'>15 Sep, 2022</span>
          </div>
          <div className='courses-des'>
            <span>Courses Enrolled(23)</span>
            <ul className='course-list'>
              <li className='course'>UI/UX</li>
              <li className='course'>Photoshop</li>
              <li className='course'>Illustrator</li>
              <li className='course'>Python</li>
              <li className='course'>MERN</li>
              <li className='course'>Java</li>
              <li className='course'>C++</li>
            </ul>
          </div>
          <div className='course-referral'>Referral amount <span className='referral-amount'>₹485</span></div>
        
      </div>
 
      <div className='course-box p-4'>
         <div className='course-detail mb-3 d-flex justify-content-between'>
            <span className='course-name'>Dhiraj Saxsena</span>
            <span className='course-date'>14 Sep, 2022</span>
          </div>
          <div className='courses-des'>
            <span>Courses Enrolled(6)</span>
            <ul className='course-list'>
              <li className='course'>UI/UX</li>
              <li className='course'>Photoshop</li>
              <li className='course'>Illustrator</li>
              <li className='course'>Python</li>
              <li className='course'>MERN</li>
              <li className='course'>Java</li>
            </ul>
          </div>
          <div className='course-referral'>Referral amount <span className='referral-amount'>₹185</span></div>
        
        </div>
    </div>
  );
};

export default Slider;