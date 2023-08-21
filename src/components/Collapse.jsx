import React, { useState } from 'react';
import '../style/Collapse.scss';
import ArrowTop from '../assets/arrow-up.png';

function Collapse({ title, values }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='collapse-container'>
      <div className={`collapse ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <div className='collapse-title'>
          <h4 className="title-collapse">{title}</h4>
          <img src={ArrowTop} alt="Arrow" className={`arrow-img ${isCollapsed ? 'up' : 'down'}`} onClick={toggleCollapse}/>
        </div>
        <div className={`collapse-content ${isCollapsed ? 'closed' : 'open'} ${isCollapsed ? '' : 'auto-height'}`}>
          {typeof values === 'string' ? (
            <p>{values}</p>
          ) : (
            values.map((i, index) => (
              <p className='li-equipments' key={index}>{i}</p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
