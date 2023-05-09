import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            console.log(res);
            throw Error(`${res.statusText}`);
          }
          return res.json();
        })
        .then((data) => {
          setBlog(data);
          setLoading(false);
          setError(null);
        })
        .catch((e) => {
          setLoading(false);
          setError(e.message);
        });
    }, 500);
    // return ()=>{
    //   console.log("Use Fetch run")
    // }
  }, [url]);
  return { blog, loading, error };
};
export default useFetch;
