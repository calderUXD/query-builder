import { SelectData, OperatorTypes } from "./interfaces";

export const predicates:SelectData = [
    {
        label: "User Email",
        value: "user_email",
        type: "string"
    },
    {
        label: "First Name",
        value: "user_first_name",
        type: "string"
    },
    {
        label: "Last Name",
        value: "user_last_name",
        type: "string"
    },
    {
        label: "Screen Width",
        value: "screen_width",
        type: "int"
    },
    {
        label: "Screen Height",
        value: "screen_height",
        type: "int"
    },
    {
        label: "# of Visits",
        value: "visits",
        type: "int"
    },
    {
        label: "Page Response t ime (ms)",
        value: "page_response",
        type: "int"
    },
    {
        label: "Domain",
        value: "domain",
        type: "string"
    },
    {
        label: "Page Path",
        value: "path",
        type: "string"
    }
];


export const operators: OperatorTypes = {
    string:[
        {
            label: "Equals",
            value: "="
        },
        {
            label: "Contains",
            value: "LIKE"
        },
        {
            label: "Starts With",
            value: "LIKE"
        },
        {
            label: "In List",
            value: "IN"
        }
    ],
    int: [
        {
            label: "Equals",
            value: "="
        },
        {
            label: "Between",
            value: "LIKE"
        },
        {
            label: "Greater Than",
            value: ">"
        },
        {
            label: "Less Than",
            value: "<"
        },
        {
            label: "In List",
            value: "IN"
        }
    ]
}