import * as createjs from 'createjs-module';
import { Shape } from './shape';

export class ShapeGenerator {
  private shape: Shape;
  private shapes: any = [];
  private vx: number;
  private vy: number;
  private life: number;

  constructor() { }

  // 図形生成
  public draw(stage: any, scale: number, maxLife: number, gravity: number) {
    this.vx = 30 * (Math.random() - 0.5);
    this.vy = 30 * (Math.random() - 0.5);
    this.life = maxLife * (Math.random() - 0.5);

    this.shape = new Shape(this.vx, this.vy, this.life);
    this.shape.graphics
      .beginFill(createjs.Graphics.getHSL(360 * Math.random(), 100 * Math.random(), 100 * Math.random()))
      .beginStroke(createjs.Graphics.getHSL(360 * Math.random(), 100 * Math.random(), 100 * Math.random()))
      .setStrokeStyle(10 * Math.random())
      .drawPolyStar(0, 0, 50 * Math.random(), 20 * Math.random(), Math.random(), 360 * Math.random());
    this.shape.alpha = Math.random();
    this.shape.x = stage.mouseX;
    this.shape.y = stage.mouseY;

    this.shape.scaleX = this.shape.scaleY = scale;

    this.shapes.push(this.shape);
    stage.addChild(this.shape);

    // 更新処理
    for (let i = 0; i < this.shapes.length; i++) {
      // 配列から取り出す
      const fetchedShape = this.shapes[i];
      // 重力
      fetchedShape.vy += gravity;
      // 摩擦
      fetchedShape.vx *= 0.96;
      fetchedShape.vy *= 0.96;
      // 速度を位置に適用
      fetchedShape.x += fetchedShape.vx;
      fetchedShape.y += fetchedShape.vy;
      // 地面
      if (fetchedShape.y > stage.canvas.height) {
        // 行き過ぎ補正
        fetchedShape.y = stage.canvas.height;
        // Y軸の速度を反転
        fetchedShape.vy *= -1;
      }
      // 図形の大きさを残り寿命依存にする
      const fetchedShapeScale = fetchedShape.life / maxLife * scale;
      fetchedShape.scaleX = fetchedShape.scaleY = fetchedShapeScale;
      // 残り寿命を減らす
      fetchedShape.life -= 1;
      // 残り寿命が0以下になったらステージ及び配列から削除
      if (fetchedShape.life <= 0) {
        stage.removeChild(fetchedShape);
        this.shapes.splice(i, 1);
      }
    }
  }
}