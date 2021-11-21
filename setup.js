const db = require('./db')


//setup 

/*
buat cek benerkah sudah terkoneksi ke database
db.query(`select now()`, (err, res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res.rows)
    }
})
*/


db.query(`
    create table if not exists "Users"(
        id serial primary key,
        name varchar
    );
`, (err, res)=>{
    if(err){
        console.log(err)
    }else{
        //console.log(res)
    }
})

db.query(`
    create table if not exists "Barangs"(
        id serial primary key,
        barang varchar,
        stock integer
    );
`, (err, result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})