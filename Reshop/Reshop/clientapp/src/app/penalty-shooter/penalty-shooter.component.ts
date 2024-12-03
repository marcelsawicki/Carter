import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import DrawService from './services/draw-service';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-penalty-shooter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './penalty-shooter.component.html',
  styleUrl: './penalty-shooter.component.css'
})
export class PenaltyShooterComponent implements AfterViewInit {
  /** Template reference to the canvas element */
  @ViewChild('canvasEl') canvasEl!: ElementRef;

  /** Canvas 2d context */
  private context: CanvasRenderingContext2D | null | undefined;
  #drawService = inject(DrawService);
  penaltyShootForm = new FormGroup({
    projectionAngle: new FormControl(40),
    projectionInitialVelocity: new FormControl(100),
    horizontalAngle: new FormControl(5),
  });

  constructor() { }

  ngAfterViewInit() {
    var canvas = this.canvasEl.nativeElement as HTMLCanvasElement; 
    this.context = canvas.getContext('2d');

      //this.draw();   
      if(this.context) {
        this.context.fillStyle = "green";
        this.context.fillRect(0, 0, canvas.width, canvas.height);
        this.context.fillStyle = "blue";
        this.context.fillRect(0, 0, canvas.width, 100);
        this.#drawService.DrawGate(this.context); 
      }  
  }

  /**
   * Draws something using the context we obtained earlier on
   */
  private draw() {
    if(this.context) {
      this.context.font = '30px Arial';
      this.context.textBaseline = 'middle';
      this.context.textAlign = 'center';
  
      const x = (this.canvasEl.nativeElement as HTMLCanvasElement).width / 2;
      const y = (this.canvasEl.nativeElement as HTMLCanvasElement).height / 2;
      this.context.fillText('Penalty shooter', x, y);
    }
  }

  open() {

  }
  onSubmit() {
    if(this.context)
    {
      // rzut_ukosny_kat, rzut_ukosny_predkosc_poczatkowa, kat_horizonta

      //       projectionAngle 
      //projectionInitialVelocity,
      // horizontalAngle
      const projectionAngle = this.penaltyShootForm.value.projectionAngle ?? 0;
      const projectionInitialVelocity = this.penaltyShootForm.value.projectionInitialVelocity || 0;
      const horizontalAngle = this.penaltyShootForm.value.horizontalAngle || 0;
      this.#drawService.Shoot(this.context, projectionAngle, projectionInitialVelocity, horizontalAngle);
    }
  }
}
