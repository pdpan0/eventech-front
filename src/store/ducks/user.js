import { createReducer, createActions } from 'reduxsauce'

const INITIAL_STATE = {}

/*
*   Criando Actions Types & Creators
*/
export const { Types, Creators } = createActions({
    login: ['username', 'password'],
    logout: []
})

/*
*   Criando Reducers Handlers
*/
const login = (state = INITIAL_STATE, actions) => ({
    ...state,
    username: actions.username,
    password: actions.password
})

const logout = (state = INITIAL_STATE, actions) => ({
    username: null,
    password: null
})

/*
*   Criando Reducer
*/
export default createReducer(INITIAL_STATE, {
    [Types.LOGIN]: login,
    [Types.LOGOUT]: logout
})