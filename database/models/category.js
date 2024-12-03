const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Category extends Model {
        static associate(models) {
            Category.belongsTo(models.User, { foreignKey: 'user_id'});
            Category.hasMany(models.Transaction, {foreignKey: 'category_id'})
        }
    }

    Category.init(
        {
            category_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            category_name: DataTypes.STRING,
            category_type: DataTypes.STRING,
            nature_type: DataTypes.STRING,
        },

      { 
        sequelize,
        modelName: 'Category',
        tableName: 'categories',
        }
    );
    return Category;
}