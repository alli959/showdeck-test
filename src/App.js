import React, { useState, useEffect } from 'react';
import UserPage from './components/UserPage';

function App() {
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      < UserPage />
    </div>
  );
}

export default App;