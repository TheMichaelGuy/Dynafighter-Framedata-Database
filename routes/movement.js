const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const { movement } = require('../models/init-models')(sequelize);

  // GET all movement
  router.get('/api/movement', async (req, res) => {
    try {
      const moves = await movement.findAll();
      res.json(moves);
    } catch (err) {
      console.error('Another error fetching movement data:', err); // Log the error
      res.status(500).json({ error: err.message });
    }
  });

  // POST a new movement
  router.post('/api/movement', async (req, res) => {
    try {
      const newMove = await movement.create(req.body);
      res.json(newMove);
    } catch (err) {
      console.error('Error creating movement:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // PUT (update) a movement
  router.put('/api/movement/:id', async (req, res) => {
    try {
      const updatedMove = await movement.update(req.body, {
        where: { ID: req.params.id }
      });
      res.json(updatedMove);
    } catch (err) {
      console.error('Error updating movement:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // DELETE a movement
  router.delete('/api/movement/:id', async (req, res) => {
    try {
      await movement.destroy({
        where: { ID: req.params.id }
      });
      res.json({ message: 'movement deleted' });
    } catch (err) {
      console.error('Error deleting movement:', err);
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
