import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useRequestAll = () =>{
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: dataval} = await axios.get('https://botw-compendium.herokuapp.com/api/v3/compendium/all');
        setData(dataval);
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

