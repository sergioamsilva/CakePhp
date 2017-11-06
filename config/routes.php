<?php
/**
 *
 *  Routes configuration
 *
 */

use Cake\Core\Plugin;
use Cake\Routing\RouteBuilder;
use Cake\Routing\Router;
use Cake\Routing\Route\DashedRoute;

/**
 *
 * Boot the Router connector
 * 
 */
Router::defaultRouteClass(DashedRoute::class);

Router::scope('/', function (RouteBuilder $routes) {
    
    $routes->connect(
        '/about', ['controller' => 'home', 'action' => 'about']
    );

    $routes->connect('/', ['controller' => 'Home', 'action' => 'index', 'home']);

    $routes->connect('/pages/*', ['controller' => 'Pages', 'action' => 'display']);
    
    //$routes->connect('/', ['controller' => 'Pages', 'action' => 'display', 'home']);

    $routes->fallbacks(DashedRoute::class);
    
});

/**
 * Load all plugin routes. See the Plugin documentation on
 * how to customize the loading of plugin routes.
 */
Plugin::routes();
