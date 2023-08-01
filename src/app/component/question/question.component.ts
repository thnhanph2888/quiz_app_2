import {Component, OnInit} from '@angular/core';
import {Question} from '../../model/question';
import {QuestionService} from '../../service/question.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  listQuestion: Question[] = [];
  currentQuestion: Question;
  currentIndex = -1;
  numberCorrectAnswer = 0;
  countdownTime = 30;
  answer: string;
  totalCompletionTime = 0;
  intervalId: any;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.getStart();
  }

  setDefaultData() {
    this.questionService.resetListQuestionAnswered();
    this.setDefaultAnswer();
    this.setDefaultTime();
    this.setDefaultCompletionTime();
    this.setDefaultQuestionList();
  }

  setDefaultCompletionTime() {
    this.totalCompletionTime = 0;
  }

  setDefaultQuestionList() {
    this.listQuestion = [];
  }

  async getStart() {
    this.setDefaultData();
    this.closeModal();
    this.listQuestion = undefined;
    this.currentIndex = -1;
    this.setDefaultTime();
    this.setDefaultAnswer();
    await this.getListQuestion();
    this.setNextQuestion();
  }

  getListQuestion(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.questionService.getListQuestion().subscribe(object => {
        this.listQuestion = object.results;
        resolve();
      }, error => {
        reject(error);
      });
    });
  }

  setDefaultTime() {
    this.countdownTime = 30;
  }

  countTime(): void {
    const isLastQuestion = this.currentIndex === this.listQuestion.length - 1;
    if (this.countdownTime === 0) {
      this.setQuestionAnswered();
      if (isLastQuestion) {
        this.stopCountdownTime();
        this.disPlayTimeOut();
        setTimeout(() => {
          this.openModal();
        }, 1000);
      } else {
        this.stopCountdownTime();
        this.disPlayTimeOut();
        setTimeout(() => this.setNextQuestion(), 1000);
      }
    } else {
      this.countdownTime--;
    }
  }

  openModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  disPlayTimeOut() {
    Swal.fire({
      text: 'Time out!',
      icon: 'error',
      showConfirmButton: false,
      timer: 1000
    });
  }

  shuffleAnswers(answers: string[]): string[] {
    for (let i = 0; i < answers.length - 1; i++) {
      const j = Math.floor(Math.random() * answers.length);
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  }

  submitAnswer() {
    if (this.checkAnswerExistence()) {
      this.stopCountdownTime();
      this.checkCorrectAnswer();
      this.setQuestionAnswered();
      this.setDefaultAnswer();
      setTimeout(() => this.setNextQuestion(), 1000);
    } else {
      Swal.fire({
        text: 'Please choose answer!',
        icon: 'error',
        showConfirmButton: false,
        timer: 1000
      });
    }
  }

  finnish() {
    if (this.checkAnswerExistence()) {
      this.stopCountdownTime();
      this.checkCorrectAnswer();
      this.setQuestionAnswered();
      this.setDefaultAnswer();
      setTimeout(() => this.openModal(), 1000);
    } else {
      Swal.fire({
        text: 'Please choose answer!',
        icon: 'error',
        showConfirmButton: false,
        timer: 1000
      });
    }
  }

  setNextQuestion() {
    if (this.currentIndex < this.listQuestion.length - 1) {
      this.currentIndex++;
    }
    const answers = [...this.listQuestion[this.currentIndex].incorrect_answers, this.listQuestion[this.currentIndex].correct_answer];
    this.currentQuestion = {
      ...this.listQuestion[this.currentIndex],
      answers: this.shuffleAnswers(answers)
    };
    this.intervalId = setInterval(() => this.countTime(), 1000);
  }

  stopCountdownTime() {
    clearInterval(this.intervalId);
    this.setCompletionTime();
    this.setDefaultTime();
  }

  setDefaultAnswer() {
    this.answer = undefined;
  }

  setCompletionTime() {
    this.totalCompletionTime += 30 - this.countdownTime;
  }

  checkAnswerExistence(): boolean {
    return this.answer !== undefined;
  }

  setAnswer(answer: string) {
    this.answer = answer;
  }

  incrementNumberCorrectAnswer() {
    this.numberCorrectAnswer++;
  }

  setQuestionAnswered() {
    const questionAnswered = {...this.currentQuestion, selectedAnswer: this.answer};
    this.questionService.addQuestionAnswered(questionAnswered);
    this.answer = undefined;
  }

  checkCorrectAnswer() {
    if (this.currentQuestion.correct_answer === this.answer) {
      this.incrementNumberCorrectAnswer();
      this.displayCorrect();
    } else {
      this.displayInCorrect();
    }
  }

  displayCorrect() {
    Swal.fire({
      text: 'Correct!!!',
      icon: 'success',
      showConfirmButton: false,
      timer: 1000
    });
  }

  displayInCorrect() {
    Swal.fire({
      text: 'Incorrect!',
      icon: 'error',
      showConfirmButton: false,
      timer: 1000
    });
  }
}



