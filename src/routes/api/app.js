const app = require('../../models/app');

module.exports = (express) => {
  const router = express.Router();

  // Create
  router.post('/apps', (req, res) => {
    // call the create method
    app.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data => {
      res.status(200).json(data);
    }));
  });

  // Read All
  router.get('/apps', (req, res) => {
    // call the findAll method
    app.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });


  // Read All apps with user Id
  // does not work. ran out of time. returns empty
  router.get('/users/:userId/apps', (req, res) => {
    // grab value passed in though url.
    const reqBody = {
      userId: req.params.userId,
    };

    // call the findAll method
    app.findAllUserApps(reqBody, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
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
    }, (data) => {
      res.status(200).json(data);
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
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Update
  router.post('/apps/:id', (req, res) => {
    const reqBody = {
      id: req.params.id,
    };
    app.update(reqBody, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
