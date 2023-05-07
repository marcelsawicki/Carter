import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  title = 'clientapp';
  
  drawChessboard()
  {
    // size of each chess square
    const squareSize = 50;
    // position of board's top left
    const boardTopx = 50;
    const boardTopy = 50;
    let canvas = document.getElementById("canvasChessboard") as HTMLCanvasElement;
    let context = canvas.getContext("2d");
    if(canvas !=null && context !=null)
    {
      for(let i=0; i<8; i++) {
        for(let j=0; j<8; j++) {
          context.fillStyle = ((i+j)%2==0) ? "#EEEED2":"#769656";
          let xOffset = boardTopx + j*squareSize;
          let yOffset = boardTopy + i*squareSize;
          context.fillRect(xOffset, yOffset, squareSize, squareSize);
        }
      }

    // draw the border around the chessboard
    context.strokeStyle = "black";
    context.strokeRect(boardTopx, boardTopy, squareSize*8, squareSize*8)
    }
  }

  drawPawn()
  {
    let canvas = document.getElementById("canvasChessboard") as HTMLCanvasElement;
    let context = canvas.getContext("2d");
    let imageObj = new Image();


      imageObj.onload = function()
      {
        if(canvas !=null && context !=null)
        {
          context.drawImage(imageObj, 0, 0, 50, 50, 50, 50, 50, 50);
          context.drawImage(imageObj, 100, 0, 50, 50, 100, 100, 50, 50);
          context.drawImage(imageObj, 250, 0, 50, 50, 300, 250, 50, 50);

          context.drawImage(imageObj, 0, 50, 50, 50, 100, 400, 50, 50);
          context.drawImage(imageObj, 250, 50, 50, 50, 200, 400, 50, 50);
          context.drawImage(imageObj, 250, 50, 50, 50, 250, 300, 50, 50);
          /*
          The structure of the parameters for this third version of the drawImage() function looks like this:

          drawImage(Image, sx, sy, sw, sh, dx, dy, dw, dh)
          sx and sy represent the “source positions” to start copying the source image to the canvas. 
          sw and sh represent the width and height of the rectangle starting at sx and sy. 
          That rectangle will be copied to the canvas at “destination” positions dx and dy. 
          As with the previous drawImage() function, dw and dh represent the newly scaled width and height for the image.
          */
        }
      }
      
    imageObj.src='assets/chess-arial-unicode-tiny-nobg.png';
  }

  ngOnInit() {
    this.drawChessboard();
    this.drawPawn()
  }
}
