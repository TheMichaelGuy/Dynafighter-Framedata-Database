const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const { moveidentifier, moveframedata, movestats, movement } = require('../models/init-models')(sequelize);

  // GET frame data for a character
  router.get('/api/frame-data/:characterName', async (req, res) => {
    const characterName = req.params.characterName;
    try {
      const frameData = await sequelize.query(`
        SELECT mi.AttackName, mfd.*, ms.*, mv.FrontRange
        FROM moveframedata mfd
        JOIN moveidentifier mi ON mfd.ID = mi.ID
        JOIN movestats ms ON mfd.ID = ms.ID
        JOIN movement mv ON mfd.ID = mv.ID
        WHERE CharacterName = :characterName
        AND (mi.AttackID < 12 OR mi.AttackName 
        IN (SELECT AttackName FROM moveidentifier mi2
            JOIN moveframedata mfd2 ON mi2.ID = mfd2.ID
            WHERE LinksTo IS NOT NULL AND MoveType IN ('Linkhit','Slashbolt','Counter','Stutter')))
      `, {
        replacements: { characterName },
        type: sequelize.QueryTypes.SELECT
      });
      res.json(frameData);
    } catch (err) {
      console.error('Error fetching frame data from routes:', err);
      res.status(500).json({ error: err.message });
    }
  });
  
  return router;
};

