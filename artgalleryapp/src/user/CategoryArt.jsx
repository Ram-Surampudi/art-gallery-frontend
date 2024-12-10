import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { URL } from '../App';

const CategoryArt = () => {

  let param = useParams();

  const [arr, setarr] = useState([]);

  const navigate = useNavigate();
  const [search, setSearch] = useState([]);

      useEffect(()=>{
          renderArts();
      },[]);

  const renderArts = async () =>{
    try{
      var response = await axios.get(`${URL}/art/category/` +param.cat);
      setarr(response.data);
    }
    catch(error){
      console.log(error);
    }
  }


  return (
    <div style={{marginTop:"10rem", marginBottom:"5rem"}}>
        <h3 style={{textAlign:'center', color:'#000'}}>{param.cat.toUpperCase()}</h3>
 <div className='search-div'>
      <input type="search" name="search" style={{width:'30%'}} className="addhotel-input login-input" placeholder='Artist or Art Name' onChange={(e)=>setSearch(e.target.value)}/>
      <input type="button" value="Search" className='addhotel-input save' />
      </div>
      <div className='wrapdivcontainer'>
      <div className='arts-shop-sub-div'>
      {arr?.filter(item => {return search === '' ? item : item.artistName.toLowerCase().includes(search) || item.name.toLowerCase().includes(search) }).map(item=>(
                <div class='art-div div-cat-op'>
                <img class='arts-image' src={item?.url} alt='not found url' onClick={()=>navigate('/art/'+item.id)} />
                      <div class="cat-img-black"></div>
                    <h3 style={{"text-decoration" : "none"}} class='artist-name-h1'>{item?.name}</h3>
                    <h6 style={{"text-decoration" : "none"}} class='artist-name-h1'>{item?.artistName}</h6>
                    </div>
      ))}
      </div>
      </div>
    </div>
  )
}

export default CategoryArt
