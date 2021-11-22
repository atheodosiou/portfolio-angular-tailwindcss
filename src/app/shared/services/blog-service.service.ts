import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

export enum Sort {
  ASC = 'ASC',
  DESC = 'DESC'
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = environment.baseUrl;
  private author = 'author._id=61475b24550aab003620efdf';

  constructor(private http: HttpClient) { }

  public getAllArticles(sort?: { field: string, value: Sort }, limit?: number): Observable<any[]> {
    let endpoint = `${this.baseUrl}/articles?${this.author}`;
    if (sort && limit) {
      endpoint += `&_sort=${sort.field}:${sort.value}&_limit=${limit}`;
    }
    if (sort && !limit) {
      endpoint += `&_sort=${sort.field}:${sort.value}`;
    }
    if (!sort && limit) {
      endpoint += `&_limit=${limit}`;
    }

    return this.http.get<any[]>(endpoint);
  }

  public getArticleBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/articles?${this.author}&slug=${slug}`);
  }

  public searchArticles(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/articles?${this.author}&_where[_or][0][title_contains]=${term}&_where[_or][1][description_contains]=${term}`);
  }

  public updateArticleViews(id: string, views: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/articles/${id}?${this.author}`, { views: views });
  }

  public getApps(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/apps?${this.author}&_sort=sortBy:ASC`);
  }
}
