export interface SelectOption {
    value: string,
    type?: "string" | "int"
};

export type SelectData = {
   [key: string] : SelectOption
} ;

export interface OperatorTypes {
    string: SelectData,
    int: SelectData
}