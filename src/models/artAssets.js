const db = require('./db');

// Creates a artAsset passing in the payload and will err if not correctly formated.
exports.create = (payload, err, success) => {
  db.artAssets.create(payload).then(success).catch(err);
};

// sending in a payload so you can get the values passed through url
// because the artAssets is a array.
exports.findAll = (payload, err, success) => {
  db.artAssets.findAll({
    where: {
      appId: payload.appId,
    },
  }).then(success).catch(err);
};

// find just on artAsset in the app.
exports.find = (payload, err, success) => {
  db.artAssets.find({
    where: {
      id: payload.id,
      appId: payload.appId,
    },
    include: ({
      all: true,
      nested: true,
    }),
  }).then(success).catch(err);
};

// update
exports.update = (payload, err, success) => {
  db.artAssets.find({
    where: {
      id: payload.id,
      appId: payload.appId,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// delete
exports.destroy = (payload, err, success) => {
  db.artAssets.destroy({
    where: {
      id: payload.id,
      appId: payload.appId,
    },
  }).then(success).catch(err);
};
