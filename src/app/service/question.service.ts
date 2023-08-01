import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private API_PATH = 'https://opentdb.com/api.php';
  private listQuestionAnswered: Question[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getListQuestion(): Observable<any> {
    return this.httpClient.get<any>(this.API_PATH + '?amount=5');
  }

  addQuestionAnswered(questionAnswered: Question) {
    this.listQuestionAnswered.push(questionAnswered);
    console.log('add/n' + this.listQuestionAnswered);
  }

  getListQuestionAnswered(): Question[] {
    return this.listQuestionAnswered;
  }

  resetListQuestionAnswered() {
    this.listQuestionAnswered = [];
    console.log('reset/n' + this.listQuestionAnswered);
  }
}
