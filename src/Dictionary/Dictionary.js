export const getCurriencyCollection = () => ([

    {id: "PLN", title: "PLN"},
    {id: "EUR", title: "EUR"},
    {id: "USD", title: "USD"},
    {id: "CHF", title: "CHF"},
    {id: "GBP", title: "GBP"},
])

const KEYS = {

    Investment: "Investment",
    InvestmentId: "InvestmentId",

}

export function insertInvestments(data) {
    let Investment = getAllInvestments();
    data["id"]=generateInvestmentId()
    Investment.push(data)
    localStorage.setItem(KEYS.Investment, JSON.stringify(Investment))
}

export function generateInvestmentId() {
    if (localStorage.getItem(KEYS.InvestmentId) == null)
        localStorage.setItem(KEYS.InvestmentId, '0')
    var id = parseInt(localStorage.getItem(KEYS.InvestmentId))
    localStorage.setItem(KEYS.InvestmentId, (++id).toString())
    return id;
}
export function getAllInvestments() {
    if (localStorage.getItem(KEYS.Investment) == null)
        localStorage.setItem(KEYS.Investment, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.Investment));

}