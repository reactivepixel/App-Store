const db = require('./db');

exports.create = (payload, err, success) => {
  db.app.create(payload).then(success).catch(err);
};

exports.findAll = (err, success) => {
  db.app.findAll().then(success).catch(err);
};

// find all apps with a user id
// returning emply because of it not existing. cannot figure out
// how to grab the app with id.
exports.findAllUserApps = (payload, err, success) => {
    // db.app.findAll({

    //     where: {
    //         id: payload.userId,
    //         user:{
    //            appId: payload.userId,
    //         }
    //     },
    // }).then(success).catch(err);

  db.app.findAll({
    where: {
      userId: payload.userId,
    },
      // where: {
      //     user: {
      //        appId: payload.userId,
      //    },
      // },
    include: ({
      all: true,
      nested: true,
    }),
  }).then(success).catch(err);
};

exports.find = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
    include: ({
      all: true,
      nested: true,
    }),
  }).then(success).catch(err);
};

exports.update = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

exports.destroy = (payload, err, success) => {
  db.app.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
