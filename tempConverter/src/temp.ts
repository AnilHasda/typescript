class Temperature {
  constructor(private _celcius: number) {}
  public get celcius() {
    return this._celcius;
  }
  public set celcius(degree) {
    this._celcius = degree;
  }
  //   this getter method will convert celcius to fahreinheit
  public get fahreinheit(): number {
    console.log("i am clicked");
    return (this.celcius * 9) / 5 + 32;
  }
  //   this setter method will convert fahreinheit to celcius
  public set fahreinheit(fahrein: number) {
    this._celcius = ((fahrein - 32) * 5) / 9;
  }
}
// creating object for temperature class
let data = new Temperature(20);
console.log(data.fahreinheit);
data.fahreinheit = 68;
console.log(data.celcius);
