const {getAll,inserOne,deleteOne,updateOne}=require("../model/recipiesModel")


const getRecepie = (req, res) => {

  const cb=((succ,err)=>{
    if(succ) res.status(200).json(succ);
    else res.status(500).json(err);
  })
  getAll(cb)
};

const insertRecepie=(req,res)=>{
  const cb=((succ,err)=>{
    if(succ) res.status(200).json(succ);
    else res.status(500).json(err);
  })
  console.log(req.body)

  inserOne(cb,req.body)
}

const deleteRecepie=(req,res)=>{
  const cb=((succ,err)=>{
    if(succ) res.status(200).json(succ);
    else res.status(500).json(err);
  })
  deleteOne(cb,req.params.id)
}

const updateRecepie=(req,res)=>{
  const cb=((succ,err)=>{
    if(succ) res.status(200).json(succ);
    else res.status(500).json(err);
  })
  updateOne(cb,req.params.id,req.body)
}





module.exports = {
  getRecepie,insertRecepie,deleteRecepie,updateRecepie
};
