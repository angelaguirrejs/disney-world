const { Model, DataTypes, Sequelize } = require('sequelize');

const GENDER_TABLE = 'genders';

const GenderSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
}

class Gender extends Model {

    static associate() {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: GENDER_TABLE,
            modelName: 'Gender',
            timestamps: false
        }
    }

}

module.exports = {
    GENDER_TABLE,
    GenderSchema,
    Gender
}
