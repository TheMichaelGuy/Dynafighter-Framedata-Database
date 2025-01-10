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
-- Table structure for table `movestats`
--

DROP TABLE IF EXISTS `movestats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movestats` (
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
  CONSTRAINT `movestatsID` FOREIGN KEY (`ID`) REFERENCES `moveidentifier` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movestats`
--

LOCK TABLES `movestats` WRITE;
/*!40000 ALTER TABLE `movestats` DISABLE KEYS */;
INSERT INTO `movestats` VALUES (1,3,1,1,1,0,42,4,'Direction'),(2,5,2,3,2,3,27,4,'Direction'),(3,10,2,4,2,3.5,60,5,'Direction'),(4,11,1,1,1,3,30,13,'Direction'),(5,6,3,1.7,2,2.5,55,6,'Direction'),(6,16,3,5,2,3,30,10,'Direction'),(7,25,2,2,4,2,-15,8,'Direction'),(8,7.5,2,2,3,2,0,5,'Direction'),(9,20,4,3,2,2,-70,13,'Direction'),(10,5,1,1,2,1,52,8,'Direction'),(11,17,2,3,3,3,-45,5,'Direction'),(12,5,1,1,2,1,52,8,'Direction'),(16,1,1,0,2,1,1,1,'Away'),(17,10,3,2,2,3,35,5,'Away'),(18,4,1,1,6,1,10,4,'Direction'),(19,16,2,4,1,2.5,45,2,'Direction'),(20,5,3,3,1,4,75,4,'Away'),(21,6,2,0,2,2,20,1,'Away'),(22,15,3,1,1,4,-75,4,'Away'),(23,30,3,5,2,3,25,5,'Direction'),(24,17.5,4,1,2,3,60,7,'Direction'),(25,0,0,0,0,0,0,4,'Direction'),(26,22.5,1,1,4,1,45,10,'Away'),(27,10,2,3,2,3,40,3,'Direction'),(28,-20,0,0,0,0,720,4,'Direction'),(29,6,5,0,4,0,170,4,'Direction'),(30,1,1,0,1,0,45,4,'Direction'),(31,3,2,0,4,0,225,4,'Direction'),(32,5,2,0,1,0,45,4,'Direction'),(33,5,2,0,1,0,45,4,'Direction'),(34,10,6,0,2,0,90,4,'Direction'),(35,21,15,0,0,0,23,4,'Direction'),(36,12,1,0,5,0,1,4,'Direction'),(37,6,1,0,1,0,0,4,'Direction'),(38,6,1,0,4,0,-90,4,'Direction'),(39,17,5,0,3,0,120,4,'Direction'),(40,9,1,0,7,0,0,4,'Direction'),(41,40,1,0,1,0,0,6,'Direction'),(43,1,1,0,2,1,1,1,'Away'),(45,2.75,0,3,2,0,135,2,'Away'),(46,5,2,4,1,2.5,45,2,'Direction'),(47,30,3,5,2,3,25,5,'Direction'),(48,1,1,1,2,2,70,2,'Direction'),(49,18,3,5,2,3,30,4,'Away'),(50,5,6,2,3,1,0,4,'Direction'),(51,11.5,3,1,2,3.5,87,4,'Away'),(52,25,3,3,2,3,60,5,'Away'),(53,3,5,2,1,3,20,4,'Away'),(54,18,1,1,1,1,180,1,'Away'),(55,40.5,1,0,5,6,0,9,'Away'),(56,10,1,3,2,2,-30,4,'Direction'),(57,8,2,3,2,3,45,8,'Direction'),(58,10,3,2,4,2,45,4,'Away'),(60,3,1,1,1,1,180,1,'Away'),(61,40.5,1,0,5,6,0,9,'Away'),(62,10,3,2,4,2,45,4,'Away'),(65,3,1,1,3,2,15,4,'Direction'),(66,15,3,2,3,1,37,4,'Direction'),(67,16,1,1,1,5,-30,4,'Direction'),(68,8,4,3,2,2,25,5,'Away'),(69,10,5,0.75,2,3,90,4,'Direction'),(70,15,0,0,3,2,720,4,'Vicious'),(71,12,2,5,5,3,-90,4,'Direction'),(72,24,2,2,2,2.5,20,4,'Direction'),(73,13.5,3,5,4,3.5,-60,8,'Away'),(74,9.5,3,2,2,2,-110,7,'Direction'),(75,22.5,5,2,5,1,90,1,'Direction'),(77,1,1,1,1,1,180,1,'Away'),(78,20,2,2,2,2.5,20,4,'Direction'),(79,9.5,3,2,2,2,-110,7,'Direction'),(80,9.5,3,2,2,2,-110,7,'Direction'),(81,9.5,3,2,2,2,-110,7,'Direction'),(82,9.5,3,2,2,2,-110,7,'Direction'),(84,1,1,1,1,1,170,1,'Away'),(85,2.5,5,2,5,1,90,1,'Direction'),(86,1,1,1,1,1,30,4,'Away'),(87,5,4,0,2,2,170,1,'Away'),(88,10,2,1,5,3.5,0,4,'Away'),(89,15,2,0,3,2,170,1,'Away'),(90,7,2,0,3,1,185,1,'Away'),(91,12,3,3,3,3,40,4,'Direction'),(92,7,3,0,3,1,175,1,'Away'),(93,8.5,3,2,3,2,50,4,'Away'),(94,0,7,0,0,0,90,0,'Direction'),(95,10,2,2,4,4,80,4,'Direction'),(96,6.5,1,1,1,1,5,4,'Away'),(97,7,3,3,2,2,25,4,'Away'),(98,17.5,1,4,3,3,75,4,'Direction'),(99,17.5,1,4,3,3,-75,4,'Direction'),(101,2.5,2,0,3,2,170,1,'Away'),(102,10,2,3,2,3,98,5,'Away'),(103,21.3,1,4.5,1.5,3.5,20,5,'Direction'),(104,8,3,1,3,3,70,5,'Away'),(105,6,2,1,3,3,150,4,'Away'),(106,10.5,2,2.5,2,4,80,5,'Direction'),(107,9,3,1,2,4,55,5,'Direction'),(108,12,3,3,1,4,-80,5,'Direction'),(109,10,0.5,0,3,5,361,5,'Direction'),(110,17,2.5,4,1,3.5,25,5,'Away'),(111,4,0,2.5,0,2.5,60,10,'Away'),(112,16,5,1,5,1,50,5,'Away'),(113,6,1,1,3,1,50,5,'Away'),(114,25,4,4,3,3,35,10,'Direction'),(115,6,2,1,3,3,150,4,'Away'),(116,16,5,1,5,2,50,5,'Away'),(120,12,3,1,1,5,3,4,'Direction');
/*!40000 ALTER TABLE `movestats` ENABLE KEYS */;
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
