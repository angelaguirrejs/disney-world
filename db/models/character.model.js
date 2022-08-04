const { Model, DataTypes, Sequelize } = require('sequelize');

const CHARACTER_TABLE = 'characters';

const CharacterSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    age: {
        allowNull: false,
        type: DataTypes.SMALLINT
    },
    weight: {
        allowNull: false,
        type: DataTypes.FLOAT
    },
    history: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    createdAt: {
        allowNull: false,
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
}

class Character extends Model {

    static associate() {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CHARACTER_TABLE,
            modelName: 'Character',
            timestamps: false
        }
    }

}


module.exports = { CHARACTER_TABLE, CharacterSchema, Character }
