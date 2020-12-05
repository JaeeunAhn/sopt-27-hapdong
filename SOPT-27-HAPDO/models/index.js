const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Profile = require('./profile')(sequelize, Sequelize);
db.Banner = require('./banner')(sequelize, Sequelize);
db.Product = require('./product')(sequelize, Sequelize);
/** 참고 CODE
 * db.User = require('./user')(sequelize, Sequelize);
*/

module.exports = db;