const user = require('../../models/user');

module.exports = (express) => {
    const router = express.Router();

    // Create
    router.post('/users', (req, res) => {

        // call the create method
        user.create(req.body, (err) => {
            res.status(500).json(err);
        },(data => {
            res.status(200).json(data);
        }))
    });

    // Read All
    router.get('/users', (req, res) => {

        // call the findAll method
        user.findAll( (err) => {
            res.status(500).json(err);
        },(data) => {
            res.status(200).json(data);
        })
    });

    // Read One
    router.get('/users/:id', (req, res) => {
        // grab value passed in though url.
        req.body.id = parseInt(req.params.id)

        // call the find method
        user.find(req.body, (err) => {
            res.status(500).json(err);
        },(data) => {
            res.status(200).json(data);
        })
    });

    // Delete
    router.delete('/users/:id', (req, res) => {
        // grab value passed in though url.
        req.body.id = parseInt(req.params.id)

        // call the destroy method
        user.destroy(req.body, (err) => {
            res.status(500).json(err);
        },(data) => {
            res.status(200).json(data);
        })
    });

    // Update
    router.post('/users/:id', (req, res) => {
        // grab value passed in though url.
        req.body.id = parseInt(req.params.id)

        // call the update method
        user.update(req.body, (err) => {
            res.status(500).json(err);
        },(data) => {
            res.status(200).json(data);
        })
    });

    return router;
}