import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OperatorTypes, operators, predicates, SelectData } from '@query-builder/data';

type RuleTypes = {
    id: number,
    predicate: null | string,
    operator: null | string,
    value: null | string
};

export interface QueryBuilderState {
    predicates: SelectData,
    operators: OperatorTypes,
    rulesIds:number[],
    rules: {
        [details: number] : RuleTypes,
    },
    valid: boolean
};

const initialState = {
    predicates: predicates,
    operators: operators,
    rulesIds: [1],
    rules: {
        1: {
            id: 1,
            predicate: null,
            operator: null,
            value: null
        }
    },
    valid: false
} as QueryBuilderState

export const queryBulderSlice = createSlice({
  name: 'QueryBulder',
  initialState,
  reducers: {
    addRule: (state) => {
        const length =  state.rulesIds.length;
        const plusOne = length + 1;
        return {
            ...state,
            rulesIds: [...state.rulesIds, plusOne],
            rules: {
                ...state.rules, 
                [plusOne] : {
                    id: plusOne,
                    predicate: null,
                    operator: null,
                    value: null
                }
            }
        }
    },
    deleteRule: (state, action: PayloadAction<number>) => {

        const theId = action.payload;
        const removeOne =  state.rulesIds.filter(id => id !== theId);
        delete state.rules[theId];

        if(theId === 1) {
            return initialState
        } else {
            return {
                ...state,
                rulesIds: removeOne,
                rules: state.rules
            }
        }
    }
  },
});

export const { addRule, deleteRule } = queryBulderSlice.actions;

export default queryBulderSlice.reducer;