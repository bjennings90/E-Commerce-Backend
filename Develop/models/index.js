// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});
// // Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
})

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: ProductTag,
//   foreignKey: 'tag_id'
// })

// Tag.hasMany(Product, {
//   foreignKey: 'tag_id'
// });

// Product.belongsTo(Tag, {
//   foreignKey: 'tag_id'
// });

// Tag.belongsToMany(Product, {
//   through: ProductTag,
//   as: 'product_tags',
//   foreignKey: 'tag_id'
// });

// Product.belongsToMany(Tag, {
//   through: ProductTag,
//   as: 'product_tags',
//   foreignKey: 'product_id'
// });

// ProductTag.belongsTo(Tag, {
//   foreignKey: 'tag_id'
// });

// ProductTag.belongsTo(Product, {
//   foreignKey: 'product_id'
// });

// Tag.hasMany(ProductTag, {
//   foreignKey: 'tag_id'
// });

// Product.hasMany(ProductTag, {
//   foreignKey: 'product_id'
// });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
