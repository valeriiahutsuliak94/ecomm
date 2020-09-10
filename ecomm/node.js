

  if (typeof action === 'function') {
    return action(dispatch, getState, extraArgument);
  }