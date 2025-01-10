-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: dffddb2
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `moveidentifier`
--

DROP TABLE IF EXISTS `moveidentifier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moveidentifier` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `CharacterName` varchar(20) NOT NULL,
  `AttackName` varchar(20) NOT NULL,
  `AttackID` int NOT NULL,
  `IconicFrame` int DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moveidentifier`
--

LOCK TABLES `moveidentifier` WRITE;
/*!40000 ALTER TABLE `moveidentifier` DISABLE KEYS */;
INSERT INTO `moveidentifier` VALUES (1,'Kicker','Punch',1,4),(2,'Kicker','Side Punch',2,3),(3,'Kicker','Down Kick',3,3),(4,'Kicker','Air Kick',4,2),(5,'Kicker','Up Kick',5,4),(6,'Kicker','Side Air Kick',6,2),(7,'Kicker','Drop Kick',7,3),(8,'Kicker','Shine',8,3),(9,'Kicker','Sky Uppercut',9,4),(10,'Kicker','Side Slide',10,3),(11,'Kicker','Dropping Kick',11,4),(12,'Kicker','Side Slide',12,NULL),(13,'Kicker','Sky Uppercut',13,NULL),(14,'Kicker','Sky Uppercut',14,NULL),(15,'Kicker','Sky Uppercut',15,NULL),(16,'Pop','Bullet Punch',1,3),(17,'Pop','Dashing Kick',2,3),(18,'Pop','Sweeping Kick',3,3),(19,'Pop','Excited Spin',4,2),(20,'Pop','Soaring Punch',5,3),(21,'Pop','Air Chop',6,4),(22,'Pop','Aerial Stomp',7,3),(23,'Pop','Shining Punch',8,4),(24,'Pop','Ascending Blow',9,3),(25,'Pop','Magic Trick',10,3),(26,'Pop','Bowling Ball',11,2),(27,'Pop','Air Chop',12,NULL),(28,'Pop','Magic Trick',13,NULL),(29,'Pop','Magic Trick',14,NULL),(30,'Pop','Magic Trick',15,NULL),(31,'Pop','Magic Trick',16,NULL),(32,'Pop','Magic Trick',17,NULL),(33,'Pop','Magic Trick',18,NULL),(34,'Pop','Magic Trick',19,NULL),(35,'Pop','Magic Trick',20,NULL),(36,'Pop','Magic Trick',21,NULL),(37,'Pop','Magic Trick',22,NULL),(38,'Pop','Magic Trick',23,NULL),(39,'Pop','Magic Trick',24,NULL),(40,'Pop','Magic Trick',25,NULL),(41,'Pop','Magic Trick',26,NULL),(42,'Pop','Bullet Punch',27,NULL),(43,'Pop','Bullet Punch',28,NULL),(44,'Pop','Excited Spin',29,NULL),(45,'Pop','Excited Spin',30,NULL),(46,'Pop','Excited Spin',31,NULL),(47,'Pop','Shining Punch',32,NULL),(48,'Augur','Light Punch',1,3),(49,'Augur','Aura Shove',2,4),(50,'Augur','Low Kick',3,3),(51,'Augur','Flame Pulse',4,3),(52,'Augur','Magic Kick',5,3),(53,'Augur','Jump Kick',6,3),(54,'Augur','Mystic Twirl',7,2),(55,'Augur','Charge Ball',8,4),(56,'Augur','Graceful Leap',9,3),(57,'Augur','Energy Launch',10,3),(58,'Augur','Counter',11,3),(59,'Augur','Mystic Twirl',12,NULL),(60,'Augur','Mystic Twirl',13,NULL),(61,'Augur','Charge Ball',14,NULL),(62,'Augur','Counter',15,NULL),(63,'Augur','Magic Kick',12,NULL),(64,'Augur','Magic Kick',13,NULL),(65,'Edge','Quick Slash',1,2),(66,'Edge','Side Slash',2,4),(67,'Edge','Brutal Bash',3,3),(68,'Edge','Side Kick',4,3),(69,'Edge','Up Claw',5,3),(70,'Edge','Vicious Claws',6,4),(71,'Edge','Slap Down',7,4),(72,'Edge','Rapid Slash',8,2),(73,'Edge','Stepping Stones',9,3),(74,'Edge','Quick Redirection',10,4),(75,'Edge','Personal Tornado',11,2),(76,'Edge','Rapid Slash',12,NULL),(77,'Edge','Rapid Slash',13,NULL),(78,'Edge','Rapid Slash',14,NULL),(79,'Edge','Quick Redirection',15,NULL),(80,'Edge','Quick Redirection',16,NULL),(81,'Edge','Quick Redirection',17,NULL),(82,'Edge','Quick Redirection',18,NULL),(83,'Edge','Personal Tornado',19,NULL),(84,'Edge','Personal Tornado',20,NULL),(85,'Edge','Personal Tornado',21,NULL),(86,'Sapphire','Weak Jab',1,2),(87,'Sapphire','Foot Swing Swipe',2,3),(88,'Sapphire','Boot Stomp',3,5),(89,'Sapphire','Ball Spin',4,3),(90,'Sapphire','Sapphire Bump',5,5),(91,'Sapphire','Glider Swipe',6,5),(92,'Sapphire','Sapphire Slam',7,4),(93,'Sapphire','Spike Lob',8,2),(94,'Sapphire','Trampoline',9,2),(95,'Sapphire','Invincidash',10,6),(96,'Sapphire','Shard Kick',11,2),(97,'Sapphire','Foot Swing Swipe',12,NULL),(98,'Sapphire','Sapphire Bump',13,NULL),(99,'Sapphire','Sapphire Slam',14,NULL),(100,'Sapphire','Ball Spin',15,NULL),(101,'Sapphire','Ball Spin',16,NULL),(102,'S.Might','Lofty Lift',1,4),(103,'S.Might','Silver Blade',2,4),(104,'S.Might','Swift Poke',3,2),(105,'S.Might','Slash Slice',4,5),(106,'S.Might','Sterling Strike',5,2),(107,'S.Might','Front Slash',6,2),(108,'S.Might','Kendair',7,3),(109,'S.Might','Slashbolt',8,3),(110,'S.Might','Pearly Pierce',9,3),(111,'S.Might','Blade Dash',10,2),(112,'S.Might','Counter',11,3),(113,'S.Might','Pearly Pierce',12,NULL),(114,'S.Might','Slashbolt',13,NULL),(115,'S.Might','Slash Slice',14,NULL),(116,'S.Might','Counter',15,NULL),(117,'S.Might','Pearly Pierce',13,NULL),(118,'S.Might','Pearly Pierce',14,NULL),(119,'S.Might','Pearly Pierce',15,NULL),(120,'S.Might','Test Attack',16,4),(121,'S.Might','Test Attack',17,NULL);
/*!40000 ALTER TABLE `moveidentifier` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-30 18:35:31
