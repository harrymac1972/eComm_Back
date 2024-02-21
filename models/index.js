
// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category
  // remember: 'belongsTo' means it has the Foreign Key
Product.belongsTo(Category, {foreignKey: 'category_id'});
// Categories have many Products
Category.hasMany(Product, {foreignKey: 'category_id'});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{through: ProductTag, foreignKey: 'product_id'});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{through: ProductTag, foreignKey: 'tag_id'});

// NOTE:  incorrect error was:    {through: "ProductTag", ...
//         proper is WITHOUT QUOTATION MARK so it pulls variable imported

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
