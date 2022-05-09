class Invoice {
    private _date: Date
    private _amount: number

    constructor(date: Date, amount: number) {
        this._date = date;
        this._amount = amount;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }
}

export default Invoice
