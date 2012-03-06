<?php
require_once __DIR__.'/silex.phar';
require_once __DIR__.'/goutte.phar';
use Goutte\Client;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\HttpFoundation\Response;


$json = json_decode(file_get_contents(__DIR__.'/sites.json'), true);
$sites = '^' . implode('|', array_keys($json)) . '$';

$getQuotes = function($quotesite) use ($json) {
  $site = $json[$quotesite];

  $client = new Client();
  $crawler = $client->request('GET', $site['feedurl'].'?format=xml');
  $entries = $crawler->filter($site['entrytag']);

  $result = $entries->each(function($node) use ($site) {
      $e = new Crawler($node);
    
      return array (
	       'date'    => $e->filter($site['datetag'])->text(),
	       'url'     => $e->filter($site['urltag'])->text(),
	       'content' => $e->filter($site['contenttag'])->text()
                   );    
    });

  return json_encode($result);
};


$app = new Silex\Application();

$app->get('/{quotesite}', function ($quotesite) use ($getQuotes, $app) {
    return new Response(
		  $getQuotes($app->escape($quotesite)),			
		  200,
		  array('Content-Type' => 'application/json')
	       );   
})->assert('quotesite', $sites);  

$app->run();



