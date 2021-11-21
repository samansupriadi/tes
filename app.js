const db = require('./db')
const express = require('express')
const { json } = require('express')
const app = express()
const port = 3000


//midleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))


//routes
//list barang
app.get("/barang", (req,res)=>{
  //console.log("hi data")
  db.query(`
    select * from "Barangs"
  `, (err,result)=>{
        if(err){
            res.status(500).json(err)
        }else{
            res.status(200).json({
                "msg" : "list barangs",
                 "data" : result.rows
            })
        }
  })
})

//insert barang
app.post("/barang", (req, res)=>{
    let barang = req.body.barang
    let stock = req.body.stock
    db.query(`insert into "Barangs" (barang, stock) values ('${barang}', ${stock})`, (err, result)=>{
    if(err){
        res.status(500).json(err)
    }else{
        res.status(201).json({
            'msg' : "sukses",
            'data' : result.rows
        })
    }
    })
})

//cari barangs
app.get("/barang/:barang", (req, res)=>{
    let input = req.params.barang
    db.query(`
        select * from "Barangs" where barang like '%${input}%';
    `, (err, result)=>{
        if(err){
            res.status(500).json(err)
        }else{
            res.status(200).json({
                "msg" : "sukses",
                "data" : result.rows
            })
        }
    })
})

//update barang
app.put('/barang/:id', (req, res)=>{
    let id = req.params.id
    let barang = req.body.barang
    db.query(`update "Barangs" set barang = '${barang}' where  id = ${id}`
    ,(err, result)=>{
        if(err){
            console.log(err)
            res.status(500).json(err)
        }else{
            res.status(201).json({
                "msg" : "sukses",
                "data" : result.rows
            })
        }
    })
})


//delete 

app.delete("/barang/:id", (req, res)=>{
    let id = req.params.id
    db.query(`delete from "Barangs" where id = ${id}`
    , (err, result)=>{
        if(err){
            res.status(500).json(err)
        }else{
            res.status(200).json({
                "msg" : "data berhasil di delete",
                "data" : result.rows
            })
        }
    }) 
})

app.listen(port, ()=>{
    console.log('Listening on port', port)
})