-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2019 at 04:59 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name_category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name_category`) VALUES
(1, 'Makanan'),
(2, 'Elektronik');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `date_added` timestamp NULL DEFAULT current_timestamp(),
  `date_update` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `count` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `image`, `category`, `price`, `date_added`, `date_update`, `count`) VALUES
(2, 'Ale-Ale', 'Melegakan dahaga', '1617c324-c11e-4fa3-9cc2-8b07ffff4eca.jpeg', '1', 1000, '2019-09-24 03:43:30', '2019-09-27 04:24:53', 20),
(3, 'laptop', 'baru beli', 'dhad', '2', 10000000, '2019-09-24 12:27:58', '2019-09-26 04:47:20', 6),
(4, 'Smartphone', 'Barang masih bagus', '', '2', 5000000, '2019-09-24 12:27:58', '2019-09-27 03:06:02', 10),
(5, 'Ale', 'baru beli', 'gambar', '1', 10000000, '2019-09-24 12:31:58', '2019-09-27 14:49:08', 5),
(6, 'TV', 'Baru', 'kadkja', '2', 200000, '2019-09-25 12:48:38', NULL, 10),
(7, 'Roti', 'Enak', 'dkajewdk', '1', 1000, '2019-09-25 12:48:38', NULL, 11),
(8, 'lufi', 'danajba', 'ab2c225b-057a-4b1e-9f5d-3ab9143673f8.png', '1', 10000, '2019-09-25 15:35:23', NULL, 32),
(9, 'coba', 'danajba', 'd5d08d59-9eea-417f-a41d-746eb47dd056.png', '1', 10000, '2019-09-26 13:38:05', NULL, 100),
(10, 'coba', 'danajba', '2b42c08f-59c0-4684-a123-e595eeabbbf0.png', '1', 10000, '2019-09-27 02:28:35', NULL, 100),
(11, 'coba', 'danajba', 'f5c7e505-5816-4c48-8338-252f646213de.png', '1', 10000, '2019-09-27 02:28:53', NULL, 100),
(12, 'Mountea', 'Melegakan dahaga', '6abfd0ec-39fe-4e51-9375-2a8ceda0256b.jpeg', '1', 1000, '2019-09-27 03:54:06', NULL, 20);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'rizky@gmail.com', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
