import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'news-aggregator';
  mArticles:Array<any> = [];
  mSources:Array<any> = [];

  constructor(private newsapi: NewsApiService)
  {}

  ngOnInit()
  {
    //load articles
    this.newsapi.initArticles().subscribe(data => {
                                                    this.mArticles = data['articles'];
                                                    debugger
                                                  }
                                         );
    //load news sources
    this.newsapi.initSources().subscribe(data=> {
                                                  this.mSources = data['sources'];
                                                  debugger
                                                }
                                        );
  }

  searchArticles(source: string)
  {
    debugger
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}
