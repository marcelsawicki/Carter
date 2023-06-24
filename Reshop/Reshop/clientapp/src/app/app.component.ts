import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  title = 'clientapp';
  
  drawChessboard(canvasName:string)
  {
    // size of each chess square
    const squareSize = 50;
    // position of board's top left
    const boardTopx = 50;
    const boardTopy = 50;
    let canvas = document.getElementById(canvasName) as HTMLCanvasElement;
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

  drawPawn(canvasName:string)
  {
    let canvas = document.getElementById(canvasName) as HTMLCanvasElement;
    let context = canvas.getContext("2d");
    let imageObj = new Image();


      imageObj.onload = function()
      {
        if(canvas !=null && context !=null)
        {
          DrawPieces('Wa1','white', context, imageObj);
          DrawPieces('Sb1', 'white', context, imageObj);
          DrawPieces('Gc1', 'white', context, imageObj);
          DrawPieces('Hd1', 'white', context, imageObj);
          DrawPieces('Ke1', 'white', context, imageObj);
          DrawPieces('Gf1', 'white', context, imageObj);
          DrawPieces('Sg1', 'white', context, imageObj);
          DrawPieces('Wh1','white', context, imageObj);
          
          DrawPieces('a2','white', context, imageObj);
          DrawPieces('b2','white', context, imageObj);
          DrawPieces('c2','white', context, imageObj);
          DrawPieces('d2','white', context, imageObj);
          DrawPieces('e2','white', context, imageObj);
          DrawPieces('f2','white', context, imageObj);
          DrawPieces('g2','white', context, imageObj);
          DrawPieces('h2','white', context, imageObj);

          DrawPieces('Wa8','black', context, imageObj);
          DrawPieces('Sb8', 'black', context, imageObj);
          DrawPieces('Gc8', 'black', context, imageObj);
          DrawPieces('Hd8', 'black', context, imageObj);
          DrawPieces('Ke8', 'black', context, imageObj);
          DrawPieces('Gf8', 'black', context, imageObj);
          DrawPieces('Sg8', 'black', context, imageObj);
          DrawPieces('Wh8','black', context, imageObj);

          DrawPieces('a7','black', context, imageObj);
          DrawPieces('b7','black', context, imageObj);
          DrawPieces('c7','black', context, imageObj);
          DrawPieces('d7','black', context, imageObj);
          DrawPieces('e7','black', context, imageObj);
          DrawPieces('f7','black', context, imageObj);
          DrawPieces('g7','black', context, imageObj);
          DrawPieces('h7','black', context, imageObj);
        }
      }
      
    imageObj.src='assets/chess-arial-unicode-tiny-nobg.png';
  }

  drawPawn22(canvasName:string)
  {
    this.drawChessboard("canvasChessboard2");
    let canvas = document.getElementById(canvasName) as HTMLCanvasElement;
    let context = canvas.getContext("2d");
    let imageObj = new Image();


      imageObj.onload = function()
      {
        if(canvas !=null && context !=null)
        {
          DrawPieces('Wa1','white', context, imageObj);
          DrawPieces('Kh8','black', context, imageObj);
          DrawPieces('Kh1','white', context, imageObj);
        }
      }
      
    imageObj.src='assets/chess-arial-unicode-tiny-nobg.png';
  }

  drawPawn222(canvasName:string)
  {
    this.drawChessboard("canvasChessboard2");
    let canvas = document.getElementById(canvasName) as HTMLCanvasElement;
    let context = canvas.getContext("2d");
    let imageObj = new Image();


      imageObj.onload = function()
      {
        if(canvas !=null && context !=null)
        {
          DrawPieces('Wa7','white', context, imageObj);
          DrawPieces('Kh8','black', context, imageObj);
          DrawPieces('Kh1','white', context, imageObj);
        }
      }
      
    imageObj.src='assets/chess-arial-unicode-tiny-nobg.png';
  }

  drawPawn223(canvasName:string)
  {
    this.drawChessboard("canvasChessboard2");
    let canvas = document.getElementById(canvasName) as HTMLCanvasElement;
    let context = canvas.getContext("2d");
    let imageObj = new Image();


      imageObj.onload = function()
      {
        if(canvas !=null && context !=null)
        {
          DrawPieces('Wa7','white', context, imageObj);
          DrawPieces('Kg8','black', context, imageObj);
          DrawPieces('Kh1','white', context, imageObj);
        }
      }
      
    imageObj.src='assets/chess-arial-unicode-tiny-nobg.png';
  }

  drawPawn224(canvasName:string)
  {
    this.drawChessboard("canvasChessboard2");
    let canvas = document.getElementById(canvasName) as HTMLCanvasElement;
    let context = canvas.getContext("2d");
    let imageObj = new Image();


      imageObj.onload = function()
      {
        if(canvas !=null && context !=null)
        {
          DrawPieces('Wa7','white', context, imageObj);
          DrawPieces('Kg8','black', context, imageObj);
          DrawPieces('Kg2','white', context, imageObj);
        }
      }
      
    imageObj.src='assets/chess-arial-unicode-tiny-nobg.png';
  }

  Render1()
  {
    this.drawPawn22("canvasChessboard2")
  }

  Render2()
  {
    this.drawPawn222("canvasChessboard2")
  }

  Render3()
  {
    this.drawPawn223("canvasChessboard2")
  }

  Render4()
  {
    this.drawPawn224("canvasChessboard2")
  }

  ngOnInit() {
    this.drawChessboard("canvasChessboard");
    this.drawPawn("canvasChessboard")
    this.drawChessboard("canvasChessboard2");
    this.drawPawn22("canvasChessboard2")
  }
}

function DrawPieces(definition:string, color: string, context:CanvasRenderingContext2D, imageObj: HTMLImageElement)
{
  let position = Array.from(definition);
  let pieceX: number = 0;
  let pieceY: number = 0;
  let pieceDefinition: string;
  let positionYDefinition: number = 0;
  let positionXDefinition: number = 0;
  let colorDefinition: number = (color == 'white')?50:0;
  

  if(definition.length==2)
  {
    pieceDefinition = 'p';
    positionXDefinition = 0;
    positionYDefinition = 1;
  }
  else
  {
    pieceDefinition = position[0].toLocaleLowerCase()
    positionXDefinition = 1;
    positionYDefinition = 2;
  }


  let positionY: number = 0;
  let positionX: number = 0;
  
    switch(pieceDefinition)
    {
      case('k'):
        pieceX=0; pieceY=0+colorDefinition;
        break;
      case('h'):
        pieceX=50; pieceY=0+colorDefinition;
        break;
      case('w'):
        pieceX=100; pieceY=0+colorDefinition;
        break;
      case('g'):
        pieceX=150; pieceY=0+colorDefinition;
        break;
      case('s'):
        pieceX=200; pieceY=0+colorDefinition;
        break;
      case('p'):
        pieceX=250; pieceY=0+colorDefinition;
        break;
    }

    switch(position[positionXDefinition].toLocaleLowerCase())
    {
      case('a'):
        positionX=50;
        break;
      case('b'):
        positionX=100;
        break;
      case('c'):
        positionX=150;
        break;
      case('d'):
        positionX=200;
        break;
      case('e'):
        positionX=250;
        break;
      case('f'):
        positionX=300;
        break;
      case('g'):
        positionX=350;
        break;
      case('h'):
        positionX=400;
        break;
    }

    switch(position[positionYDefinition].toLocaleLowerCase())
    {
      case('8'):
        positionY=50;
        break;
      case('7'):
        positionY=100;
        break;
      case('6'):
        positionY=150;
        break;
      case('5'):
        positionY=200;
        break;
      case('4'):
        positionY=250;
        break;
      case('3'):
        positionY=300;
        break;
      case('2'):
        positionY=350;
        break;
      case('1'):
        positionY=400;
        break;
    }

    context.drawImage(imageObj, pieceX, pieceY, 50, 50, positionX, positionY, 50, 50);

    /*
          The structure of the parameters for this third version of the drawImage() function looks like this:

          drawImage(Image, sx, sy, sw, sh, dx, dy, dw, dh)
          sx and sy represent the “source positions” to start copying the source image to the canvas. 
          sw and sh represent the width and height of the rectangle starting at sx and sy. 
          That rectangle will be copied to the canvas at “destination” positions dx and dy. 
          As with the previous drawImage() function, dw and dh represent the newly scaled width and height for the image.
    */
}