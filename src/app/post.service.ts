import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../BlogPost';
import { Observable } from 'rxjs';

const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  // get posts per page
  getPosts(page, tag, category): Observable<BlogPost[]> {

    let pathAddition = "";

    if (tag != null || tag != undefined) {
      pathAddition += "&tag=";
      pathAddition += tag;
    }

    if (category != null || category != undefined) {
      pathAddition += "&category=";
      pathAddition += category;
    }

    return this.http.get<BlogPost[]>(`https://web422-blog-api-portfolio.herokuapp.com/api/posts?page=${page}&perPage=${perPage}${pathAddition}`);
  }

  // get post by id
  getPostbyId(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://web422-blog-api-portfolio.herokuapp.com/api/posts/${id}`);
  }

  // get categories
  getCategories(): Observable<any> {
    return this.http.get<any>(`https://web422-blog-api-portfolio.herokuapp.com/api/categories`);
  }

  // get tags
  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`https://web422-blog-api-portfolio.herokuapp.com/api/tags`);
  }

  // Get all posts
  getAllPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`https://web422-blog-api-portfolio.herokuapp.com/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`);
  }


  // Create new post
  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(`https://web422-blog-api-portfolio.herokuapp.com/api/posts`, data);
  }

  // Update post
  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`https://web422-blog-api-portfolio.herokuapp.com/api/posts/${id}`, data);
  }


    // Delete post
    deletePostById(id: string): Observable<any> {
      return this.http.delete<any>(`https://web422-blog-api-portfolio.herokuapp.com/api/posts/${id}`);
    }
  
}
