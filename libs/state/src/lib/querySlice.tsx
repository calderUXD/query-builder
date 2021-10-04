import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OperatorTypes, operators, predicates, SelectData, RuleTypes } from '@query-builder/data';
import {omit} from 'lodash';

export interface QueryBuilderState {
    predicates: SelectData,
    operators: OperatorTypes,
    rulesIds:number[],
    rules: {
        [details: number] : RuleTypes,
    },
    valid: boolean
    results: null | string
};

const initialState = {
    predicates: predicates,
    operators: operators,
    rulesIds: [1323444220],
    rules: {
        1323444220: {
            id: 1323444220,
            predicate: null,
            operator: null,
            value: undefined
        }
    },
    valid: false,
    results: null
} as QueryBuilderState

export const queryBulderSlice = createSlice({
  name: 'QueryBulder',
  initialState,
  reducers: {
    addRule: (state) => {
        const newId = Math.floor(1000000000 + Math.random() * 9000000000);;
        return {
            ...state,
            rulesIds: [...state.rulesIds, newId],
            rules: {
                ...state.rules, 
                [newId] : {
                    id: newId,
                    predicate: null,
                    operator: null,
                    value: undefined
                }
            }
        }
    },
    deleteRule: (state, action: PayloadAction<number>) => {

        const theId = action.payload;
        const length = state.rulesIds.length
        const ids = length === 1 
            ? initialState.rulesIds
            : state.rulesIds.filter(id => id !== theId);
            
        const newList = length === 1 
        ? initialState.rules
        : omit(state.rules, [theId]);

        return {
            ...state,
            rulesIds: ids,
            rules: newList
        }
    },
    resetRules: () => {
        return initialState
    },
    setPredicate: (state, action: PayloadAction<{id:number, value:string}>) => {
        const pl = action.payload;
        const val = state.predicates;
        return {
            ...state,
            rules: {
                ...state.rules,
                [pl.id]: {
                    id: pl.id,
                    predicate: pl.value,
                    operator: null,
                    value: undefined,
                }
            }
        }
    },
    setOperator: (state, action: PayloadAction<{id:number, value:string}>) => {
        const pl = action.payload;
        const ruleState = state.rules[pl.id];
        const val = state.operators;
        return {
            ...state,
            rules: {
                ...state.rules,
                [pl.id]: {
                    id: pl.id,
                    predicate: ruleState.predicate,
                    operator: pl.value,
                    value: undefined,
                }
            }
        }
    },
    setValue: (state, action: PayloadAction<{id:number, value:string | number | Array<number>}>) => {
        const pl = action.payload;
        const ruleState = state.rules[pl.id];
        return {
            ...state,   
            rules: {
                ...state.rules,
                [pl.id]: {
                    id: pl.id,
                    predicate: ruleState.predicate,
                    operator: ruleState.operator,
                    value: pl.value,
                }
            }
        }
    },
    checkValid: (state, action: PayloadAction<boolean>) => {
        return {
            ...state,   
            valid: action.payload
        }
    }
  },
});

export const { addRule, deleteRule, resetRules, setPredicate, setOperator, setValue, checkValid } = queryBulderSlice.actions;

export default queryBulderSlice.reducer;