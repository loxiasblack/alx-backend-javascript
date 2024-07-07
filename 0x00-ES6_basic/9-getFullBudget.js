import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    getIncomeInDollars() {
      return `$${budget.income}`;
    },
    getIncomeInEuros() {
      return `${budget.income} euros`;
    },
  };
  return fullBudget;
}
