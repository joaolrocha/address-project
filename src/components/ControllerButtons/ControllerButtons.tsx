import { useState } from 'react';
import './_controller.scss';

const ControllerButtons = () => {
  const [selected, setSelected] = useState('Shipping Address');

  return (
    <div className="controller-container">
      <div className='controller-container-wrapper'>
      <button
        className={selected === 'Shipping Address' ? 'selected' : ''}
        onClick={() => setSelected('Shipping Address')}
      >
        Shipping Address
      </button>
      <button
        className={selected === 'Billing Address' ? 'selected' : ''}
        onClick={() => setSelected('Billing Address')}
      >
        Billing Address
      </button>
      </div>
    </div>
  );
}

export default ControllerButtons;
