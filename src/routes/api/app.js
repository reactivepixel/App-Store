const app = require('../../models/app');
const util = require('../../../lib/util');

module.exports = (express) => {
  const router = express.Router();

  // Create
  router.post('/apps', (req, res) => {
    // call the create method
    app.create(req.body, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, req.body, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, req.body, res.statusCode);
    });
  });

  // Read All
  router.get('/apps', (req, res) => {
    // call the findAll method
    app.findAll((err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, req.body, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, req.body, res.statusCode);
    });
  });


  // Read All apps with user Id
  router.get('/users/:userId/apps', (req, res) => {
    // grab value passed in though url.
    const reqBody = {
      userId: req.params.userId,
    };

    // call the findAll method
    app.findAllUserApps(reqBody, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    });
  });


  // Read One
  router.get('/apps/:id', (req, res) => {
    // grab value passed in though url.
    const reqBody = {
      id: req.params.id,
    };

    // call the find method
    app.find(reqBody, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, res, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, res, res.statusCode);
    });
  });

  // Delete
  router.delete('/apps/:id', (req, res) => {
    // grab value passed in though url.
    const reqBody = {
      id: req.params.id,
    };
    // call the destroy method
    app.destroy(reqBody, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    });
  });

  // Update
  router.post('/apps/:id', (req, res) => {
    const reqBody = {
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      releaseDate: req.body.releaseDate,
      userId: req.body.userId,
    };
    app.update(reqBody, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    });
  });

  return router;
};
