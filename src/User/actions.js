import fetch from 'isomorphic-fetch';
import * as actionTypes from './actionTypes';

const {
    USER_INFO,
    USER_REP
} = actionTypes;

export function getUserAction(user) {
    return {
        type: USER_INFO,
        user: user,
    };
}

export function getUser(name) {
    const req = new Request('https://api.github.com/users/' + name);
    return dispatch => {
        return fetch(req)
            .then(res => res.json())
            .then(res => {
                dispatch(getUserAction(res));
            });
    };
}

export function getUserRepAction(reps) {
    return {
        type: USER_REP,
        reps: reps,
    };
}

export function getUserRep(name) {
    const req = new Request('https://api.github.com/users/' + name + '/repos');
    return dispatch => {
        return fetch(req)
            .then(res => res.json())
            .then(res => {
                dispatch(getUserRepAction(res));
            });
    };
}
