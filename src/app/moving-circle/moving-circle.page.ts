import { Component, OnInit } from '@angular/core';
import * as createjs from 'createjs-module';
import { CreateJsService } from '../service/create-js.service';
import { Circle } from './circle';

@Component({
  selector: 'app-moving-circle',
  templateUrl: './moving-circle.page.html',
  styleUrls: ['./moving-circle.page.scss'],
  providers: [CreateJsService]
})
export class MovingCirclePage implements OnInit {
  private object: Circle;
  public margin: string;
  public size: number;

  public circleSize = 0.02;
  public speed = -4000;
  public transparency = -100;

  constructor(private createJsService: CreateJsService) { }

  ngOnInit() {
    this.object = new Circle();
    this.margin = this.createJsService.margin;
    this.size = this.createJsService.setSize();
    this.createJsService.setStage();
    this.createJsService.setObject(this.object);
    this.createJsService.setTicker();
    createjs.Ticker.addEventListener('tick', this.update.bind(this));
    this.draw();
    this.createJsService.setBackground();
  }

  private update() {
    this.createJsService.update();
  }

  public draw() {
    this.object.draw(this.createJsService.stage, this.size, this.circleSize, this.speed, this.transparency);
  }
}
