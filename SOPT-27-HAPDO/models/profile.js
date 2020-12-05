module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Profile', {
    profileImageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    badgeImageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: true,
		},
		point: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
		coupon: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    freezeTableName: true,
    timestamps: true,
  })
}