import React from 'react';

const Posts = ({ posts, loading }) => {
  const columns = posts[0] && Object.keys(posts[0]);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const mytable = {
    bordercollapse: 'collapse',
    margin: '25px 0',
    fontsize: '0.9em',
    fontfamily: 'sans-serif',
    minwidth: '400px',
    boxshadow: '0 0 20px rgba(0, 0, 0, 0.15)',
  }

  return (
    <div className='list-group mb-2'>

      <table cellPadding={0} cellSpacing={0} style={mytable}>
         <thead>
            <tr >
                <th>STT</th>
                <th>Mã Hàng</th>
                <th>Tên Hàng</th>
                <th>Mã Nhóm Hàng</th>
                <th>Đơn Vị Tính</th>
            </tr>
         </thead>
         <tbody style={{borderbottom: '1px solid #dddddd'}}>
            {posts.map(row => <tr>
                {columns.map(column => <td style={{padding: '5px 10px'}}>
                    {row[column]}
                </td>)}
            </tr>)}
         </tbody>
       </table>
    </div>
  );
};

export default Posts;
