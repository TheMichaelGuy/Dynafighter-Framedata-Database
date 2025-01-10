const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const { moveidentifier } = require('../models/init-models')(sequelize);

  // GET all move identifiers
  router.get('/api/moveidentifier', async (req, res) => {
    try {
      const moves = await moveidentifier.findAll();
      res.json(moves);
    } catch (err) {
      console.error('Error fetching move identifiers:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // POST a new move identifier
  router.post('/api/moveidentifier', async (req, res) => {
    try {
      const newMove = await moveidentifier.create(req.body);
      res.json(newMove);
    } catch (err) {
      console.error('Error creating move identifier:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // PUT (update) a move identifier
  router.put('/api/moveidentifier/:id', async (req, res) => {
    try {
      const updatedMove = await moveidentifier.update(req.body, {
        where: { ID: req.params.id }
      });
      res.json(updatedMove);
    } catch (err) {
      console.error('Error updating move identifier:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // DELETE a move identifier
  router.delete('/api/moveidentifier/:id', async (req, res) => {
    try {
      await moveidentifier.destroy({
        where: { ID: req.params.id }
      });
      res.json({ message: 'Move identifier deleted' });
    } catch (err) {
      console.error('Error deleting move identifier:', err);
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
