import Sequelize from 'sequelize';
import database from './database';

const User = database.define('user', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  twitterId: Sequelize.STRING,
  twitterTokenKey: Sequelize.STRING,
  twitterTokenSecret: Sequelize.STRING,
  displayName: Sequelize.STRING
})

User.sync({force: false})

export default User;
