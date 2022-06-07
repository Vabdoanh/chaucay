const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "123456789",
  database: "chaucay",
});

db.connect();
app.post("/create", (req, res) => {
  const maphieu = req.body.maphieu;
  const mahang = req.body.mahang;
  const ngaynhap = req.body.ngaynhap;
  const soluongnhap = req.body.soluongnhap;
  const nhacungcap = req.body.nhacungcap;
  const ghichu =req.body.ghichu;
 
  db.query(
    "INSERT INTO phieunhap (mahang, maphieu, ngaynhap, soluongnhap, nhacungcap, ghichu) VALUES (?,?,?,?,?,?)",
    [maphieu, mahang, ngaynhap, soluongnhap, nhacungcap, ghichu],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/phieunhap", (req, res) => {
  db.query("SELECT * FROM phieunhap", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
