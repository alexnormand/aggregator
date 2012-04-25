<?php
require_once __DIR__.'/silex.phar';
require_once __DIR__.'/goutte.phar';
use Goutte\Client;
use Symfony\Component\DomCrawler\Crawler;


$app = new Silex\Application();

/**
 * Parses "sites.json" to retrieve the list of sites and their associated metadata
 * into a PHP associative array.
 *
 * @return array
 */
$app['quotesite_list'] = json_decode(file_get_contents(__DIR__.'/sites.json'), true);

/**
 * Returns the regex used to validate get parameters to match any of the supported sites
 * eg: ^fmylife|mlia|tfln$ 
 *
 * return string - the regex used to validate get parameters.
 */
$app['sites_regex'] = '^'.implode('|', array_keys($app['quotesite_list'])).'$';

/**
 * Returns the latest "quotes" of a given site
 *
 * @param array - an array which contains all the metadata associated with a site.   
 * @return string - The latest "quotes" in JSON format.
 */
$app['getQuotes'] = $app->protect(function($site) {

  $client = new Client();
  $crawler = $client->request('GET', $site['feedurl'].'?format=xml');
  $entries = $crawler->filter($site['entrytag']);

  $result = $entries->each(function($node) use ($site) {
      $e = new Crawler($node);
    
      $content = $e->filter($site['contenttag'])->text();            
      $content = preg_replace('/<a.+>.*<\/a>|<img.+>/i', '', $content);      

      return array (
	       'date'    => $e->filter($site['datetag'])->text(),
	       'url'     => $e->filter($site['urltag'])->text(),
	       'content' => $content);    
    });

  return isset($site['offset']) ? array_slice($result, $site['offset'])
                                : $result;
});


$app->get('/{quotesite}', function ($quotesite) use ($app) {    

    $response = $app->json($app['getQuotes']($app['quotesite_list'][$quotesite]));
    $response->setMaxAge(7*60);
    return $response;

})->assert('quotesite', $app['sites_regex']);  

$app->run();

