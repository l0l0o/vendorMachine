class vendorMachine {
    private isOn: boolean;
    private snackQty: number;
    private snackPrice: number;
    private money: number;

    public constructor() {
        this.isOn = false;
        this.money = 0;
        this.snackQty = 50;
        this.snackPrice= 2
    }

    public buySnack(): void {
        this.isOn = true;
        if (this.snackQty <= 0) {
            throw new Error ("La machine est vide.");
        }
        this.money = this.money + this.snackPrice;
        this.snackQty--;
    };
    public reset(): void {
        this.isOn = true;
        this.snackQty = 50;
        this.money = 0;
    };
    public shootWithFoot(): void {
        this.snackQty = this.snackQty - 5;
        if (this.money < 20) {
            throw new Error("Bien essayé, mais y'a rien à gratter.")
        }
        this.money = this.money - 20;
        this.isOn = false;
    };
}

const esdVendorMachine = new vendorMachine;

esdVendorMachine.reset;
esdVendorMachine.buySnack;
esdVendorMachine.shootWithFoot;