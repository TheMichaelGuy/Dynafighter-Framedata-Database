const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const { movestats } = require('../models/init-models')(sequelize);

  // GET all move stats
  router.get('/api/movestats', async (req, res) => {
    try {
      const moves = await movestats.findAll();
      res.json(moves);
    } catch (err) {
      console.error('Another error fetching move stats:', err); // Log the error
      res.status(500).json({ error: err.message });
    }
  });

  // POST a new move stats
  router.post('/api/movestats', async (req, res) => {
    try {
      const newMove = await movestats.create(req.body);
      res.json(newMove);
    } catch (err) {
      console.error('Error creating move stats:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // PUT (update) a move stats
  router.put('/api/movestats/:id', async (req, res) => {
    try {
      const updatedMove = await movestats.update(req.body, {
        where: { ID: req.params.id }
      });
      res.json(updatedMove);
    } catch (err) {
      console.error('Error updating move stats:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // DELETE a move stats
  router.delete('/api/movestats/:id', async (req, res) => {
    try {
      await movestats.destroy({
        where: { ID: req.params.id }
      });
      res.json({ message: 'move stats deleted' });
    } catch (err) {
      console.error('Error deleting move stats:', err);
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
