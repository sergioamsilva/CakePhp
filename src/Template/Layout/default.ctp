<!doctype html>

<?php

    use Cake\Routing\Router;
    
    $title = 'Template CakePHP 3';
    
    $fullUrl = Router::url(null, true);
    $facebookImg = Router::url('/', true) . 'images/facebook.png';
    
    $description = 'Exemplo de projecto inicial com o CakePHP 3 e Bootstrap 3.';

?>

<html lang="pt-PT">
    
    <head>
        
        <link rel="stylesheet" href="/css/base.css" type="text/css" />
        <?php echo $this->fetch('pageStyle'); ?>
      
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        
        <meta name="referrer" content="origin" />
        <meta name="robots" content="noodp,noydir" />
        <meta http-equiv="Cache-control" content="public" />
        <meta name="keywords" content="PHP, CakePHP 3, Template" />
        <meta name="description" content="<?php echo($description); ?>" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:url"              content="<?php echo($fullUrl); ?>" />
        <meta property="og:type"             content="website" />
        <meta property="og:title"            content="<?php echo($title); ?>" />
        <meta property="og:description"      content="<?php echo($description); ?>" />
        <meta property="og:image"            content="<?php echo($facebookImg); ?>" />
        <meta property="og:image:type"       content="image/png" />
        <meta property="og:image:width"      content="256" />
        <meta property="og:image:height"     content="256" />

        <title><?php echo($title); ?></title>

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/apple-touch.png" />
        <link rel="apple-touch-icon-precomposed" sizes="256x256" href="/images/apple-touch.png" />

    </head>

    <body>
        
        <?php echo($this->element('Header/navigation')); ?>
        
        <div class="container"><?php echo $this->Flash->render(); ?></div>

        <div class="container"><?php echo($this->fetch('content')); ?></div>

        <footer>
            <div class="container">
                <div class="row"></div>
            </div>
        </footer>
        
        <?php echo $this->fetch('googleMaps'); ?>
        
        <script type="text/javascript" src="/jscripts/vendors/analytics.js" async></script>
        
        <?php echo $this->Html->script('vendors/jquery-3.2.1.min.js'); ?>
        <?php echo $this->Html->script('vendors/bootstrap.min.js'); ?>
        
        <?php //echo $this->Html->script('vendors/select2.min.js'); ?>
        <?php //echo $this->Html->script('vendors/moment-plugin.js'); ?>
        <?php //echo $this->Html->script('vendors/moment-plugin-pt.js'); ?>
        <?php //echo $this->Html->script('vendors/datetimepicker.min.js'); ?>
        <?php echo $this->Html->script('vendors/jquery.dynatable.js'); ?>
        <?php //echo $this->Html->script('vendors/page_scroller_top.js'); ?>
        <?php //echo $this->Html->script('vendors/jq.animateNum.min.js'); ?>

        <?php //echo $this->Html->script('vendors/d3_v3.5.10.min.js'); ?>
        <?php //echo $this->Html->script('vendors/c3_v0.4.12.min.js'); ?>

        <?php echo $this->Html->script('app-config.js'); ?>
        <?php //echo $this->Html->script('graphics.js'); ?>
            
        <?php echo $this->fetch('pagejScript'); ?>  

    </body>

</html>