import React from 'react';

export default Hoc = (Components , data) => {
  return (
    class extends React.Component{
        render(){
            
            return(
                 <Components/>
            )
        }
    }
  )
}