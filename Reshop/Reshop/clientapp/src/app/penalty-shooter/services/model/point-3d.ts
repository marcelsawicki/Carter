export default  class Point
{
    _x: number;
    _y: number;
    _z: number;
    _d: number;
    

    constructor(x: number, y: number, z: number, d: number)
    {
        this._x = x;
        this._y = y;
        this._z = z;
        this._d = d;
    }

    public SetX(x_value:number)
    {
        this._x = x_value;
    }

    public SetY(y_value:number)
    {
        this._y = y_value;
    }

    public SetZ(z_value:number)
    {
        this._z = z_value;
    }

    public GetX()
    {
        return this._x;
    }

    public GetY()
    {
        return this._y;
    }

    public GetZ()
    {
        return this._z;
    }

    public GetD()
    {
        return this._d;
    }
    public RotateOX(alfaX: number): Point {
        this._y = this._y*Math.cos(alfaX*(Math.PI/180))-this._z*Math.sin(alfaX*(Math.PI/180));
        this._z = this._y*Math.sin(alfaX*(Math.PI/180))+this._z*Math.cos(alfaX*(Math.PI/180));
        return this;
        }
    
    public RotateOY(alfaY: number): Point {
        this._x = this._x*Math.cos(alfaY*(Math.PI/180))+this._z*Math.sin(alfaY*(Math.PI/180));
        this._z = -this._x*Math.sin(alfaY*(Math.PI/180))+this._z*Math.cos(alfaY*(Math.PI/180));
        return this;
        }

    public RotateOZ(alfaZ: number): Point {
        this._x = this._x*Math.cos(alfaZ*Math.PI/180)-this._y*Math.sin(alfaZ*Math.PI/180);
        this._y = this._x*Math.sin(alfaZ*Math.PI/180)+this._y*Math.cos(alfaZ*Math.PI/180);
        return this;
        }
}