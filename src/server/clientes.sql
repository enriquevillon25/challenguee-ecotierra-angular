-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-07-2020 a las 04:13:57
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clientes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `precio` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `nombre`, `precio`) VALUES
(1, 'televisor', '1100.00'),
(2, 'celular', '800.00'),
(3, 'refrigeradora', '1000.00'),
(4, 'cocina', '800.00'),
(5, 'mueble', '1100.00'),
(6, 'cama', '1000.00'),
(7, 'silla', '600.00'),
(8, 'escritorio', '400.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos_compra`
--

CREATE TABLE `articulos_compra` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idArticulo` bigint(20) UNSIGNED NOT NULL,
  `idCompra` bigint(20) UNSIGNED NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `articulos_compra`
--

INSERT INTO `articulos_compra` (`id`, `idArticulo`, `idCompra`, `cantidad`) VALUES
(4, 7, 4, 2),
(9, 1, 14, 1),
(10, 4, 14, 1),
(11, 6, 14, 2),
(12, 1, 15, 2),
(13, 2, 15, 1),
(14, 7, 16, 2),
(15, 1, 17, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `edad` int(10) NOT NULL,
  `fechaNacimiento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `apellido`, `edad`, `fechaNacimiento`) VALUES
(11, 'Maria Gracia', 'Segura', 23, '1996-12-28'),
(12, 'Enrique', 'Villon', 23, '1997-03-25'),
(14, 'Jose', 'Villón', 20, '1999-02-25'),
(15, 'prueba', 'prueba', 20, '3000-02-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idCliente` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id`, `idCliente`) VALUES
(4, 11),
(14, 11),
(17, 11),
(3, 12),
(15, 14),
(16, 14);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `articulos_compra`
--
ALTER TABLE `articulos_compra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_articulo` (`idArticulo`),
  ADD KEY `fk_compra` (`idCompra`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cliente` (`idCliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `articulos_compra`
--
ALTER TABLE `articulos_compra`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `articulos_compra`
--
ALTER TABLE `articulos_compra`
  ADD CONSTRAINT `fk_articulo` FOREIGN KEY (`idArticulo`) REFERENCES `articulos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_compra` FOREIGN KEY (`idCompra`) REFERENCES `compras` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `fk_cliente` FOREIGN KEY (`idCliente`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
