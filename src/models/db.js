const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
    logging: false,
});

// users table model
const user = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
    },
    appId: {
        type: Sequelize.INTEGER,
    },
});

// artAssets table model
const artAssets = sequelize.define('artAssets', {
    title: {
        type: Sequelize.STRING,
    },
    srcLink: {
        type: Sequelize.STRING,
    },
    appId: {
        type: Sequelize.INTEGER,
    },
});

// app table model
const app = sequelize.define('app', {
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    releaseDate: {
        type: Sequelize.STRING,
    },
});

// foreign key for artAssets
app.hasMany(artAssets, {
    as: 'appId',
});

// foreign key for users
app.hasMany(user, {
    as: 'appId',
});

// This will link to the database so that you can use CRUD.
sequelize.sync();

exports.sequelize= sequelize;
exports.user = user;
exports.artAssets = artAssets;
exports.app = app;
