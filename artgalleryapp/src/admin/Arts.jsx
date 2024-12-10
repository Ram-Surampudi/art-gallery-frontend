import React, { useContext, useEffect, useState } from 'react'
import { Arr, URL } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { startLoading, stopLoading } from '../auth/Loading';

const Arts = () => {

    const [navItems,setArr] = useContext(Arr);
    const [arr, setarr] = useState([]);
    const [search, setSearch] = useState('');
    const renderArts = async () =>{
      startLoading();
        try{
          var response = await axios.get(`${URL}/art`);
          setarr(response.data);
        }
        catch(error){
          // toast.error(error.response.data.message);
          if(error.status != 404);
            // navigate('/verify/' + error.response.data.id);
        }
        stopLoading();
      }
      const nagivate = useNavigate();

      useEffect(()=>{
        setArr(['admin','arts' , 'addart', 'addcategory', 'logout']);
        // renderCategories();
        renderArts();
    },[]);




  return (
    <div style={{marginTop:"9rem"}}>
      <div className='search-div'>
      <input type="search" name="search" style={{width:'30%'}} className="addhotel-input login-input" placeholder='Artist Name' onChange={e=>setSearch(e.target.value)} />
      <input type="button" value="Search" className='addhotel-input save' />
      </div>
      <div className='wrapdivcontainer'>
      <div className='arts-shop-sub-div'>
        {arr?.filter(item => {return search === '' ? item : item?.artistName.toLowerCase().includes(search)}).map(item=>(
        <div class='art-div div-cat-op'>
        <img class='arts-image' src={item?.url} alt='not found url' onClick={()=>nagivate('/addart/'+ encodeURIComponent(JSON.stringify(item)))} />
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

export default Arts
