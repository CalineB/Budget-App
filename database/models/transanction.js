const {Model, DataTypes }= require('sequelize');

module.exports = (sequelize) => {
    class Transaction extends Model {
        static associate(models) {
            Transaction.belongsTo(models.Category, {foreignKey: 'category_id'});
            Transaction.belongsTo(models.User, {foreignKey: 'user_id'});
        }
    }

    Transaction.init(
        {
            transaction_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            sum: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false,
            },
            date: DataTypes.DATE,
            type: DataTypes.STRING,
            origin: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Transaction',
            tableName: 'transactions',
        }
    );
    return Transaction;
}