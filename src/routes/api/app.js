const app = require('../../models/app');

module.exports = (express) => {
    const router = express.Router();

    // Create
    router.post('/apps', (req, res) => {

        // call the create method
        app.create(req.body, (err) => {
            res.status(500).json(err);
        },(data => {
            res.status(200).json(data);
        }))
    });

    // Read All
    router.get('/apps', (req, res) => {

        // call the findAll method
        app.findAll( (err) => {
            res.status(500).json(err);
        },(data) => {
            res.status(200).json(data);
        })
    });

    // Read One
    router.get('/apps/:id', (req, res) => {
        // grab value passed in though url.
        req.body.id = parseInt(req.params.id)

        // call the find method
        app.find(req.body, (err) => {
            res.status(500).json(err);
        },(data) => {
            res.status(200).json(data);
        })
    });

    // Delete
    router.delete('/apps/:id', (req, res) => {
        // grab value passed in though url.
        req.body.id = parseInt(req.params.id)

        // call the destroy method
        app.destroy(req.body, (err) => {
            res.status(500).json(err);
        },(data) => {
            res.status(200).json(data);
        })
    });

    // Update
    router.post('/apps/:id', (req, res) => {
        req.body.id = parseInt(req.params.id)
        app.update(req.body, (err) => {
            res.status(500).json(err);
        },(data) => {
            res.status(200).json(data);
        })
    });

    return router;
}