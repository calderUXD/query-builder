export interface SelectOption {
    value: string,
    type?: string
};

export type SelectData = {
   [key: string] : SelectOption
};

export interface OperatorTypes {
    [type: string]: SelectData
}

export interface RuleTypes {
    id: number,
    predicate: null | string,
    operator: null | string,
    value: undefined | string | number | Array<number>
};