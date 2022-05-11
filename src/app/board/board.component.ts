import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  fields: any[] = new Array(42).fill(null);
  openFields: number[] = [];
  turnPlayer1: boolean = true;
  winner: string = '';


  //helper Arrays
  columnA: number[] = [0,7,14,21,28,35];
  columnB: number[] = [1,8,15,22,29,36];
  columnC: number[] = [2,9,16,23,30,37];
  columnD: number[] = [3,10,17,24,31,38];
  columnE: number[] = [4,11,18,25,32,39];
  columnF: number[] = [5,12,19,26,33,40];
  columnG: number[] = [6,13,20,27,34,41];

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.fields = Array(42).fill(null);
    this.turnPlayer1 = true;
    this.winner = '';
  }

  getActivePlayer(){
    return this.turnPlayer1 ? 'yellow' : 'red';
  }

  makeMove(index: number){
    if(!this.fields[index]){

      if(this.columnA.includes(index)){
        for(let i = 5; i >= 0; i--){
          if(!this.fields[this.columnA[i]]) {
            this.fields.splice(this.columnA[i], 1, this.getActivePlayer());
            this.turnPlayer1 = !this.turnPlayer1;
            break;
          }
        }
      }

      if(this.columnB.includes(index)){
        for(let i = 5; i >= 0; i--){
          if(!this.fields[this.columnB[i]]) {
            this.fields.splice(this.columnB[i], 1, this.getActivePlayer());
            this.turnPlayer1 = !this.turnPlayer1;
            break;
          }
        }
      }

      if(this.columnC.includes(index)){
        for(let i = 5; i >= 0; i--){
          if(!this.fields[this.columnC[i]]) {
            this.fields.splice(this.columnC[i], 1, this.getActivePlayer());
            this.turnPlayer1 = !this.turnPlayer1;
            break;
          }
        }
      }

      if(this.columnD.includes(index)){
        for(let i = 5; i >= 0; i--){
          if(!this.fields[this.columnD[i]]) {
            this.fields.splice(this.columnD[i], 1, this.getActivePlayer());
            this.turnPlayer1 = !this.turnPlayer1;
            break;
          }
        }
      }

      if(this.columnE.includes(index)){
        for(let i = 5; i >= 0; i--){
          if(!this.fields[this.columnE[i]]) {
            this.fields.splice(this.columnE[i], 1, this.getActivePlayer());
            this.turnPlayer1 = !this.turnPlayer1;
            break;
          }
        }
      }

      if(this.columnF.includes(index)){
        for(let i = 5; i >= 0; i--){
          if(!this.fields[this.columnF[i]]) {
            this.fields.splice(this.columnF[i], 1, this.getActivePlayer());
            this.turnPlayer1 = !this.turnPlayer1;
            break;
          }
        }
      }

      if(this.columnG.includes(index)){
        for(let i = 5; i >= 0; i--){
          if(!this.fields[this.columnG[i]]) {
            this.fields.splice(this.columnG[i], 1, this.getActivePlayer());
            this.turnPlayer1 = !this.turnPlayer1;
            break;
          }
        }
      }

      if(!this.turnPlayer1){
        this.aiMove();
      }

      this.winner = this.winningConditions();
    }
  }

  winningConditions(){
    //vertical
    for(let i = 0; i < 42; i++){
      if(this.fields[i] && this.fields[i] === this.fields[(i+7)] && this.fields[i] === this.fields[(i+14)] && this.fields[i] === this.fields[(i+21)]) {
        console.log('vertical');
        return this.fields[i];
      }
    }

    //horizontal
    for(let i = 0; i < 42; i++){
      if(this.fields[i] && this.fields[i] === this.fields[(i+1)] && this.fields[i] === this.fields[(i+2)] && this.fields[i] === this.fields[(i+3)]) {
        if(i >= 0 && i <=3 && (i+3) >= 3 && (i+3) <= 6){
          return this.fields[i];
        }
        if(i >= 7 && i <= 10 && (i+3) >= 10 && (i+3) <= 13){
          return this.fields[i];
        }
        if(i >= 14 && i <= 17 && (i+3) >= 17 && (i+3) <= 20){
          return this.fields[i];
        }
        if(i >= 21 && i <= 24 && (i+3) >= 24 && (i+3) <= 27){
          return this.fields[i];
        }
        if(i >= 28 && i <= 31 && (i+3) >= 31 && (i+3) <= 34){
          return this.fields[i];
        }
        if(i >= 35 && i <= 38 && (i+3) >= 38 && (i+3) <= 41){
          return this.fields[i];
        }
        console.log('horizontal');
      }
    }

    //diagonal left to right
    for(let i = 0; i < 42; i++){
      if(this.fields[i] && this.fields[i] === this.fields[(i+8)] && this.fields[i] === this.fields[(i+16)] && this.fields[i] === this.fields[(i+24)]) {
        if( this.columnE.includes(i) || this.columnF.includes(i) || this.columnG.includes(i)){
          return null;
        }
        console.log('diagonal left to right');
        return this.fields[i]
      }
    }

    //diagonal right to left
    for(let i = 0; i < 42; i++){
      if(this.fields[i] && this.fields[i] === this.fields[(i+6)] && this.fields[i] === this.fields[(i+12)] && this.fields[i] === this.fields[(i+18)]) {
        if( this.columnA.includes(i) || this.columnB.includes(i) || this.columnC.includes(i) || this.columnA.includes(i+6) || this.columnA.includes(i+12) || this.columnG.includes(i+6) || this.columnG.includes(i+12)){
          return null;
        }
        console.log('diagonal right to left');
        return this.fields[i]
      }
    }

    //draw
    for(let i = 0; i < 42; i++){
      let fieldCount = 0;
      if(this.fields[i] === 'yellow' || this.fields[i] === 'red'){
        fieldCount ++;
      }
      if(fieldCount === 42){
        return 'draw';
      }
    }

    return null;
  }

  //AI calculation
  aiMove(){
    const random = this.makeRandomMove();

    this.makeMove(random);
    this.checkIfOpponentCanWin();
  }

  getOpenFields(){
    this.openFields = [];

    //get all open fields
    for(let i = 0; i < this.fields.length; i++){
      if(this.fields[i] === null){
        this.openFields.push(i);
      }
    }
  }

  makeRandomMove(){
    this.getOpenFields()

    //choose any open field
    const randomIndex = this.openFields[(Math.random() * this.openFields.length)| 0];
    console.log(randomIndex);
    return randomIndex;
  }

  checkIfOpponentCanWin(){
    this.getOpenFields();
    let winHelperArray: any[] = this.fields;

    //check for opportunities
    for(let i = 0; i < this.openFields.length; i++){
      console.log(winHelperArray[this.openFields[i]]);
    }
    console.log('length ' + this.openFields.length);
    console.log(this.openFields);

  }


}
