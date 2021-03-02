<?php

/**
 * The header for our theme.
 *
 * @package newSeattleMedia
 *
 */
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- <link rel="preload" href="<?php echo get_template_directory_uri() ?>/assets/fonts/poppins/Poppins-Bold.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="<?php echo get_template_directory_uri() ?>/assets/fonts/poppins/Poppins-Medium.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="<?php echo get_template_directory_uri() ?>/assets/fonts/poppins/Poppins-Light.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="<?php echo get_template_directory_uri() ?>/assets/fonts/poppins/Poppins-Regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="<?php echo get_template_directory_uri() ?>/assets/fonts/poppins/Poppins-ExtraLight.woff2" as="font" type="font/woff2" crossorigin> -->
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

    <div class="page-wrap">

        <header class="siteHeader">
            <div class="container header-container">
                <div class="logo">
                    <a href="<?php echo esc_url(home_url('/')); ?>" rel="home" class="navbar-brand">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/images/logo.png" class="img-fluid">
                    </a>
                </div>
                <div class="navbar">
                    <?php
                    $menuParameters = array(
                        "menu" => "Top Menu",
                        'container'            => 'ul',
                        'menu_class'           => 'menu',
                        'echo'                 => true,
                        'fallback_cb'          => 'wp_page_menu',
                        'items_wrap'           => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                        'depth'                => 2,
                    );
                    ?>
                    <?php echo wp_nav_menu($menuParameters); ?>
                    <div class="social">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                <button id="navTrigger">
                    <span class="hamburger"></span>
                </button>
            </div>
        </header>