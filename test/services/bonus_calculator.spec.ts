import Invoice from "@/entities/invoice";
import BonusCalculator from "@/services/bonus_calculator";
import Client from "@/entities/client";
import Plan from "@/entities/plan";

describe('Calculating user bonus', () => {
    const invoiceAmount1 = 1002
    const invoiceAmount2 = 1230
    const invoiceAmount3 = 2300
    const totalAmountOfInvoices = invoiceAmount1 + invoiceAmount2 + invoiceAmount3
    const amountBonusBasic = totalAmountOfInvoices * 0.3
    const amountBonusSilver = totalAmountOfInvoices * 0.2
    const amountBonusGold = totalAmountOfInvoices * 0.1
    const amountBonusPlatinum = totalAmountOfInvoices * 0.05

    const invoices: Invoice[] = [
        new Invoice(
            new Date(2018, 1),
            invoiceAmount1
        ),
        new Invoice(
            new Date(2018, 2),
            invoiceAmount2
        ),
        new Invoice(
            new Date(2018, 3),
            invoiceAmount3
        ),
    ]

    const bonusCalculator = new BonusCalculator()

    test('should calculate the bonus using the invoices and the basic plan user', () => {
        const client = new Client(Plan.Basic)
        const bonus = bonusCalculator.calculateBonusForUser(client, invoices)
        expect(bonus).toEqual(amountBonusBasic)
    })

    test('should calculate the bonus using the invoices and the silver plan user', () => {
        const client = new Client(Plan.Silver)
        const bonus = bonusCalculator.calculateBonusForUser(client, invoices)
        expect(bonus).toEqual(amountBonusSilver)
    })

    test('should calculate the bonus using the invoices and the gold plan user', () => {
        const client = new Client(Plan.Gold)
        const bonus = bonusCalculator.calculateBonusForUser(client, invoices)
        expect(bonus).toEqual(amountBonusGold)
    })

    test('should calculate the bonus using the invoices and the platinum plan user', () => {
        const client = new Client(Plan.Platinum)
        const bonus = bonusCalculator.calculateBonusForUser(client, invoices)
        expect(bonus).toEqual(amountBonusPlatinum)
    })
})
