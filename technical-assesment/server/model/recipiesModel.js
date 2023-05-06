const connection = require("../database-mysql/index")
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();


const getAll = (callback) => {
    const sql="select * from recepie"
    connection.query(sql,(err,succ) => {
        if (err) console.log("its not");
        callback(succ);
    });
};

const inserOne=(CB,recepie)=>{
    const sql="insert into recepie set ?"
    connection.query(sql,recepie,(err, res) => {
        if (err) console.log("its not");
        CB(res);
    });
}
const deleteOne=(CB,ID)=>{
    const sql=`delete from recepie where recepie_Id=${ID}`
    connection.query(sql,ID,(err, res) => {
        if (err) console.log("its not");
        CB(res);
    });

}

const updateOne=(CB,OBJ,ID)=>{
    const sql=`update recepie set ? where recepie_Id=${ID}`
    connection.query(sql,OBJ,(err, res) => {
        if (err) console.log("its not");
        CB(res);
    });
}

module.exports = { getAll,inserOne,deleteOne,updateOne};
