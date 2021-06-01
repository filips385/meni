const mongoose=require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Schema=mongoose.Schema;

const ItemSchema=new Schema({

    Naziv:{
        type:String,
        required:true
    },
    Cijena:{
        type:Number,
        required:true
    },
    Velicina:{
        type:Number,
        required:false    
    },
    Opis:{
        type:String,
        required:false
    },
    Sastojci:{
        type:[String],
        required:false
    },
    Category:{
        type:String,
        required:true
    },
    SubCategory:{
        type:String,
        required:false  
    }

})

const Item=mongoose.model('Item',ItemSchema);

exports.createOne=(data)=>{
    const newItem=new Item(data);
    return newItem.save();
}

exports.list=(perPage,Page)=>{
    return new Promise((resolve,reject)=>{
        Item.find()
        .limit(perPage)
        .skip(perPage*Page)
        .exec(function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

exports.findByIdAndDelete=(id)=>{
    return new Promise((resolve,reject)=>{
        Item.findOneAndDelete({_id:id}).exec(err=>{
            if(err){
                reject(err)
            }else{
                resolve(err)
            }
        });
    })

}


exports.findByIdAndUpdate = (id, userData) => {
    return new Promise((resolve,reject)=>{
        Item.findOneAndUpdate({_id:id},userData).exec((err,data)=>{
            if(data){
                resolve(data)
            }else{
                reject(err)
            }

        })
    })
};

exports.findById = (id) => {
    return new Promise((resolve,reject)=>{
        Item.find({_id:id}).exec((err,data)=>{
            if(data){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}

exports.getCategory=(category)=>{
    return new Promise((resolve,reject)=>{
        Item.find({Category:category}).exec((err,data)=>{
            if(data){
                resolve(data);
            }else{
                reject(err);
            }
        })
    })
}

exports.getSubCategory=(subcategory)=>{
    return new Promise((resolve,reject)=>{
        Item.find({SubCategory:subcategory}).exec((err,data)=>{
            if(data){
                resolve(data);
            }else{
                reject(err);
            }
        })
    })
}

module.exports.Item;