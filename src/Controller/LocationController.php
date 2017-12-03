<?php

namespace App\Controller;

use App\Controller\AppController;

/**
 * 
 * 
 * Home Controller
 *
 */
class LocationController extends AppController
{
    
    /**
     * 
     * index method
     * 
     */
    public function index () {
        
        $this->autoRender = false;
        
        $this->log($this->request->data);
        $this->log($this->request->method());
        
        
        if($this->request->is('post')) {
            
            $this->log($this->request->data);
            
        } else {
            $location = json_encode([
                'Controller' => 'Location'
            ]);
            $this->response->type('json');
            $this->response->body($location);

        }
        
    }

}
