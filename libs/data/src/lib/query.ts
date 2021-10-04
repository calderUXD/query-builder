import { RuleTypes } from "./interfaces";
import { predicates, operators } from "./selects";

const getPredicate = (predicate:string) => predicates[predicate].value;
const stringOp = operators["string"];
const intOp = operators["int"];
const getOperator = (type:string, operator:string) => {
    return type === "string" ? stringOp[operator].value : intOp[operator].value;
}
const getValue = (operator:string, value: any) => {

    if( operator === "Between") {
        return `${value[0]} AND ${value[1]}`
    } else if(operator === "In List") {
        return `(${value})`;
    } else if(operator === "Contains") {
        return `%${value}%`;
    } else if(operator === "Starts With") {
        return `${value}%`
    } else {
        return `"${value}"`;
    }

}

type RuleHash  = {
    [key: string]: RuleTypes
}

export const parseRule = (rule: RuleTypes) => {
    const predicate = rule.predicate === null ? "string" : rule.predicate;
    const opType = predicates[predicate].type || "int";
    const operator = rule.operator || "Equals";

    return `${getPredicate(predicate)} ${getOperator(opType, operator)} ${getValue(operator, rule.value)}`;
};

export const generateSQL = (rules: RuleHash, ids:number[]) => {
    const theQueries = ids.map((id:number) => `${parseRule(rules[id])}`);
    return theQueries;
}