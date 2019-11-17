import * as createjs from 'createjs-module';

export class Circle {
  private circle: createjs.Shape;

  constructor() { }

  public draw(stage: any, size: number, circleSize: number, speed: number, transparency: number) {
    this.circle = new createjs.Shape();
    this.circle.graphics.beginFill(createjs.Graphics.getHSL(360 * Math.random(), 100 * Math.random(), 100 * Math.random()))
      .drawCircle(0, 0, circleSize * size * Math.random());
    this.circle.alpha = transparency * Math.random() * -1;

    stage.addChild(this.circle);

    createjs.Tween.get(this.circle, { loop: true })
      .to({ x: size * 1 / 4 * Math.random(), y: size * 1 / 4 * Math.random() }, speed * Math.random() * -1)
      .to({ x: size * 1 / 2 * Math.random(), y: size * 1 / 2 * Math.random() }, speed * Math.random() * -1)
      .to({ x: size * 3 / 4 * Math.random(), y: size * 3 / 4 * Math.random() }, speed * Math.random() * -1)
      .to({ x: size * Math.random(), y: size * Math.random() }, speed * Math.random() * -1);
  }
}