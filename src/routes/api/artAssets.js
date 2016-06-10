const artAssets = require('../../models/artassets');
const util = require('../../../lib/util');

module.exports = (express) => {
  const router = express.Router();


  // Create
  router.post('/apps/:appId/artassets', (req, res) => {
    // grab value passed in though url.
    const reqBody = {
      appId: req.params.appId,
    };

      // call the create method
    artAssets.create(reqBody, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    });
  });

  // Read All
  router.get('/apps/:appId/artassets', (req, res) => {
    // grab value passed in though url.
    const reqBody = {
      appId: req.params.appId,
    };

    // call the findAll method
    artAssets.findAll(reqBody, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    });
  });

  // Read One
  router.get('/apps/:appId/artassets/:id', (req, res) => {
    // grab values passed in though url.
    const reqBody = {
      id: req.params.id,
      appId: req.params.appId,
    };

    // call the find method
    artAssets.find(reqBody, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    });
  });

  // Delete
  router.delete('/apps/:appId/artassets/:id', (req, res) => {
    // grab values passed in though url.
    const reqBody = {
      id: req.params.id,
      appId: req.params.appId,
    };

    // call the destroy method
    artAssets.destroy(reqBody, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    });
  });

  // Update
  router.post('/apps/:appId/artassets/:id', (req, res) => {
    // grab value passed in though url.
    const reqBody = {
      id: req.params.id,
      title: req.body.title,
      srcLink: req.body.srcLink,
      appId: req.params.appId,
    };

    // call the update method
    artAssets.update(reqBody, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    });
  });

  return router;
};
