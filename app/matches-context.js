import React from 'react';

export const MatchesContext = React.createContext({
  matches: [],
  newMatch: (match) => {},
});
