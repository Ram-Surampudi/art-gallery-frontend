import React, { useEffect, useState } from 'react'
import '../css/AdminHome.css';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { URL } from '../App';

const Category = () => {

  
  const navigate = useNavigate();
  
  const [search, setSearch] = useState([]);
  
  const [categorys, setcategory] = useState([]);

  useEffect(()=>{
    renderCategories();

  //   setcategory([
  //     {
  //         "id": "24698858-f7d9-45d9-a57f-d7e26bfe26e1",
  //         "url": "https://res.cloudinary.com/dufxfclza/image/upload/v1727868852/images/d2u4ycn7wl3diegqhjbh.jpg",
  //         "category": "oil painting"
  //     },
  //     {
  //         "id": "618068f5-f90c-436f-aeb2-51b0690e36cf",
  //         "url": "https://res.cloudinary.com/dufxfclza/image/upload/v1727867774/images/q7nqp6y3lcdnwynyl4xn.jpg",
  //         "category": "spray paint"
  //     },
  //     {
  //         "id": "cf9f6fc0-8aa7-4421-82fd-82853feb5808",
  //         "url": "https://res.cloudinary.com/dufxfclza/image/upload/v1727868944/images/ri0w4dzrlfdvhjmk67qu.jpg",
  //         "category": "Acrylic Painting"
  //     }
  // ]);

},[]);

  const renderCategories = async () =>{
    try{
      var response = await axios.get(`${URL}/category`);
      setcategory(response.data);
      console.log(response.data);
      
    }
    catch(error){
      console.log(error);
    }
  }
   
  return (
    <div className='arts-shop-main-div'>
    <div className='search-div'>
    <input type="search" name="search" style={{width:'30%'}} className="addhotel-input login-input" placeholder='Category Name' onChange={(e)=>setSearch(e.target.value)}/>
    <input type="button" value="Search" className='addhotel-input save' />
    </div>
    <div className='category-container-low'>
      {categorys?.filter(item => {return search === '' ? item : item.category.toLowerCase().includes(search)}).map(item=>(
        <div class='art-div div-cat-op' onClick={()=> navigate('/category/' + item?.category)} >
        <img class='arts-image' src={item?.url} alt='not found url' />
              <div class="cat-img-black"></div>
            <h3 style={{"text-decoration" : "none"}} class='artist-name-h1'>{item?.category}</h3>
            </div>
      ))}
      </div>
  </div>
  )
}

export default Category;
