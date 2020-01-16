<?php
/*
Plugin Name: Custom Tooltips
Description: Adds custom tooltips throughout this website using vanilla JS
Author: Chris Liu-Beers | Tomatillo Design
Author URI: http://www.tomatillodesign.com
Version: 1.0
*/


/* Start Adding Functions Below this Line */



if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'Definitions',
		'menu_title'	=> 'Definitions',
		'menu_slug' 	=> 'definitions',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
          'icon_url' => 'dashicons-clipboard', // Add this line and replace the second inverted commas with class of the icon you like
          'position' => 22
	));

}




add_action( 'wp_enqueue_scripts', 'clb_enqueue_custom_tooltip_scripts' );
function clb_enqueue_custom_tooltip_scripts() {

	if( is_singular( 'plants') ) {

	   wp_enqueue_script( 'custom-tooltips', WP_PLUGIN_URL . '/clb-custom-tooltips/js/tooltips.js', array('jquery'), '1.0.0', true );
	   wp_enqueue_style( 'custom-tooltips', WP_PLUGIN_URL . '/clb-custom-tooltips/css/tooltips.css' );

		// get vars
		$tooltips = get_field('definitions', 'option');

		// Hack wp_localize_script in order to get all terms and definitions into a JS object
		//wp_enqueue_script( 'super-heroine', get_stylesheet_directory_uri() . '/assets/js/super-heroine.js', array('jquery'), $version, true );

		wp_localize_script(
			'custom-tooltips',
			'tooltip_object',
			array(
					'tooltips' => $tooltips,
				)
		);

	}

}


function filter_ptags_on_images($content){
    return preg_replace('/<p>\\s*?(<a .*?><img.*?><\\/a>|<img.*?>)?\\s*<\\/p>/s', '\1', $content);
}
add_filter('the_content', 'filter_ptags_on_images');
