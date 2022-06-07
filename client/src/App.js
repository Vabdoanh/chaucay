
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

        {chaucayList.map((val, key) => {
          return (
            <div className="chaucay1">
              <div>
                <h3>Mã phiếu: {val.maphieu}</h3>
                <h3>Mã hàng: {val.mahang}</h3>
                <h3>Ngày nhập: {val.ngaynhap}</h3>
                <h3>Số lượng nhập: {val.soluongnhap}</h3>
                <h3>Nhà cung cấp: {val.nhacungcap}</h3>
                <h3>Ghi chú: {val.ghichu}</h3>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
