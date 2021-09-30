export interface SelectOption {
    label: string,
    value: string,
    type?: "string" | "int"
};

export type SelectData = SelectOption[];

export interface OperatorTypes {
    string: SelectData,
    int: SelectData
}