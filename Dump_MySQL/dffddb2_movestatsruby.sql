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
-- Table structure for table `movestatsruby`
--

DROP TABLE IF EXISTS `movestatsruby`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movestatsruby` (
  `ID` int NOT NULL,
  `DMG` double DEFAULT NULL,
  `BK` double DEFAULT NULL,
  `RK` double DEFAULT NULL,
  `BH` double DEFAULT NULL,
  `RH` double DEFAULT NULL,
  `AK` int DEFAULT NULL,
  `HI` int DEFAULT NULL,
  `TK` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  CONSTRAINT `movestatsrubyID` FOREIGN KEY (`ID`) REFERENCES `moveidentifier` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movestatsruby`
--

LOCK TABLES `movestatsruby` WRITE;
/*!40000 ALTER TABLE `movestatsruby` DISABLE KEYS */;
INSERT INTO `movestatsruby` VALUES (1,4,2,1,2,1,0,4,'Direction'),(2,8,3,3.7,3,3,30,4,'Direction'),(3,10,2,4,2,3.5,-90,5,'Away'),(4,8,3,1,2,2,45,13,'Away'),(5,4,2,3,4,1,85,6,'Direction'),(6,15,3,3,3,3,45,10,'Away'),(7,15,5,1,5,1,20,8,'Away'),(8,8,5,0,4,2,85,5,'Away'),(9,1,6,0,1,5,120,1,'Away'),(10,20,0,0,0,0,0,8,'Direction'),(11,16,4,2,3,3,-75,5,'Direction'),(12,20,0,0,0,0,0,8,'Direction'),(13,13,6,0,1,5,120,13,'Away'),(15,1,6,0,1,5,120,1,'Away'),(16,3,2,2,2,3,0,1,'Away'),(17,9,3,2,2,3,120,5,'Direction'),(18,18,1,4,1.5,3.5,20,4,'Away'),(19,18,3,2,3,2,-45,2,'Away'),(20,15,3,2.5,2,3,60,4,'Direction'),(21,6,2,0,5,4,190,1,'Direction'),(22,12,2,5,5,3,-45,4,'Away'),(23,23,5,1,3,4,135,5,'Direction'),(24,13.5,3,1,2,2,-60,7,'Direction'),(25,50,0,0,7,0,0,4,'Vicious'),(26,19,4,1,4,1,45,10,'Direction'),(27,12,2,4,3,3,30,3,'Direction'),(28,-30,0,0,0,0,0,4,'Vicious'),(29,6,4,0,5,0,170,4,'Direction'),(30,-5,3,0,1,0,45,4,'Away'),(31,6,4,0,4,0,225,4,'Direction'),(32,5,4,0,1,0,45,4,'Vicious'),(33,25,2,0,3,0,90,4,'Away'),(34,10,5,0,2,0,120,4,'Away'),(35,0,14,0,0,0,10,4,'Away'),(36,-10,1,0,5,0,1,4,'Vicious'),(37,0,1,0,5,0,0,4,'Away'),(38,8,1,0,4,0,-90,4,'Vicious'),(39,10,5,0,4,0,120,4,'Direction'),(40,10,5,0,7,0,0,4,'Direction'),(41,30,1,0,1,0,0,6,'Away'),(43,3,2,2,2,3,0,1,'Away'),(45,2,1,0,2,1,135,2,'Away'),(46,10,3,2,3,2,-45,2,'Away'),(47,23,5,1,3,4,135,5,'Direction'),(48,2,1,1,3,2,0,2,'Direction'),(49,11,0,0,2,3,0,4,'Vicious'),(50,15,2,4,2,3,75,4,'Away'),(51,11,5,1,2,2.5,0,4,'Direction'),(52,20,2,0,2,4,160,4,'Away'),(53,17,2,4,3,2,30,4,'Direction'),(54,13.5,3,3,3,3,-70,12,'Away'),(55,1,5,2,10,0,-45,9,'Direction'),(56,8,3,1,3,2,45,4,'Direction'),(57,7,4,1,4,2,170,15,'Away'),(58,20,0,5,4,5,0,10,'Away'),(61,1,5,2,10,0,-45,9,'Direction'),(62,20,0,5,4,5,0,10,'Away'),(64,5,2,0,2,4,160,1,'Away'),(65,2,2,1,3,2,70,4,'Away'),(66,12,2,3,2,3,20,4,'Away'),(67,27,2,2,4,2,-15,4,'Direction'),(68,7,5,1,3,2,-45,5,'Away'),(69,8,6,0,2,2,55,4,'Direction'),(70,6,3,0,3,2,35,4,'Direction'),(71,14,3,2,1,4,-50,4,'Away'),(72,2,2,0,1,1,175,1,'Away'),(73,16,1,5,1,3,23,8,'Away'),(74,11,0,0,3,2,0,23,'Vicious'),(75,14,4,2,3,2,60,40,'Away'),(77,2,2,0,1,1,175,1,'Away'),(78,5,2,2.5,2,4,110,4,'Away'),(79,11,0,0,3,2,0,23,'Vicious'),(80,11,0,0,3,2,0,23,'Vicious'),(81,11,0,0,3,2,0,23,'Vicious'),(82,11,0,0,3,2,0,23,'Vicious'),(85,23.35,6.5,4,5,0,20,1,'Away'),(86,5,4,1,4,2,135,4,'Direction'),(87,9,4,0,2,2,170,1,'Away'),(88,19.5,6,0,2,5,100,4,'Direction'),(89,18,4,0,3,2.25,-75,1,'Away'),(90,9,2,0,3,1,185,1,'Away'),(91,9,3,2,3,2,235,4,'Direction'),(92,9,2,0,3,1,175,1,'Away'),(93,10,4,3,2,3.5,30,4,'Direction'),(94,0,0.5,0,0,0,90,0,'Away'),(95,3,6,0,4,3.25,5,1,'Away'),(96,7,0,0,2,1,0,8,'Vicious'),(97,10,1,4,3,3,20,4,'Direction'),(98,6,2,4,2,4,-85,4,'Direction'),(99,6,1.5,3,3,3,95,4,'Direction'),(101,2.5,2,0,3,2,170,1,'Away'),(102,9,4.5,1,4,2,110,5,'Away'),(103,16,5,3,4,3,35,5,'Away'),(104,11,3.5,2,3,3,-30,5,'Direction'),(105,13.5,4.2,1.2,3,3,25,10,'Away'),(106,8.5,4,1.4,2,3,130,5,'Away'),(107,9.5,3,2,2,3.5,-10,5,'Direction'),(108,15,3,3.5,1,4,30,5,'Away'),(109,25,4,4,3,3,35,5,'Away'),(110,3,6,0,6,0,120,1,'Away'),(111,6,0,0,3,2,0,10,'Vicious'),(112,12,2,4,2,4,10,5,'Away'),(113,3,2,0,3,4,105,1,'Away'),(114,10,0.5,0,3,5,0,10,'Direction'),(116,12,2,4,2,4,10,5,'Away'),(117,12,2,0,3,4,105,4,'Away'),(119,3,2,0,3,4,105,1,'Away');
/*!40000 ALTER TABLE `movestatsruby` ENABLE KEYS */;
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
