const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const { moveframedata } = require('../models/init-models')(sequelize);

  // GET all move framedata
  router.get('/api/moveframedata', async (req, res) => {
    try {
      const moves = await moveframedata.findAll();
      res.json(moves);
    } catch (err) {
      console.error('Another error fetching that framedata:', err); // Log the error
      res.status(500).json({ error: err.message });
    }
  });

  // POST a new move frame data
  router.post('/api/moveframedata', async (req, res) => {
    try {
      const newMove = await moveframedata.create(req.body);
      res.json(newMove);
    } catch (err) {
      console.error('Error creating moveframedata:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // PUT (update) a move frame data
  router.put('/api/moveframedata/:id', async (req, res) => {
    try {
      const updatedMove = await moveframedata.update(req.body, {
        where: { ID: req.params.id }
      });
      res.json(updatedMove);
    } catch (err) {
      console.error('Error updating moveframedata:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // DELETE a move frame data
  router.delete('/api/moveframedata/:id', async (req, res) => {
    try {
      await moveframedata.destroy({
        where: { ID: req.params.id }
      });
      res.json({ message: 'move frame data deleted' });
    } catch (err) {
      console.error('Error deleting moveframedata:', err);
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
