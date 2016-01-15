interface IDrawable {
    getPosX(): number;
    getPosY(): number;
    draw(context: CanvasRenderingContext2D);
}