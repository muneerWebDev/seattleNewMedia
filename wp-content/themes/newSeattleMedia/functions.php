<?php


function theme_assets()
{
    wp_enqueue_style('theme-style', get_stylesheet_uri());
    wp_enqueue_style('main-css', get_template_directory_uri() . '/assets/css/style.css');

    wp_enqueue_script('jquery', get_template_directory_uri() . '/assets/js/jquery.min.js');
    wp_enqueue_script('locomotive-scroll', get_template_directory_uri() . '/assets/js/locomotive-scroll.min.js');
    wp_enqueue_script('custom-js', get_template_directory_uri() . '/assets/js/custom.js');
}

add_action('wp_enqueue_scripts', 'theme_assets');


//custom wordpress registrations
add_theme_support( 'menus' );