module.exports = (express) => {
  const router = express.Router();

  router.post('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  router.use('/api/', require('./api/user')(express));
  router.use('/api/', require('./api/app')(express));
  router.use('/api/', require('./api/artassets')(express));

  return router;
};
