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
      allowNull: false,
		},
		point: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
		coupon: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
    timestamps: true,
  })
}