/** Завдання створити класи:
 *    фігура:
 *      координати:
 *      х, у
 *
 *    багатокутник -> фігура:
 *      вершини[координати],
 *      периметр()
 *
 *    прямокутник -> багатокутник:
 *      довжина,
 *      висота,
 *      площа(),
 *      периметр()
 *
 *    квадрат -> прямокутник:
 *      довжинаСторони,
 *      площа(),
 *      периметр()
 *
 *    круг -> фігура:
 *      радіус,
 *      площа(),
 *      периметр()
 */

class Shape {
  constructor(protected center: Point) { }
}

class Polygon {
  constructor(protected center: Point, protected points: Array<Point>) { }
}

class Rectangle {
  constructor(protected center: Point, protected width: number, protected height: number) { }
}

class Square extends Rectangle {
  constructor(protected center: Point, protected width: number) {
    super(center, width, width);
  }
}

class Circle {
  constructor(center: Point, radius: number) { }
}

class Point {
  constructor(private x: number, private y: number) { }

  getPointAtOffset(x1: number, y1: number): Point {
    return new Point(this.x + x1, this.y + y1);
  }

  getDistance(point: Point): number {
    return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
  }
}

const shapes = {
  Shape: Shape,
  Polygon: Polygon,
  Rectangle: Rectangle,
  Square: Square,
  Circle: Circle,
  Point: Point
};
