import axios from "axios";

export const removeFromCart = async(id) =>{
    try{

      var data = {art_id : id , user_id : localStorage.getItem('user')};
      console.log(data);
      
      var response = await axios.post('http://localhost:8081/user/deleteFromcart',data);
      console.log(response.data);
    }
    catch(error){
      console.log(error);
    }
}
