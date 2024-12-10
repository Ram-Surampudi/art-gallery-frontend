import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { startLoading, stopLoading } from '../auth/Loading';
import toast from 'react-hot-toast';
import { URL } from '../App';

const CancelOrder = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const CancelMyOrder = async (e) =>{
          e.preventDefault();
          startLoading();
          try {
            let response = await axios.delete(`${URL}/booking/cancel/`+params.id);
            console.log(response);
            stopLoading();
            toast.success("Sucessfully Cancelled");
            navigate("/booking");
          }
          catch(error){
            toast.error("unstable internet connection")
            console.log(error); 
          }
          stopLoading();
      }


  return (
    <div className="margin-e">
    <div className="form-container">
      <h3 className="form-title">Order Cancellation</h3>
      <form className="form" onSubmit={CancelMyOrder}>
        <div className="form-group">
          <label className="form-label" htmlFor="state">Reasons for Cancelling this order *</label>
          <textarea
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="town">feed back</label>
          <input
            type="text"
            id="town"
            name="town"
            value={formData.town}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-danger">
        Cancel Order
        </button>
      </form>
    </div>
    </div>
  )
}

export default CancelOrder
