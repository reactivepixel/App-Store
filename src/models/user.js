const db = require('./db');
const util = require('../../lib/util');
// create user
exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
};

// find all users
exports.findAll = (err, success) => {
  db.user.findAll().then(success).catch(err);
};

// find one user
exports.find = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};

// update user
exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// delete user
exports.destroy = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
