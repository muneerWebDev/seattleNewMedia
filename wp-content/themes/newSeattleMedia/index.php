<?php

/**
 *
 * @package newSeattleMedia
 */

get_header(); ?>

<?php
if (have_posts()) : while (have_posts()) : the_post(); ?>


        <main>

            <section id="post-<?php the_ID(); ?>">
                <div class="container">
                    <h2><?php the_title(); ?></h2>
                    <div class="post-excerpt"><?php the_excerpt(); ?></div>
                </div>
            </section>

        </main>

<?php endwhile;
endif;
?>

<?php get_footer(); ?>