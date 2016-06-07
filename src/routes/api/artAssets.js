const artAssets = require('../../models/artAssets');
const app = require('../../models/app');
module.exports = (express) => {
    const router = express.Router();


    // Create
    router.post('/apps/:appId/artAssets', (req, res) => {
        // grab value passed in though url.
        req.body.appId = parseInt(req.params.appId)

        // call the create method
        artAssets.create(req.body, (err) => {
            res.status(500).json(err);
        },(data => {
            res.status(200).json(data);
        }))
    });

    // Read All
    router.get('/apps/:appId/artAssets', (req, res) => {
        // grab value passed in though url.
        req.body.appId = parseInt(req.params.appId)

        // call the findAll method
        artAssets.findAll(req.body, (err) => {
            res.status(500).json(err);
        },(data) => {
            res.status(200).json(data);
        })
    });

    // Read One
    router.get('/apps/:appId/artAssets/:id', (req, res) => {
        // grab values passed in though url.
        req.body.id = parseInt(req.params.id)
        req.body.appId = parseInt(req.params.appId)

        // call the find method
        artAssets.find(req.body, (err) => {
            res.status(500).json(err);
        },(data) => {
            res.status(200).json(data);
        })
    });

    // Delete
    router.delete('/apps/:appId/artAssets/:id', (req, res) => {
        // grab values passed in though url.
        req.body.id = parseInt(req.params.id)
        req.body.appId = parseInt(req.params.appId)

        // call the destroy method
        artAssets.destroy(req.body, (err) => {
            res.status(500).json(err);
        },(data) => {
            res.status(200).json(data);
        })
    });

    // Update
    router.post('/apps/:appId/artAssets/:id', (req, res) => {
        // grab value passed in though url.
        req.body.id = parseInt(req.params.id)
        req.body.appId = parseInt(req.params.appId)

        // call the update method
        artAssets.update(req.body, (err) => {
            res.status(500).json(err);
        },(data) => {
            res.status(200).json(data);
        })
    });

    return router;
}