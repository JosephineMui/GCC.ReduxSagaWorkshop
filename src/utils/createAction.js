// eslint-disable-next-line
export const createAction = (type, ...argNames) => {
  return (...args) => {
    // eslint-disable-next-line
    let action = { type };
    argNames.forEach((arg, index) => {
      action[arg] = args[index];
    });
    return action;
  };
};
