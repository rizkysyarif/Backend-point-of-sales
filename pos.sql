-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Nov 2019 pada 16.39
-- Versi server: 10.4.6-MariaDB
-- Versi PHP: 7.1.32

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
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name_category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `name_category`) VALUES
(1, 'Makanan'),
(2, 'Minuman'),
(3, 'Bumbu');

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `no_recipient` varchar(100) NOT NULL,
  `total_price` int(50) NOT NULL,
  `created_date` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `no_recipient`, `total_price`, `created_date`) VALUES
(1, '3085bf20-ebcf-11e9-bb54-ebab8df50272', 2500, '2019-09-25 02:31:11'),
(2, '2f51fd40-ebd3-11e9-9f97-73123972c1d3', 6000, '2019-09-26 02:59:47'),
(3, '46fef460-ec0b-11e9-8679-b7b31a0deff1', 5000, '2019-09-27 09:41:19'),
(4, 'c8609930-ec30-11e9-8160-093021818dac', 2500, '2019-09-28 14:09:47'),
(5, '0361bb40-ec31-11e9-8160-093021818dac', 2500, '2019-09-29 14:11:26'),
(6, '058892e0-ec31-11e9-8160-093021818dac', 3500, '2019-09-30 14:11:30'),
(7, '7a4a40b0-ec31-11e9-8160-093021818dac', 2500, '2019-10-01 14:14:46'),
(8, '0457be90-ec32-11e9-8160-093021818dac', 3000, '2019-10-02 14:18:37'),
(9, '669743a0-ec32-11e9-8160-093021818dac', 6000, '2019-10-03 14:21:22'),
(10, '6b09e000-ec32-11e9-8160-093021818dac', 1000, '2019-10-04 14:21:29'),
(11, '70807ee0-ec32-11e9-8160-093021818dac', 3500, '2019-10-05 14:21:39'),
(12, 'b79a3f50-ec32-11e9-8160-093021818dac', 5000, '2019-10-06 14:23:38'),
(13, 'e46bfb80-ec33-11e9-8160-093021818dac', 1000, '2019-10-07 14:32:03'),
(14, 'ea96cf30-ec33-11e9-8160-093021818dac', 3000, '2019-10-08 14:32:13'),
(15, 'ed561640-ec33-11e9-8160-093021818dac', 3500, '2019-10-09 14:32:18'),
(16, 'f1903d80-ec33-11e9-8160-093021818dac', 6000, '2019-10-10 14:32:25'),
(17, 'f4d68ee0-ec33-11e9-8160-093021818dac', 1000, '2019-10-11 14:32:30'),
(18, '1265f3f0-ec49-11e9-8294-4d5845de0b68', 2500, '2019-10-11 17:03:39'),
(19, '57ccad30-ec49-11e9-8294-4d5845de0b68', 0, '2019-10-11 17:05:36'),
(20, '697d2e10-ec49-11e9-8294-4d5845de0b68', 0, '2019-10-11 17:06:05'),
(21, '6eb5b280-ec49-11e9-8294-4d5845de0b68', 0, '2019-10-11 17:06:14'),
(22, '7ed11470-ec49-11e9-8294-4d5845de0b68', 0, '2019-10-11 17:06:41'),
(23, '85ee1050-ec49-11e9-8294-4d5845de0b68', 0, '2019-10-11 17:06:53'),
(24, '8d7bf670-ec49-11e9-8294-4d5845de0b68', 0, '2019-10-11 17:07:06'),
(25, '9b3329a0-ec49-11e9-8294-4d5845de0b68', 0, '2019-10-11 17:07:29'),
(26, 'd9684d90-ec49-11e9-8294-4d5845de0b68', 0, '2019-10-11 17:09:13'),
(27, '686e1290-ec4a-11e9-8294-4d5845de0b68', 3500, '2019-10-11 17:13:13'),
(28, '7ad957f0-ec4a-11e9-8294-4d5845de0b68', 3500, '2019-10-11 17:13:44'),
(29, '9e6d9eb0-ec4a-11e9-8294-4d5845de0b68', 3500, '2019-10-11 17:14:44'),
(30, '92db51e0-ec4b-11e9-8294-4d5845de0b68', 2500, '2019-10-11 17:21:34'),
(31, 'b0b31720-ec4b-11e9-8294-4d5845de0b68', 1000, '2019-10-11 17:22:24'),
(32, 'b7a44810-ec4b-11e9-8294-4d5845de0b68', 0, '2019-10-11 17:22:35'),
(33, '42711e50-ec4c-11e9-8294-4d5845de0b68', 5000, '2019-10-11 17:26:28'),
(34, '987a1cc0-ec4c-11e9-ace4-e5bf8ab33bcc', 2500, '2019-10-11 17:28:53'),
(35, 'b5f961c0-ec4c-11e9-ace4-e5bf8ab33bcc', 3500, '2019-10-11 17:29:42'),
(36, '1fe84230-ec4e-11e9-8cfa-2fb1e3a01dec', 2500, '2019-10-11 17:39:49'),
(37, '641a59c0-ec53-11e9-8cfa-2fb1e3a01dec', 2500, '2019-10-11 18:17:31'),
(38, '5c2ba410-ec55-11e9-8cfa-2fb1e3a01dec', 1000, '2019-10-11 18:31:37'),
(39, '276e8890-ec8d-11e9-8f57-f7efd2ec3cbb', 2500, '2019-11-17 01:11:00'),
(40, '32d38a30-ec94-11e9-8f57-f7efd2ec3cbb', 3500, '2019-11-18 02:01:26'),
(41, 'ae9c3d10-eca3-11e9-af58-0d008f0f2e50', 3500, '2019-11-10 03:52:16'),
(42, 'a0fc85b0-ecf4-11e9-a34d-23a51730a4a5', 10500, '2019-10-12 13:31:42'),
(43, '2c83dfd0-ed99-11e9-b9a3-672e540189a0', 3500, '2019-11-11 09:09:34'),
(44, '0c39eca0-ed9a-11e9-b9a3-672e540189a0', 6000, '2019-11-11 09:15:49'),
(45, 'e73d9720-eda9-11e9-bd72-1927b7759cfa', 1000, '2019-11-11 11:09:19'),
(46, 'e02dec00-ee49-11e9-87ae-7145c3827b8e', 1000, '2019-11-12 06:14:27'),
(47, 'f60707f0-ee49-11e9-87ae-7145c3827b8e', 3500, '2019-11-12 06:15:03'),
(48, '8f83e1c0-f0e6-11e9-9217-4dd50d7e2a41', 6000, '2019-11-13 14:01:05'),
(49, '92aa9d30-f0e6-11e9-9217-4dd50d7e2a41', 6000, '2019-11-13 14:01:10'),
(50, '24c4a710-f0e7-11e9-9217-4dd50d7e2a41', 9000, '2019-11-13 14:05:15'),
(51, 'aa5779f0-f1f2-11e9-b39b-d7086d34211d', 6000, '2019-11-13 22:00:15'),
(52, '43a6e0b0-0ac0-11ea-aaac-fd38b4adb176', 7000, '2019-11-19 11:32:27'),
(53, '2a863380-0ac3-11ea-aaac-fd38b4adb176', 5000, '2019-11-19 11:53:13'),
(54, '3c955470-0b9a-11ea-8d39-590747e27921', 3000, '2019-11-20 13:32:45'),
(55, 'c47e6940-0c2a-11ea-bd87-659274adb2b1', 6000, '2019-11-21 06:47:21');

-- --------------------------------------------------------

--
-- Struktur dari tabel `order_item`
--

CREATE TABLE `order_item` (
  `id` int(11) NOT NULL,
  `product_id` int(50) NOT NULL,
  `no_recipient` varchar(120) NOT NULL,
  `price_order` int(100) NOT NULL,
  `quantity` int(100) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `order_item`
--

INSERT INTO `order_item` (`id`, `product_id`, `no_recipient`, `price_order`, `quantity`, `create_date`) VALUES
(1, 21, '3085bf20-ebcf-11e9-bb54-ebab8df50272', 2500, 1, '2019-09-25 02:31:11'),
(2, 21, '2f51fd40-ebd3-11e9-9f97-73123972c1d3', 2500, 1, '2019-09-26 02:59:47'),
(3, 5, '2f51fd40-ebd3-11e9-9f97-73123972c1d3', 3500, 1, '2019-09-26 02:59:47'),
(4, 21, '46fef460-ec0b-11e9-8679-b7b31a0deff1', 5000, 2, '2019-09-27 09:41:19'),
(5, 21, 'c8609930-ec30-11e9-8160-093021818dac', 2500, 1, '2019-09-28 14:09:48'),
(6, 21, '0361bb40-ec31-11e9-8160-093021818dac', 2500, 1, '2019-09-29 14:11:26'),
(7, 5, '058892e0-ec31-11e9-8160-093021818dac', 3500, 1, '2019-09-30 14:11:30'),
(8, 21, '7a4a40b0-ec31-11e9-8160-093021818dac', 2500, 1, '2019-10-01 14:14:46'),
(9, 30, '0457be90-ec32-11e9-8160-093021818dac', 3000, 1, '2019-10-02 14:18:37'),
(10, 4, '669743a0-ec32-11e9-8160-093021818dac', 6000, 1, '2019-10-03 14:21:22'),
(11, 3, '6b09e000-ec32-11e9-8160-093021818dac', 1000, 1, '2019-10-04 14:21:30'),
(12, 5, '70807ee0-ec32-11e9-8160-093021818dac', 3500, 1, '2019-10-05 14:21:39'),
(13, 23, 'b79a3f50-ec32-11e9-8160-093021818dac', 5000, 1, '2019-10-06 14:23:38'),
(14, 29, 'e46bfb80-ec33-11e9-8160-093021818dac', 1000, 1, '2019-10-07 14:32:03'),
(15, 26, 'ea96cf30-ec33-11e9-8160-093021818dac', 3000, 1, '2019-10-08 14:32:13'),
(16, 5, 'ed561640-ec33-11e9-8160-093021818dac', 3500, 1, '2019-10-09 14:32:18'),
(17, 4, 'f1903d80-ec33-11e9-8160-093021818dac', 6000, 1, '2019-10-10 14:32:25'),
(18, 3, 'f4d68ee0-ec33-11e9-8160-093021818dac', 1000, 1, '2019-10-11 14:32:30'),
(19, 21, '1265f3f0-ec49-11e9-8294-4d5845de0b68', 2500, 1, '2019-10-11 17:03:39'),
(20, 5, '686e1290-ec4a-11e9-8294-4d5845de0b68', 3500, 1, '2019-10-11 17:13:13'),
(21, 5, '7ad957f0-ec4a-11e9-8294-4d5845de0b68', 3500, 1, '2019-10-11 17:13:44'),
(22, 5, '9e6d9eb0-ec4a-11e9-8294-4d5845de0b68', 3500, 1, '2019-10-11 17:14:44'),
(23, 21, '92db51e0-ec4b-11e9-8294-4d5845de0b68', 2500, 1, '2019-10-11 17:21:34'),
(24, 3, 'b0b31720-ec4b-11e9-8294-4d5845de0b68', 1000, 1, '2019-10-11 17:22:24'),
(25, 23, '42711e50-ec4c-11e9-8294-4d5845de0b68', 5000, 1, '2019-10-11 17:26:28'),
(26, 21, '987a1cc0-ec4c-11e9-ace4-e5bf8ab33bcc', 2500, 1, '2019-10-11 17:28:53'),
(27, 5, 'b5f961c0-ec4c-11e9-ace4-e5bf8ab33bcc', 3500, 1, '2019-10-11 17:29:42'),
(28, 21, '1fe84230-ec4e-11e9-8cfa-2fb1e3a01dec', 2500, 1, '2019-10-11 17:39:49'),
(29, 21, '641a59c0-ec53-11e9-8cfa-2fb1e3a01dec', 2500, 1, '2019-10-11 18:17:31'),
(30, 3, '5c2ba410-ec55-11e9-8cfa-2fb1e3a01dec', 1000, 1, '2019-10-11 18:31:37'),
(31, 21, '276e8890-ec8d-11e9-8f57-f7efd2ec3cbb', 2500, 1, '2019-11-17 01:11:00'),
(32, 5, '32d38a30-ec94-11e9-8f57-f7efd2ec3cbb', 3500, 1, '2019-11-18 02:01:26'),
(33, 5, 'ae9c3d10-eca3-11e9-af58-0d008f0f2e50', 3500, 1, '2019-11-10 03:52:16'),
(34, 5, 'a0fc85b0-ecf4-11e9-a34d-23a51730a4a5', 3500, 1, '2019-10-12 13:31:42'),
(35, 4, 'a0fc85b0-ecf4-11e9-a34d-23a51730a4a5', 6000, 1, '2019-10-12 13:31:42'),
(36, 3, 'a0fc85b0-ecf4-11e9-a34d-23a51730a4a5', 1000, 1, '2019-10-12 13:31:42'),
(37, 5, '2c83dfd0-ed99-11e9-b9a3-672e540189a0', 3500, 1, '2019-11-11 09:09:34'),
(38, 4, '0c39eca0-ed9a-11e9-b9a3-672e540189a0', 6000, 1, '2019-11-11 09:15:49'),
(39, 3, 'e73d9720-eda9-11e9-bd72-1927b7759cfa', 1000, 1, '2019-11-11 11:09:19'),
(40, 3, 'e02dec00-ee49-11e9-87ae-7145c3827b8e', 1000, 1, '2019-11-12 06:14:27'),
(41, 5, 'f60707f0-ee49-11e9-87ae-7145c3827b8e', 3500, 1, '2019-11-12 06:15:03'),
(42, 5, '8f83e1c0-f0e6-11e9-9217-4dd50d7e2a41', 3500, 1, '2019-11-13 14:01:05'),
(43, 21, '8f83e1c0-f0e6-11e9-9217-4dd50d7e2a41', 2500, 1, '2019-11-13 14:01:05'),
(44, 4, '92aa9d30-f0e6-11e9-9217-4dd50d7e2a41', 6000, 1, '2019-11-13 14:01:10'),
(45, 23, '24c4a710-f0e7-11e9-9217-4dd50d7e2a41', 5000, 1, '2019-11-13 14:05:15'),
(46, 26, '24c4a710-f0e7-11e9-9217-4dd50d7e2a41', 3000, 1, '2019-11-13 14:05:15'),
(47, 29, '24c4a710-f0e7-11e9-9217-4dd50d7e2a41', 1000, 1, '2019-11-13 14:05:15'),
(48, 21, 'aa5779f0-f1f2-11e9-b39b-d7086d34211d', 2500, 1, '2019-11-13 22:00:15'),
(49, 5, 'aa5779f0-f1f2-11e9-b39b-d7086d34211d', 3500, 1, '2019-11-13 22:00:15'),
(50, 4, '43a6e0b0-0ac0-11ea-aaac-fd38b4adb176', 6000, 1, '2019-11-19 11:32:27'),
(51, 3, '43a6e0b0-0ac0-11ea-aaac-fd38b4adb176', 1000, 1, '2019-11-19 11:32:27'),
(52, 23, '2a863380-0ac3-11ea-aaac-fd38b4adb176', 5000, 1, '2019-11-19 11:53:13'),
(53, 35, '3c955470-0b9a-11ea-8d39-590747e27921', 3000, 1, '2019-11-20 13:32:45'),
(54, 21, 'c47e6940-0c2a-11ea-bd87-659274adb2b1', 2500, 1, '2019-11-21 06:47:22'),
(55, 5, 'c47e6940-0c2a-11ea-bd87-659274adb2b1', 3500, 1, '2019-11-21 06:47:22');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
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
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `image`, `category`, `price`, `date_added`, `date_update`, `count`) VALUES
(3, 'Teh Gelas', 'Menyegarkan', '5f433f58-6ae1-41cd-814b-bdd363458570.jpeg', '2', 1000, '2019-09-24 12:27:58', '2019-11-20 14:01:12', 12),
(4, 'Pucuk Harum', 'Menghilangkan Dahaga dan Gak Nyangkut Di Leher', '17e118e1-55c2-430f-b4d4-992c17935285.jpeg', '2', 6000, '2019-09-24 12:27:58', '2019-10-08 12:03:24', 15),
(5, 'Indomie', 'Enak', '265d0fac-7892-4c73-a742-4dd778ea9a86.jpeg', '1', 3500, '2019-09-24 12:31:58', '2019-11-20 14:01:02', 11),
(21, 'Lays', 'Enak', 'd68d5576-b85b-4d36-8d46-6ace3efe40d3.jpeg', '1', 2500, '2019-10-03 06:15:02', NULL, 15),
(23, 'Pepsi', 'Menyegarkan', '39051e79-8377-4770-b5f5-fca6725feadd.jpeg', '2', 5000, '2019-10-03 06:16:22', NULL, 19),
(26, 'Sarimi Isi Duo', 'Enak', 'b610079d-cad9-4ebd-baa3-24e88df2c1b3.jpeg', '1', 3000, '2019-10-03 06:18:38', NULL, 29),
(29, 'pilus', 'garuda', '7f2c967b-d6f4-4ec8-829f-20771a057611.jpeg', '1', 1000, '2019-10-07 11:44:21', NULL, 12),
(35, 'Better', 'enak', 'abb5fe01-1421-4917-9585-f98555ed8201.png', '1', 3000, '2019-10-17 03:43:22', NULL, 5);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'rizky@gmail.com', '123456'),
(17, 'rizky11@gmail.com', '11');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT untuk tabel `order_item`
--
ALTER TABLE `order_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
