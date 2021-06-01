const User=require('../../Models/User')
const crypto = require('crypto');

exports.hasAuthFields=(req,res,next)=>{

    let errors=[];

    if(req.body){
        if(!req.body.username){
            errors.push("Missing username field")
        }
        if (!req.body.password) {
            errors.push('Missing password field');
        }

        if (errors.length) {
            return res.status(400).send({errors: errors.join(',')});
        } else {
            return next();
        }
    } else {
        return res.status(400).send({errors: 'Missing username and password fields'});
    }

}

exports.isPasswordandUserMatch=(req,res,next)=>{

    User.findByUsername(req.body.username).then(user=>{
        if(!user[0]){
            res.status(404).send({});
         
        }else{
            let passwordFields=user[0].password.split('$');
            let salt=passwordFields[0];
            let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
           
         
            if(hash==passwordFields[1]){
                req.body={
                    id:user[0]._id,
                    email:user[0].email,
                    username:user[0].username
                }
                return next();
            }else{
                return res.status(400).send({errors: ['Invalid username or password']});
            }
        }
    })

}
