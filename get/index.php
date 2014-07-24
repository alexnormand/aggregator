<?php
require_once __DIR__.'/vendor/autoload.php';

$app = new Silex\Application();

$app->register(new Aggregator\AggregatorServiceProvider());

$app['debug'] = true;

$app->get('/{quotesite}', function ($quotesite) use ($app) {

    $response = $app->json($app['getQuotes']($app['quotesite_list'][$quotesite]));
    $response->setMaxAge(7*60);
    return $response;

})->assert('quotesite', $app['sites_regex']);

$app->run();

