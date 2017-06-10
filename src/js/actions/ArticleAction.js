import { EventEmitter } from "events" ;
import Dispatcher from '../dispatch/Dispatcher'
import NewsAPI from '../utils/NewsAPI';

/**
 * 
 */
export function getSources(){
  const url = 'https://newsapi.org/v1/sources?language=en';
  NewsAPI.getSources(url)
    .then((sources)=> {
      Dispatcher.dispatch({
      actionType: "GET_SOURCES",
      sources
    });
  });
}



export function getArticles(src_id, sort_query){
  const API_KEY = '213327409d384371851777e7c7f78dfe';
  const url = 'https://newsapi.org/v1/articles?source='+src_id+ 
  '&sortBy='+sort_query+'&apiKey='+API_KEY;
  NewsAPI.getArticles(url)
    .then((articles)=> {
      Dispatcher.dispatch({
      actionType: "GET_ARTICLES",
      articles
    })
  });

}

