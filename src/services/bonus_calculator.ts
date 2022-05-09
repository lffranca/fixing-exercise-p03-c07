import Client from "@/entities/client";
import Plan from "@/entities/plan";
import Invoice from "@/entities/invoice";

class BonusCalculator {
    calculateBonusForUser(client: Client, invoices: Invoice[]): number {
        const invoices_amount = this._totalAmountOfInvoices(invoices)
        return this._calculateBonus(client.plan, invoices_amount)
    }

    private _totalAmountOfInvoices(invoices: Invoice[]): number {
        return invoices.reduce(
            (previousValue, currentValue) => previousValue + currentValue.amount,
            0,
        )
    }

    private _calculateBonus(plan: Plan, invoices_amount: number): number {
        return invoices_amount * (plan.valueOf() / 100)
    }
}

export default BonusCalculator
