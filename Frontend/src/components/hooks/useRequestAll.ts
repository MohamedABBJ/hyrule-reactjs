import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useState } from "react";

interface DataValues{
  dataValue:{data:[]}
}

const useRequestAll = () =>{
  const [data, setData] = useState(<DataValues>({}));
  const [loading, setLoading] = useState(<boolean>(false));

  useEffect(() => {
    const fetchData = async () => {
      try {
        //TODO: Add type to this request, data & dataVal are any
        const {data:obtainedData} : AxiosResponse<{data:[]}> = await axios.get('https://botw-compendium.herokuapp.com/api/v3/compendium/all');
        setData({dataValue:{data:obtainedData.data}});
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

