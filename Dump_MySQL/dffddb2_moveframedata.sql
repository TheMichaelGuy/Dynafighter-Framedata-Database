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
-- Table structure for table `moveframedata`
--

DROP TABLE IF EXISTS `moveframedata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moveframedata` (
  `ID` int NOT NULL,
  `StartUp` int DEFAULT NULL,
  `Active` int DEFAULT NULL,
  `Endlag` int DEFAULT NULL,
  `Mobility` double DEFAULT NULL,
  `MoveType` varchar(20) DEFAULT NULL,
  `LinksTo` int DEFAULT NULL,
  `InputType` varchar(7) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  CONSTRAINT `moveframedataID` FOREIGN KEY (`ID`) REFERENCES `moveidentifier` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moveframedata`
--

LOCK TABLES `moveframedata` WRITE;
/*!40000 ALTER TABLE `moveframedata` DISABLE KEYS */;
INSERT INTO `moveframedata` VALUES (1,2,4,0,0,'Hit',NULL,'Ground'),(2,6,4,0,0.05,'Hit',NULL,'Ground'),(3,8,5,2,0,'Hit',NULL,'Ground'),(4,3,13,0,1,'Hit',NULL,'Air'),(5,1,2,4,0.5,'Hit',NULL,'Air'),(6,3,10,11,0.05,'Side Air Kick',NULL,'Air'),(7,4,6,8,0.5,'Hit',NULL,'Air'),(8,1,5,5,0,'Hit',NULL,'Special'),(9,5,13,0,0.2,'Recovery',NULL,'Special'),(10,3,8,6,0.75,'Hit',NULL,'Special'),(11,7,5,6,0.25,'Hit',NULL,'Special'),(12,3,8,6,0.75,'Hit',NULL,'Special'),(16,3,1,3,0,'Bullet Punch',NULL,'Ground'),(17,2,4,10,0.75,'Dashing Kick',NULL,'Ground'),(18,3,2,10,0.1,'Hit',NULL,'Ground'),(19,4,9,2,0.75,'FULL',NULL,'Air'),(20,4,2,8,0.5,'Hit',NULL,'Air'),(21,4,1,NULL,1,'Linkhit',12,'Air'),(22,6,2,8,0.5,'Hit',NULL,'Air'),(23,18,5,11,0.2,'Hit',NULL,'Special'),(24,2,7,4,0.2,'Recovery',NULL,'Special'),(25,7,NULL,NULL,0.25,'Magic Trick',NULL,'Special'),(26,14,30,10,0,'Projectile',1,'Special'),(27,2,2,4,NULL,'Hit',NULL,'Air'),(28,NULL,4,8,NULL,'Hit',NULL,'Special'),(29,NULL,4,8,NULL,'Trick',2,'Special'),(30,NULL,4,8,NULL,'Hit',NULL,'Special'),(31,NULL,4,8,NULL,'Trick',1,'Special'),(32,NULL,4,8,NULL,'Trick',3,'Special'),(33,NULL,4,8,NULL,'Hit',NULL,'Special'),(34,NULL,4,8,NULL,'Trick',4,'Special'),(35,NULL,4,8,NULL,'Hit',NULL,'Special'),(36,NULL,4,8,NULL,'Hit',NULL,'Special'),(37,NULL,4,8,NULL,'Hit',NULL,'Special'),(38,NULL,4,8,NULL,'Hit',NULL,'Special'),(39,NULL,4,8,NULL,'Hit',NULL,'Special'),(40,NULL,4,8,NULL,'Hit',NULL,'Special'),(41,NULL,4,8,NULL,'Trick',5,'Special'),(43,1,2,NULL,NULL,'Slice',0,'Ground'),(45,1,1,NULL,NULL,'Slice',4,'Air'),(46,1,1,2,NULL,'Ender',NULL,'Air'),(47,18,5,11,0.2,'Hit',NULL,'Special'),(48,3,1,3,0,'Hit',NULL,'Ground'),(49,6,4,7,1,'Hit',NULL,'Ground'),(50,2,2,7,0.05,'Hit',NULL,'Ground'),(51,4,3,3,1,'Hit',NULL,'Air'),(52,4,4,11,0.5,'Hit',NULL,'Air'),(53,3,1,10,1,'Hit',NULL,'Air'),(54,3,12,2,0.5,'FULL',NULL,'Air'),(55,12,1,NULL,0,'Linkhit',14,'Special'),(56,2,5,6,0.3,'Graceful Leap',NULL,'Special'),(57,5,15,16,1,'Projectile',2,'Special'),(58,3,13,16,NULL,'Counter',15,'Special'),(60,1,1,NULL,NULL,'Slice',6,'Air'),(61,3,5,28,NULL,'Hit',NULL,'Special'),(62,NULL,5,0,NULL,'Hit',NULL,'Special'),(65,1,2,6,0,'Hit',NULL,'Ground'),(66,3,2,10,0,'Stutter',NULL,'Ground'),(67,6,2,10,0.5,'Hit',NULL,'Ground'),(68,3,5,6,1,'Hit',NULL,'Air'),(69,2,3,11,1,'Hit',NULL,'Air'),(70,2,3,5,1,'Hit',NULL,'Air'),(71,6,4,5,0.75,'Hit',NULL,'Air'),(72,3,11,5,0,'FULL',NULL,'Special'),(73,2,4,6,1,'Stepping Stones',NULL,'Special'),(74,6,7,10,0,'Quick Redirection',NULL,'Special'),(75,7,40,8,1.5,'FULL',NULL,'Special'),(77,1,1,NULL,NULL,'Slice',4,'Special'),(78,1,2,5,NULL,'Ender',NULL,'Special'),(79,6,7,10,0,'Quick Redirection',NULL,'Special'),(80,6,7,10,0,'Quick Redirection',NULL,'Special'),(81,6,7,10,0,'Quick Redirection',NULL,'Special'),(82,6,7,10,0,'Quick Redirection',NULL,'Special'),(84,1,1,NULL,NULL,'Slice',20,'Special'),(85,NULL,1,8,NULL,'Ender',NULL,'Special'),(86,3,2,5,0,'Hit',NULL,'Ground'),(87,3,1,NULL,0,'Linkhit',12,'Ground'),(88,7,2,10,0,'Hit',NULL,'Ground'),(89,3,12,7,1,'FULL',NULL,'Air'),(90,4,1,NULL,0.75,'Linkhit',13,'Air'),(91,6,4,8,1.25,'Hit',NULL,'Air'),(92,4,1,NULL,0.75,'Linkhit',14,'Air'),(93,7,30,15,0.6,'Projectile',3,'Special'),(94,4,6,14,1.25,'Trampoline',NULL,'Special'),(95,11,7,10,0.3,'Dash',NULL,'Special'),(96,5,13,8,0.1,'Projectile',4,'Special'),(97,2,2,5,NULL,'Hit',NULL,'Ground'),(98,2,2,7,NULL,'Hit',NULL,'Air'),(99,2,2,7,NULL,'Hit',NULL,'Air'),(101,1,1,NULL,1,'Slice',6,'Air'),(102,3,3,11,0,'Hit',NULL,'Ground'),(103,7,2,13,0.05,'Hit',NULL,'Ground'),(104,3,2,5,0,'Hit',NULL,'Ground'),(105,3,3,NULL,1,'Linkhit',14,'Air'),(106,3,2,9,1,'Hit',NULL,'Air'),(107,2,2,12,1,'Hit',NULL,'Air'),(108,3,2,16,1,'Hit',NULL,'Air'),(109,25,3,7,0,'Slashbolt',13,'Special'),(110,2,1,NULL,0.5,'Stutter',12,'Special'),(111,8,7,8,0.3,'Dash',NULL,'Special'),(112,3,12,15,0.1,'Counter',15,'Special'),(113,NULL,3,14,NULL,'Recovery',NULL,'Special'),(114,NULL,50,NULL,NULL,'Projectile',5,'Special'),(115,2,4,10,NULL,'Hit',NULL,'Air'),(116,NULL,5,0,NULL,'Hit',NULL,'Special'),(120,5,3,13,NULL,'Hit',NULL,'Ground');
/*!40000 ALTER TABLE `moveframedata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-30 18:35:32
