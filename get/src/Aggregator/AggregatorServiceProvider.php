<?php

namespace Aggregator;

use Silex\Application;
use Silex\ServiceProviderInterface;
use Goutte\Client;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\CssSelector\CssSelector;



class AggregatorServiceProvider implements ServiceProviderInterface {
  public function boot(Application $app) {}

  public function register(Application $app) {

    /**
     * Parses "sites.json" to retrieve the list of sites and their associated metadata
     * into a PHP associative array.
     *
     * @return array
     */
    $app['quotesite_list'] = json_decode(file_get_contents(__DIR__.'/../../sites.json'), true);

    /**
     * Returns the regex used to validate get parameters to match any of the supported sites
     * eg: ^fmylife|mlia|tfln$
     *
     * @return string - the regex used to validate get parameters.
     */
    $app['sites_regex'] = '^'.implode('|', array_keys($app['quotesite_list'])).'$';

    /**
     * Returns the latest "quotes" of a given site
     *
     * @param array - an array which contains all the metadata associated with a site.
     * @return string - The latest "quotes" in JSON format.
     */
    $app['getQuotes'] = $app->protect(function($site) {

        CssSelector::disableHtmlExtension();

        $client = new Client();
        $crawler = $client->request('GET', $site['feedurl'].'?format=xml');
        $entries = $crawler->filterXPath('//'.$site['entrytag']);

        $result = $entries->each(function(Crawler $node) use ($site) {

            $content = $node->filterXPath('//'.$site['contenttag'])->text();
            $content = preg_replace('/<a.+>.*<\/a>|<img.+>|<h\d.+>.*<\/h\d>/i', '', $content);

            return array (
                  'date'    => $node->filterXPath('//'.$site['datetag'])->text(),
                  'url'     => $node->filterXPath('//'.$site['urltag'])->text(),
                  'content' => $content);
          });


        return isset($site['offset']) ? array_slice($result, $site['offset'])
                                      : $result;
    });

  }
}



