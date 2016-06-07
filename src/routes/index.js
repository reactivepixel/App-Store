module.exports = (express) => {
  const router = express.Router();

  router.post('/status', (req, res) => {
    res.json({
      healthy: true,
    })
  });

  router.use('/api/', require('./api/user')(express));
  router.use('/api/', require('./api/app')(express));
  router.use('/api/', require('./api/artAssets')(express));

// // -=-=-=-=- Accept an id for User -=-=-=-=-
// // -=-=-=-=--=-=-=-=--=-=-=-=--=-=-=-=-=-=-=-
// // Will use this for querying the database for that users Id
//   router.get('/users/:id', (req , res) => {
//     res.json({"users": [{"id": req.params.id}]});
//   })

// // -=-=-=-=- Accept an id for Apps -=-=-=-=-
// // -=-=-=-=--=-=-=-=--=-=-=-=--=-=-=-=-=-=-=-
// // Will use this for querying the database for that apps Id
//   router.get('/apps/:id', (req , res) => {
//     res.json({"apps": [{"id": req.params.id}]});
//   })

  return router
}



