const itemController=require('../Controllers/ItemController')

exports.routesConfig=(app)=>{


    app.post('/CreateItem',[
        itemController.CreateItem
    ]);

    app.get('/category/:category/',[
        itemController.GetFromCategory
    ]);

    app.get('/subcategory/:subcategory/',[
        itemController.GetFromSubCategory
    ]);

    app.delete('/delete/:id',[
        itemController.DeleteOne
    ]);

    app.patch('/update/:id',[
        itemController.UpdateOne
    ]);

    app.get('/api',[
        itemController.GetAll
    ]);


}