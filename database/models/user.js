const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class User extends Model {
        static associate(models) {

            User.hasMany(models.Category, {foreignKey: 'user_id'});
            User.hasMany(models.Transaction, {foreignKey: 'user_id'});
        }
    }

    User.init(
        {
            user_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                unique: true,
            },
            password: DataTypes.STRING,
        },
        {sequelize,
            modelName: 'User',
            tableName: 'users',
        }
    );
    return User;
}