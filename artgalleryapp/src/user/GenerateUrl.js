import axios from 'axios';
import React from 'react'

const GenerateUrl = async  (img) => {
        const data0 = new FormData();
        data0.append("file",img);
        data0.append("upload_preset", "new_image_preset");
        data0.append("cloud_name","dufxfclza");
    
        try {
          let api = `https://api.cloudinary.com/v1_1/dufxfclza/image/upload`;
          const res = await axios.post(api,data0);
          const { secure_url} = res.data;
          console.log(secure_url);
          return secure_url;
          
        } catch (error) {
          console.log(error);
          return '';
    }
  }

export default GenerateUrl;
