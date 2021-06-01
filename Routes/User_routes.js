const userController=require('../Controllers/UserController')
const authController=require('../Controllers/auth/auth_controller')
const verify_user=require('../Controllers/auth/verify_user')
const validation=require('../Controllers/auth/auth_validation')


exports.routesConfig = (app) =>{
 
    app.post('/CreateUser', [
        userController.createUser
     ]);

   app.get('/users', [
      userController.getAllUsers
   ]);

     app.post('/login',[
        verify_user.hasAuthFields,
        verify_user.isPasswordandUserMatch,
        authController.login
     ]);


}