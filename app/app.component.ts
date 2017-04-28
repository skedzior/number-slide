// app/app.component.ts

import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public arrayOfKeys;

  grid = {
    0: [],
    1: [],
    2: [],
    3: []
  };

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight', UP: 'swipeup', DOWN: 'swipedown' };

  constructor() {    
    this.initializeGrid();  
    this.arrayOfKeys = Object.keys(this.grid);
  }

  initializeGrid(){    
    for(let i = 0; i < Object.keys(this.grid).length; i++){
      for(let j = 0; j < 4; j++){
        let tile = {x: i, y: j, value: 1, index: j};
        this.grid[i].push(tile);
      }      
    }
    
  }

  shiftTilesUp(col, tile){
    if(this.grid[col][tile.index - 1].value == tile.value){      
      this.grid[col][tile.index - 1].value += 1;

      for(let i = tile.index; i < 3; i++){
        console.log('tile indx', i);
        this.grid[col][i].value = this.grid[col][i + 1].value;
      }
      this.grid[col][3].value = Math.ceil(Math.random() * 2);
    }
  }

  shiftTilesDown(col, tile){
    if(this.grid[col][tile.index + 1].value == tile.value){      
      this.grid[col][tile.index + 1].value += 1;

      for(let i = tile.index; i > 0; i--){
        console.log('tile indx', i);
        this.grid[col][i].value = this.grid[col][i - 1].value;
      }
      this.grid[col][0].value = Math.ceil(Math.random() * 2);
    }
  }

  shiftTilesLeft(col, tile){
    let _col = parseInt(col);
    if(this.grid[_col - 1][tile.index].value == tile.value){      
      this.grid[_col - 1][tile.index].value += 1;

      for(let i = _col; i < 3; i++){
        console.log('col indx', i);
        this.grid[i][tile.index].value = this.grid[i + 1][tile.index].value;
      }
      this.grid[3][tile.index].value = Math.ceil(Math.random() * 2);
    }
  }

  shiftTilesRight(col, tile){
    let _col = parseInt(col);
    if(this.grid[_col + 1][tile.index].value == tile.value){
      
      this.grid[_col + 1][tile.index].value += 1;

      for(let i = 0; i < _col; i++){
        console.log('col indx', i);
        this.grid[_col - i][tile.index].value = this.grid[_col - i - 1][tile.index].value;
      }
      this.grid[0][tile.index].value = Math.ceil(Math.random() * 2);
    }
  }
}