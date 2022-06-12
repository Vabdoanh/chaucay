
import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [maphieu, setMaphieu] = useState("");
  const [mahang, setMahang] = useState("");
  const [ngaynhap, setNgaynhap] = useState("");
  const [soluongnhap, setSoluongnhap] = useState("");
  const [nhacungcap, setNhacungcap] = useState("");
  const [ghichu, setGhichu]         = useState("")

  const [chaucayList, setChaucayList] = useState([]);

  

  const addChaucay = () => {
    Axios.post("http://localhost:3001/create", {
       maphieu : maphieu,
       mahang : mahang,
       ngaynhap : ngaynhap,
       soluongnhap : soluongnhap,
       nhacungcap : nhacungcap,
       ghichu :ghichu,
    }).then(() => {
      setChaucayList([
        ...chaucayList,
        {
          maphieu : maphieu,
          mahang : mahang,
          ngaynhap : ngaynhap,
          soluongnhap : soluongnhap,
          nhaucungcap : nhacungcap,
          ghichu :ghichu,
        },
      ]);
    });
  };
  const getChaucay = () => {
    Axios.get("http://localhost:3001/phieunhap").then((response) => {
      setChaucayList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Mã Phiếu:</label>
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
          }}
        />
        <label>Ngày nhập </label>
        <input
          type="text"
          onChange={(event) => {
            setSoluongnhap(event.target.value);
          }}
        />
        <label>Số lượng nhập:</label>
        <input
          type="text"
          onChange={(event) => {
            setNgaynhap(event.target.value);
          }}
        />
        <label>Nhà cung cấp </label>
        <input
          type="text"
          onChange={(event) => {
            setNhacungcap(event.target.value);
          }}
        />
        <label>Ghi chú </label>
        <input
          type="text"
          onChange={(event) => {
            setGhichu(event.target.value);
          }}
        />
        <button onClick={addChaucay}>Thêm </button>
        
      </div>
      <div className="chaucay">
        <button onClick={getChaucay}>Hiển thị Phiếu nhập </button>
          <table className="table">
          <thead>
            <tr>
              <th>Ma phieu</th>
              <th>Ma hang</th>
              <th>Ngay nhap</th>
              <th>So luong nhap</th>
              <th>Nha cung cap</th>
              <th>Ghi chu</th>
            </tr>
          </thead>
          <tbody>
             {chaucayList.map((val, key) => {
               return (
                 <tr>
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
      </div>
    </div>
  );
}

export default App;
