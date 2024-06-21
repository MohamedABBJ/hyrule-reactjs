import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

interface DataValues{
  dataValue:{}
}

const useRequestAll = () =>{
  const [data, setData] = useState(<DataValues>({dataValue:{}}));
  const [loading, setLoading] = useState(<boolean>(false));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: dataVal} = await axios.get('https://botw-compendium.herokuapp.com/api/v3/compendium/all');
        setData({dataValue:dataVal});
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
}

export default useRequestAll

