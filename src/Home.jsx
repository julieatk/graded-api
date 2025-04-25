import React, { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {


  useEffect(() => {
    // get color data from API
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
      .then(res => {
        // Set  company info
        console.log(res);

      })


      .catch((err) => {
        console.log(err);
      })
  }, [])
  
}

export default Home;


'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
