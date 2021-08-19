export const LoanForm = [
    {
        "type": "text",
        "name": "companyName",
        "placeholder": "Entity / Company Name",
        "labelText": "Entity / Company Name",
        "isRequired": true,
        "requiredMessage": "Company is required.",
        "defaultValue": ""
    },
    {
        "type": "text",
        "name": "companyName1",
        "placeholder": "Entity / Company Name 1",
        "labelText": "Entity / Company Name 1",
        "isRequired": true,
        "requiredMessage": "Company is required.",
        "defaultValue": ""
    },
    {
        "type": "text",
        "name": "projectName",
        "placeholder": "Project Name",
        "labelText": "Project Name",
        "isRequired": true,
        "requiredMessage": "Project name is required.",
        "defaultValue": ""
    },
    {
        "type": "select",
        "name": "loanType",
        "placeholder": "Choose Loan Type",
        "labelText": "Loan Type",
        "isRequired": true,
        "requiredMessage": "Loan type is requried.",
        "options": [
            { "text": "Line of Credit", "value": 1 },
            { "text": "Real Estate", "value": 2 },
            { "text": "Rental Property", "value": 3 },
            { "text": "Construction", "value": 4 },
            { "text": "Land Development", "value": 5 },
            { "text": "Accounts Rec", "value": 6 },
            { "text": "Inventory", "value": 7 },
            { "text": "Equipment", "value": 8 },
            { "text": "Acquisition", "value": 9 },
            { "text": "Start up", "value": 10 },
            { "text": "SBA", "value": 11 }
        ],
        "defaultValue": 0
    },
    {
        "type": "number",
        "name": "requestedLoanAmount",
        "placeholder": "Requested Loan Amount",
        "labelText": "Requested Loan Amount",
        "isRequired": true,
        "requiredMessage": "Loan amount is requried.",
        "defaultValue": ""
    }
]
