const factory=require('./handler_factory')
const Item=require('../Models/Item')

exports.CreateItem=factory.createOne(Item);
exports.GetFromCategory=factory.getCategory(Item);
exports.GetFromSubCategory=factory.getSubCategory(Item);
exports.DeleteOne=factory.deleteOne(Item);
exports.GetAll=factory.getAll(Item);
exports.getItem=factory.getOne(Item);
exports.UpdateOne=factory.updateOne(Item);

