import React from 'react'
import '../css/contact.css'

const Contact = () => {
  return (
    <footer class="myfooter">
     <div class="mycontainer">
      <div class="myrow">
        <div class="myfooter-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="myfooter-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div class="myfooter-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </div>
        <div class="myfooter-col">
        <h4>follow us</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Linked in</a></li>
            <li><a href="#">FaceBook</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
     </div>
  </footer>
  );
}

export default Contact
