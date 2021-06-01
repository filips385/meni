
exports.deleteOne = Model => (req, res, next) => {
      
  Model.findByIdAndDelete(req.params.id)
  .then(result=>{
      res.status(200).send(result)
  }).catch(err=>{console.log(err)})

}

exports.getOne=Model=>(req,res,next)=>{
        Model.findById(req.params.id).
        then(result=>{
            res.status(200).send({result})
        })
        .catch(err=>console.log(err));
}

exports.createOne=Model=>(req,res,next)=>{
    Model.createOne(req.body).then(result=>{
        res.status(200).send({result})
        next()
    }).catch(err=>console.log(err));

}

exports.updateOne=Model=>(req,res,next)=>{
        Model.findByIdAndUpdate(req.params.id,req.body).then(
            result=>{res.status(200).send({result})}
        ).catch(err=>console.log(err));
}

exports.getAll=Model=>(req,res,next)=>{

    let query=req.query.limit && req.query.limit<=100 ? parseInt(req.query.limit):1000;
    let page=Number.isInteger(req.query.page) ? req.query.page : 0;
    
    Model.list(query,page).then(result=>{
        res.status(200).send(result);
    }).catch(err=>console.log(err));
} 

exports.getCategory=Model=>(req,res,next)=>{
    Model.getCategory(req.params.category).then(result=>{
        res.status(200).send(result);
    }).catch(err=>console.log(err));
}

exports.getSubCategory=Model=>(req,res,next)=>{
    Model.getSubCategory(req.params.subcategory).then(result=>{
        res.status(200).send(result);
    }).catch(err=>console.log(err));
}
