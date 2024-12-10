import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Buy.css";
import axios from "axios";
import { startLoading, stopLoading } from "../auth/Loading";
import toast from "react-hot-toast";
import { URL } from "../App";

const Buy = () => {
  const param = useParams();
  const [formData, setFormData] = useState({
    street: "",
    town: "",
    pincode: "",
    doorNo: "",
    state: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    startLoading();
    const mydata = {...formData, user_id : localStorage.getItem("user"), art_id:param.id};
    mydata['pincode'] = parseInt(mydata['pincode']);
    console.log(mydata);
    try{
      const response = await axios.post(`${URL}/booking/add`, mydata);
      console.log(response);
      stopLoading();
      toast.success("Sucessfully Booked");
     navigate("/booking");
    }
    catch(error){
      toast.error("unstable wifi connection")
      console.log(error);
      
    }
    stopLoading();
  };

  return (
    <div className="margin-e">
    <div className="form-container">
      <h1 className="form-title">Booking Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="state">State</label>
          <input
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
          <label className="form-label" htmlFor="town">Town</label>
          <input
            type="text"
            id="town"
            name="town"
            value={formData.town}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="pincode">Pincode</label>
          <input
            type="number"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="doorNo">Door Number</label>
          <input
            type="text"
            id="doorNo"
            name="doorNo"
            value={formData.doorNo}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Payment Method</label>
          <div className="form-radio-group">
            <label className="form-radio">
              <input
                type="radio"
                name="paymentMethod"
                value="cash_on_delivery"
                checked={formData.paymentMethod === "cash_on_delivery"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
            <label className="form-radio m-4">
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={formData.paymentMethod === "upi"}
                onChange={handleChange}
              />
              UPI Payment
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-warning">
        Place Order
        </button>
      </form>
    </div>
    </div>
  );
};

export default Buy;
