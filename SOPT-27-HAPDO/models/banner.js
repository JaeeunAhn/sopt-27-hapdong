module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Banner', {
  //모델의 Attributes (Column)을 정의하는곳
  bannerImgUri: {
    type: DataTypes.STRING(200),
    allowNull: false,
  }
}, {
    //model의 옵션을 지정하는 곳
    freezeTableName: true,
  });
};