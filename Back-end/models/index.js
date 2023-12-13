
import { Sequelize } from "sequelize";
import 'dotenv/config'
import Article from './article.js'
import User from './user.js'

// Your Sequelize configuration
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);


const ArticleModel = Article(sequelize, Sequelize)
const UserModel=User(sequelize,Sequelize)


const db = {
  sequelize,
  Sequelize,
  ArticleModel ,
  UserModel
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

export default db;