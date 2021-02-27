<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'newSeattleMedia' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '0<49SbKGr52^^R wprqY6l;e~yNWTeDlL{LZg%G4>V6IxC<Krdo+c7h{B/c8^qDx' );
define( 'SECURE_AUTH_KEY',  'Aaq|S8Z*jFe/(YviuQxc%F|@8W<BH-<4R3is}<}jS:dP)l=G+pi~$i5)jYl]yK0!' );
define( 'LOGGED_IN_KEY',    '0E-O[{blFn@>QVW!^1p:e$Tb=$6IcP!iRWCa*&xz;oA|TeUPy`8d+vl0A*tc8J{+' );
define( 'NONCE_KEY',        'M:ckka}y(CJ.Y<Z|ZT9^G*`$1tq3;hPZ,n-FchWLu)b/Un8Xkt-ogn|X1UQP_S1r' );
define( 'AUTH_SALT',        'An2Pl^%Q7J]67KT3*hYguWoCkOy,o84^`(t:*Ri63P=Fj@O3A)]SD<]T=<v4X>8c' );
define( 'SECURE_AUTH_SALT', 'G-$A4zu6G2Fkh>=Jti]Q+!On95h,|I~I7xkhYqB1Zvn;@Qo(7&01.fAB AJ,Qp|g' );
define( 'LOGGED_IN_SALT',   '6<rd*?gOu>lRO1QirvX6_(kXP0) Rg0{kekKoF-Mq1rdT w5Ih-2>}gBvpRa|`ov' );
define( 'NONCE_SALT',       '3<XLn3c{%/N.+zAX;:A_~`SJKivk=~>WSg1F0Eb|[6+XnuJ^]0ANo/Z`WssKI(U6' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
