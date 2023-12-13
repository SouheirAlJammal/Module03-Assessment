'use strict';
import {Model} from 'sequelize'
export default (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      // define association here
    }
  }
  Article.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    category:DataTypes.ENUM('Scientific','Politic','Fantasy')
    ,
    body: DataTypes.STRING,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article',
    timestamps: true,
  });
  return Article;
};