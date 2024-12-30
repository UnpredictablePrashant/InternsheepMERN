export const isAuthenticated = (state) => {
    if (state.auth.auth.idToken) return true;
    return false;
};


export const getLocalId = (state) => {
    if (state.auth.auth.localId) return state.auth.auth.localId;
    return null;
};
