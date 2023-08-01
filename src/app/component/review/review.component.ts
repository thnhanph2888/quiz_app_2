import { Component, OnInit } from '@angular/core';
import {Question} from '../../model/question';
import {QuestionService} from '../../service/question.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  listQuestionAnswered: Question[] = [
    {
      category: 'a',
      type: 'a',
      difficulty: 'a',
      question: 'Question Question Question Question Question Question Question Question',
      correct_answer: 'a',
      incorrect_answers: [
        'a', 'b', 'c'
      ],
      answers: [
        'a', 'b', 'c', 'd'
      ],
      selectedAnswer: ['d']
    },
    {
      category: 'a',
      type: 'a',
      difficulty: 'a',
      question: 'Question',
      correct_answer: 'a',
      incorrect_answers: [
        'a', 'b', 'c'
      ],
      answers: [
        'a', 'b', 'c', 'd'
      ],
      selectedAnswer: ['d']
    },
    {
      category: 'a',
      type: 'a',
      difficulty: 'a',
      question: 'Question',
      correct_answer: 'a',
      incorrect_answers: [
        'a', 'b', 'c'
      ],
      answers: [
        'a', 'b', 'c', 'd'
      ],
      selectedAnswer: ['a']
    }
  ];

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.listQuestionAnswered = this.questionService.getListQuestionAnswered();
  }

  openModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }
}
