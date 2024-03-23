import { Operators } from "./enums"

export const getOperator = (operator) => {
    switch (operator) {
        case '+':
            return Operators.plus
        case '-':
            return Operators.minus
        case '*':
            return Operators.multiply
        case '/':
            return Operators.divide
        case '%':
            return Operators.modulo
        default:
            return Operators.plus
    }
}