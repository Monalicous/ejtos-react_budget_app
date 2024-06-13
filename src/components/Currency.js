import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
  const {dispatch } = useContext(AppContext);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
    <div className='alert alert-primary'>
      <label for="currency">Currency</label> {
      <select name="Currency" id='Currency' onChange={event => changeCurrency(event.target.value)}>
        <option value="£">Pound(£)</option>
        <option value="₹">Rupees(₹)</option>
        <option value="€">Euro(€)</option>
        <option value="R">Rand(R)</option>
      </select>	
      }
    </div>
    );
};
export default Currency;