import "../App.css";
import { useState, useEffect } from "react";
import Axios from "axios";


function FormInput() {
  const [maphieu, setMaphieu] = useState("");
  const [mahang, setMahang] = useState("");
  const [ngaynhap, setNgaynhap] = useState("");
  const [soluongnhap, setSoluongnhap] = useState("");
  const [nhacungcap, setNhacungcap] = useState("");
  const [ghichu, setGhichu] = useState("")
  const [chaucayList, setChaucayList] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [Posts, setPosts] = useState([]);
  const [Posts1, setPosts1] = useState([]);

  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
 }



  useEffect(() => {
    const fetchPosts = async () => {
      const res = await Axios.get('http://localhost:3001/hanghoa');
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await Axios.get('http://localhost:3001/nhacungcap');
      setPosts1(res.data);
    };

    fetchPosts();
  }, []);



  const addChaucay = () => {
      Axios.post("http://localhost:3001/create", {
        maphieu: maphieu,
        mahang: mahang,
        ngaynhap: ngaynhap,
        soluongnhap: soluongnhap,
        nhacungcap: nhacungcap,
        ghichu: ghichu,
      }).then(() => {
        setChaucayList([
          ...chaucayList,
          {
            maphieu: maphieu,
            mahang: mahang,
            ngaynhap: ngaynhap,
            soluongnhap: soluongnhap,
            nhaucungcap: nhacungcap,
            ghichu: ghichu,
          },
        ]);
      });
  };
  const getChaucay = () => {
    Axios.get("http://localhost:3001/phieunhap").then((response) => {
      setChaucayList(response.data);
    });
  };
  const handleOnClick = async () => {
    await getChaucay();
    setShowTable(!showTable);
  }
  return (
    <div className="App">
      <div className="information">
        <label>Mã phiếu</label>
        <input
          type="text"
          onChange={(event) => {
            setMaphieu(event.target.value);
          }}
        />

        <label>Mã hàng </label>
        <input
          type="text"
          onChange={(event) => {
            setMahang(event.target.value);
          }} list="data"
        />
        <datalist id="data">
          {Posts.map(result => {
            return (
              <option>{result.mahang}</option>
            )
          })}
        </datalist>
        <label>Ngày nhập </label>
        <input
          type="date"
          onChange={(event) => {
            setNgaynhap(event.target.value);
          }}
        />
        <label>Số lượng nhập:</label>
        <input
          type="text"
          onChange={(event) => {
            setSoluongnhap(event.target.value);
          }}
        />
        <label>Nhà cung cấp </label>
        <input
          type="text"
          onChange={(event) => {
            setNhacungcap(event.target.value);
          }} list="data1"
        />
        <datalist id="data1">
          {Posts1.map(result => {
            return (
              <option>{result.nhacungcap}</option>
            )
          })}
        </datalist>
        <label>Ghi chú </label>
        <input
          type="text"
          onChange={(event) => {
            setGhichu(event.target.value);
          }}
        />
       <form onSubmit={handleSubmit}>
        <button type="submit" onClick={addChaucay} style={{marginTop:'20px'}}>Nhập sản phẩm</button>
      </form>
      {submitting &&
       <div style={{color:'Blue'}}>Nhập hàng</div>
     }
     

      </div>
      <div className="chaucay" >
        <button onClick={handleOnClick} style={{marginTop:'20px'}}>{showTable == true ? "Ẩn phiếu nhập" : "Hiển thị phiếu nhập"}</button>
        {
          showTable == true ? (
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã Phiếu</th>
                  <th>Mã Hàng</th>
                  <th>Ngày Nhập</th>
                  <th>Số Lượng Nhập</th>
                  <th>Nhà cung cấp</th>
                  <th>Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                {chaucayList.map((val, key) => {
                  return (
                    <tr>
                      <td> {key + 1} </td>
                      <td> {val.maphieu} </td>
                      <td> {val.mahang} </td>
                      <td> {val.ngaynhap} </td>
                      <td> {val.soluongnhap} </td>
                      <td> {val.nhacungcap} </td>
                      <td> {val.ghichu} </td>

                    </tr>
                  );
                }
                )}
              </tbody>
            </table>
          ) : <div></div>
        }

      </div>
    </div>
  );
}

export default FormInput;

