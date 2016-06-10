const user = require('../../models/user');
const util = require('../../../lib/util');

module.exports = (express) => {
  const router = express.Router();

  // Create
  router.post('/users', (req, res) => {
      // call the create method
    user.create(req.body, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, req.body, res.statusCode);
    }, (data => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, req.body, res.statusCode);
    }));
  });

  // Read All
  router.get('/users', (req, res) => {
    // call the findAll method
    user.findAll((err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, req.body, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, req.body, res.statusCode);
    });
  });

  // Read One
  router.get('/users/:id', (req, res) => {
    // grab value passed in though url.
    const reqBody = {
      id: req.params.id,
    };

    // call the find method
    user.find(reqBody, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    });
  });

  // Delete
  router.delete('/users/:id', (req, res) => {
    // grab value passed in though url.
    const reqBody = {
      id: req.params.id,
    };

    // call the destroy method
    user.destroy(reqBody, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    });
  });

  // Update
  router.post('/users/:id', (req, res) => {
    // grab value passed in though url.
    const reqBody = {
      id: req.params.id,
      name: req.body.name,
    };

      // call the update method
    user.update(reqBody, (err) => {
      res.status(500).json(err);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    }, (data) => {
      res.status(200).json(data);
      util.debug(req.method + ' ' + req.path, reqBody, res.statusCode);
    });
  });

  return router;
};
