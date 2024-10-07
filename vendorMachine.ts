class vendorMachine {
    private isOn;
    private snackQty;
    private snackPrice = 2;
    private money;

    public buySnack() {
        this.isOn = true;
        this.snackQty > 0;
        this.money = this.money + this.snackPrice;
        this.snackQty--;
    };
    public reset() {
        this.isOn = true;
        this.snackQty = 20;
        this.money = 0;
    };
    public shootWithFoot() {
        // fait tomber 5 snacks et 20e. Et eteint la machine
        this.snackQty = this.snackQty - 5;
        this.money = this.money - 20;
        this.isOn = false;
    };
}

const esdVM = new vendorMachine;

esdVM.reset;
esdVM.buySnack;
esdVM.shootWithFoot;