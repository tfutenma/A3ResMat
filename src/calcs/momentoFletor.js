module.exports = function (S1,S2,Q,dS1,dS2,dQ){
    return (S1 * dS1)+(S2 * dS2)+(Q*dQ)
}