import { Component, OnInit } from '@angular/core';
import * as createjs from 'createjs-module';
import { CreateJsService } from '../service/create-js.service';
import { ShapeGenerator } from './shape-generator';

@Component({
  selector: 'app-shape-generate',
  templateUrl: './shape-generate.page.html',
  styleUrls: ['./shape-generate.page.scss'],
  providers: [CreateJsService]
})
export class ShapeGeneratePage implements OnInit {
  private object: ShapeGenerator;
  public margin: string;
  public size: number;

  private scale = 1;
  private maxLife = 100;
  private gravity = 0.1;

  public nowScale = 'Small';
  public nowMaxLife = 'Short';
  public nowGravity = 'Light';

  constructor(private createJsService: CreateJsService) { }

  ngOnInit() {
    this.object = new ShapeGenerator();
    this.margin = this.createJsService.margin;
    this.size = this.createJsService.setSize();
    this.createJsService.setStage();
    this.createJsService.setObject(this.object);
    this.createJsService.setTicker();
    createjs.Ticker.addEventListener('tick', this.update.bind(this));
    createjs.Ticker.addEventListener('tick', this.draw.bind(this));
    this.setBackground();
  }

  private update() {
    this.createJsService.update();
  }

  private draw() {
    this.object.draw(this.createJsService.stage, this.scale, this.maxLife, this.gravity);
  }

  public toggleScale() {
    if (this.scale === 1) {
      this.scale = 4;
      this.nowScale = 'Big';
    } else {
      this.scale = 1;
      this.nowScale = 'Small';
    }
  }

  public toggleMaxLife() {
    if (this.maxLife === 100) {
      this.maxLife = 400;
      this.nowMaxLife = 'Long';
    } else {
      this.maxLife = 100;
      this.nowMaxLife = 'Short';
    }
  }

  public toggleGravity() {
    if (this.gravity === 0.1) {
      this.gravity = 1;
      this.nowGravity = 'Heavy';
    } else {
      this.gravity = 0.1;
      this.nowGravity = 'Light';
    }
  }

  public setBackground() {
    this.createJsService.setBackground();
  }
}
