import { useState, useEffect } from 'react';

const UseJsonFetch = (url = '', options = null) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(null);
  const [error, seterror] = useState(null);

  const handlerGetData = async () => {
    if (!loading) {
      setloading(true);
      
      fetch(url)
      .then(response => response.json())
      .then(function(data){
        setdata(data)
        setloading(false);
        })
      .catch(function(error){
        seterror(error)
        setloading(false);
        });
    }
  };

  useEffect(() => {
    handlerGetData();
  }, []);

  return [{ data, loading, error }];
};

export default UseJsonFetch;