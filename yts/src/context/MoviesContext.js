import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';

const MoviesContext = createContext(null); // global state share garna context banako

const initialState = {
  movies: [], // fetched movie list
  loading: false, // API call ko status
  error: null // API call ma error aayo bhane
};

function reducer(state, action){
  switch(action.type){
    case 'SET_LOADING':
      return { ...state, loading: action.payload, error: null }; // error clear garxa
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.payload }; // error msg store garxa
    case 'SET_DATA':
      return { ...state, loading: false, error: null, movies: action.payload.movies }; // movies array update garcha, loading & error reset garcha
    default:
      return state;
  }
}

// provider component banako ani tesma useReducer use gareko
// MoviesProvider le context provide garera children lai access dina milxa
export function MoviesProvider({ children }){
  const [state, dispatch] = useReducer(reducer, initialState);

  // useCallback prevents re-creation of fetchMovies on every render.
  const fetchMovies = useCallback(async () => { // Api call garera movies fetch garna
    dispatch({ type: 'SET_LOADING', payload: true }); // dispatch le reducer ma action pathaune kaam garxa
    try{
      const params = new URLSearchParams();
      params.set('limit', '8');
      const url = `https://yts.mx/api/v2/list_movies.json?${params.toString()}`;
      const res = await axios.get(url); // API call garera data fetch garxa 
      const data = res?.data?.data || {}; // nested optional chaining le safe access dinxa
      dispatch({ type: 'SET_DATA', payload: { movies: data.movies || [] } }); // movies array update garna
    }catch(err){
      dispatch({ type: 'SET_ERROR', payload: err?.message || 'Error' });
    }
  }, []);

  useEffect(() => { fetchMovies(); }, [fetchMovies]); // component load hune bittikai fetchMovies() call garna

  return <MoviesContext.Provider value={state}>{children}</MoviesContext.Provider>; // children component le useMovies() bata state access garna milxa
}

export function useMovies(){
  const ctx = useContext(MoviesContext);
  if(!ctx) throw new Error('useMovies must be used within MoviesProvider');
  return ctx;
}
// custom reusable hook banako jasko through ma context ko state access garna milxa child le

