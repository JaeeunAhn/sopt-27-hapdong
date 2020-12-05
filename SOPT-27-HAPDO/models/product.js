module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Product', {
  //모델의 Attributes (Column)을 정의하는곳
  image_url: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  tag: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  seller: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER(30),
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER(30),
    allowNull: false,
  },
  review: {
    type: DataTypes.INTEGER(30),
    allowNull: false,
  }
}, {
    //model의 옵션을 지정하는 곳
    freezeTableName: true,
  });
};