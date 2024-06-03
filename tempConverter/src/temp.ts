class Temperature{
    constructor(private _celcius:number){}
    public get celcius(){
        return this._celcius;
    }
    public set celcius(degree){
        this._celcius=degree;
    }
}