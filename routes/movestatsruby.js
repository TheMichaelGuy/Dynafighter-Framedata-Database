const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const { movestatsruby } = require('../models/init-models')(sequelize);

  // GET all move ruby stats
  router.get('/api/movestatsruby', async (req, res) => {
    try {
      const moves = await movestatsruby.findAll();
      res.json(moves);
    } catch (err) {
      console.error('Another error fetching ruby move stats:', err); // Log the error
      res.status(500).json({ error: err.message });
    }
  });

  // POST a new move stats ruby
  router.post('/api/movestatsruby', async (req, res) => {
    try {
      const newMove = await movestatsruby.create(req.body);
      res.json(newMove);
    } catch (err) {
      console.error('Error creating move stats ruby:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // PUT (update) a move stats ruby
  router.put('/api/movestatsruby/:id', async (req, res) => {
    try {
      const updatedMove = await movestatsruby.update(req.body, {
        where: { ID: req.params.id }
      });
      res.json(updatedMove);
    } catch (err) {
      console.error('Error updating move stats ruby:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // DELETE a move stats ruby
  router.delete('/api/movestatsruby/:id', async (req, res) => {
    try {
      await movestatsruby.destroy({
        where: { ID: req.params.id }
      });
      res.json({ message: 'move stats ruby deleted' });
    } catch (err) {
      console.error('Error deleting move stats ruby:', err);
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
