import { SelectData, OperatorTypes } from "./interfaces";

export const predicates:SelectData = {
   "User Email": {
        value: "user_email",
        type: "string"
    },
    "First Name": {
        value: "user_first_name",
        type: "string"
    },
    "Last Name": {
        value: "user_last_name",
        type: "string"
    },
    "Screen Width": {
        value: "screen_width",
        type: "int"
    },
    "Screen Height": {
        value: "screen_height",
        type: "int"
    },
    "# of Visits": {
        value: "visits",
        type: "int"
    },
    "Page Response t ime (ms)": {
        value: "page_response",
        type: "int"
    },
    "Domain": {
        value: "domain",
        type: "string"
    },
    "Page Path": {
        value: "path",
        type: "string"
    }
};


export const operators: OperatorTypes = {
    string:{
        "Equals": {value: "=" },
        "Contains": { value: "LIKE" },
        "Starts With": { value: "LIKE" },
        "In List": { value: "IN" }
    },
    int: {
        "Equals": { value: "=" },
        "Between": { value: "BETWEEN" },
        "Greater Than": { value: ">" },
        "Less Than": { value: "<" },
        "In List": { value: "IN" }
    }
}