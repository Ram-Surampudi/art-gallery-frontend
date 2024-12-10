import React from 'react'
import '../css/loading.css';

export const startLoading = ()=>{
  document.getElementById("myloadingelement").style.display = "flex";
}
export const stopLoading = () =>{
  document.getElementById("myloadingelement").style.display = "none";
}

const Loading = () => {
  return (
  <div className='loading' id="myloadingelement">
  <div className='loading-animation'></div>
</div>
  );
}

export default Loading;
