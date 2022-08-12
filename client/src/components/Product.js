import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import axios from 'axios';

const Product = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [q ,setQ] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/hanghoa');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  function search(rows) {
    return rows.filter(row => row.mahang.toLowerCase().indexOf(q) > -1 || row.tenhang.toLowerCase().indexOf(q) > -1 )
  }
  return (
    <div className='container mt-0' >
      <h1 className='text-primary mb-3'>Kho sản phẩm</h1>
      <div style={{margintop:'25px'}}> 
            <input type = "text" placeholder='Search...' value = {q} onChange={(e) => setQ(e.target.value)} style={{float:'right'}} />
      </div>
      <br/><br/><br/>
      <div className='body' style={{padding:"3px", boder:"box"}}>
      <Posts posts={search(currentPosts)} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      </div>
    </div>
  );
};

export default Product;
