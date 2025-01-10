const express = require('express');
const router = express.Router();

module.exports = (sequelize) => {
  const { moveidentifier, moveframedata, movestats, movement } = require('../models/init-models')(sequelize);

  // GET attack data for a character
  router.get('/api/attack-data/:characterName', async (req, res) => {
    const characterName = req.params.characterName;
    try {
      const attackData = await sequelize.query(`
        SELECT AttackName, AttackID, IconicFrame, DMG, BK, RK, BH, RH, AK, TK
        FROM movestats ms JOIN moveidentifier mi ON ms.ID = mi.ID
        WHERE mi.CharacterName = :characterName;
      `, {
        replacements: { characterName },
        type: sequelize.QueryTypes.SELECT
      });
      res.json(attackData);
    } catch (err) {
      console.error('Error fetching attack data:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // GET follow-up data for a character
  router.get('/api/followup-data/:characterName', async (req, res) => {
    const characterName = req.params.characterName;
    try {
      const followupData = await sequelize.query(`
        SELECT AttackID, AttackName, IconicFrame, DMG, BH, RH, StartUp, Active, Endlag, Mobility, MoveType, ChangeXv, ChangeYv, FrontRange
        FROM moveframedata mfd JOIN movestats ms ON mfd.ID = ms.ID JOIN movement mv ON mfd.ID = mv.ID JOIN moveidentifier mi ON mfd.ID = mi.ID
        WHERE mfd.ID IN (SELECT ID FROM moveidentifier WHERE CharacterName = :characterName) AND Endlag IS NOT NULL AND MoveType NOT IN ('Bun','Slice','Ender','Counter');
      `, {
        replacements: { characterName },
        type: sequelize.QueryTypes.SELECT
      });
      res.json(followupData);
    } catch (err) {
      console.error('Error fetching follow-up data:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // GET ALTERNATE attack data for a character
  router.get('/api/attack-data-ruby/:characterName', async (req, res) => {
    const characterName = req.params.characterName;
    try {
      const attackData = await sequelize.query(`
        SELECT AttackName, AttackID, IconicFrame, DMG, BK, RK, BH, RH, AK, TK
        FROM movestatsruby ms JOIN moveidentifier mi ON ms.ID = mi.ID
        WHERE mi.CharacterName = :characterName;
      `, {
        replacements: { characterName },
        type: sequelize.QueryTypes.SELECT
      });
      res.json(attackData);
    } catch (err) {
      console.error('Error fetching attack data:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // GET ALTERNATE follow-up data for a character
  router.get('/api/followup-data-ruby/:characterName', async (req, res) => {
    const characterName = req.params.characterName;
    try {
      const followupData = await sequelize.query(`
        SELECT AttackID, AttackName, IconicFrame, DMG, BH, RH, StartUp, Active, Endlag, Mobility, MoveType, ChangeXv, ChangeYv, FrontRange
        FROM moveframedata mfd JOIN movestatsruby ms ON mfd.ID = ms.ID JOIN movement mv ON mfd.ID = mv.ID JOIN moveidentifier mi ON mfd.ID = mi.ID
        WHERE mfd.ID IN (SELECT ID FROM moveidentifier WHERE CharacterName = :characterName) AND Endlag IS NOT NULL AND MoveType NOT IN ('Bun','Slice','Ender','Counter');
      `, {
        replacements: { characterName },
        type: sequelize.QueryTypes.SELECT
      });
      res.json(followupData);
    } catch (err) {
      console.error('Error fetching follow-up data:', err);
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
