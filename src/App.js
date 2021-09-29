import './App.css';
import 'antd/dist/antd.css';  
import React , {useState, useEffect} from 'react';
import { Pagination } from 'antd';

const App = () => {
  const [page, setPage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
        fetch(`https://api.unsplash.com/search/collections?page=${page}&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [page]);

  return (
    <>
    <Pagination page={page} onChange={setPage} total={50} style = {{margin: 'auto', width: 'fit-content'}} />
    <div style = {{display: 'flex', flexWrap: 'wrap'}}>
      { data.map(item => <img src={item.preview_photos[0].urls.small} alt="img" style={{width: '400px', margin: '20px'}} />)}
      </div>
    </>
  );
};

export default App;