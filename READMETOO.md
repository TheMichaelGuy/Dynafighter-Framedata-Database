# Sample Queries

Moves and their FrameData

SELECT * FROM moveidentifier mi JOIN moveframedata mfd ON mi.ID = mfd.ID;

Moves that Outrange Glider Swipe

SELECT CharacterName, AttackName, FrontRange FROM dffddb.moveidentifier NATURAL JOIN dffddb.movement
WHERE FrontRange > (SELECT FrontRange FROM dffddb.movement WHERE ID = 91);

FrontRange organized from greatest to least

SELECT DISTINCT CharacterName, AttackName, FrontRange FROM dffddb.moveidentifier NATURAL JOIN dffddb.movement
ORDER BY FrontRange DESC;

StartUp

SELECT DISTINCT CharacterName, AttackName, StartUp FROM dffddb.moveidentifier NATURAL JOIN dffddb.moveframedata
WHERE (AttackID < 12) AND (StartUp IS NOT NULL)
ORDER BY Startup;

Fastest Move’s Startup

SELECT DISTINCT MIN(StartUp),CharacterName FROM dffddb.moveidentifier NATURAL JOIN dffddb.moveframedata
WHERE (AttackID < 12) AND (StartUp IS NOT NULL)
GROUP BY CharacterName;

Frame Data Display Query for S.Might

SELECT mi.AttackName, mfd.*, ms.*, mv.FrontRange         FROM moveframedata mfd         JOIN moveidentifier mi ON mfd.ID = mi.ID         JOIN movestats ms ON mfd.ID = ms.ID         JOIN movement mv ON mfd.ID = mv.ID         WHERE CharacterName = 'S.Might'         AND (mi.AttackID < 12 OR mi.AttackName          IN (SELECT AttackName FROM moveidentifier mi2             JOIN moveframedata mfd2 ON mi2.ID = mfd2.ID             WHERE LinksTo IS NOT NULL AND MoveType IN ('Linkhit','Slashbolt','Counter','Stutter')))

Battle Calculator Knockback Query for Edge

SELECT AttackName, AttackID, IconicFrame, DMG, BK, RK, BH, RH, AK, TK         FROM movestats ms JOIN moveidentifier mi ON ms.ID = mi.ID         WHERE mi.CharacterName = 'Edge';
Battle Calculator Followup Query for Kicker

SELECT AttackID, AttackName, IconicFrame, DMG, BH, RH, StartUp, Active, Endlag, Mobility, MoveType, ChangeXv, ChangeYv, FrontRange         FROM moveframedata mfd JOIN movestats ms ON mfd.ID = ms.ID JOIN movement mv ON mfd.ID = mv.ID JOIN moveidentifier mi ON mfd.ID = mi.ID         WHERE mfd.ID IN (SELECT ID FROM moveidentifier WHERE CharacterName = 'Kicker') AND Endlag IS NOT NULL AND MoveType NOT IN ('Bun','Slice','Ender','Counter');
