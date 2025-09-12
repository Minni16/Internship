import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';

const MoviesContext = createContext(null);

const initialState = {
  movies: [],
  loading: false,
  error: null
};

function reducer(state, action){
  switch(action.type){
    case 'SET_LOADING':
      return { ...state, loading: action.payload, error: null }; // error clear garna
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.payload }; // error store garna
    case 'SET_DATA':
      return { ...state, loading: false, error: null, movies: action.payload.movies }; // movies store garna
    default:
      return state;
  }
}

// provider component banako ani tesma useReducer use gareko
export function MoviesProvider({ children }){
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovies = useCallback(async () => { // Api call garera movies fetch garna
    dispatch({ type: 'SET_LOADING', payload: true });
    try{
      const params = new URLSearchParams();
      params.set('limit', '8');
      const url = `https://yts.mx/api/v2/list_movies.json?${params.toString()}`;
      const res = await axios.get(url);
      const data = res?.data?.data || {};
      dispatch({ type: 'SET_DATA', payload: { movies: data.movies || [] } });
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
// custom hook banako jasko through ma context ko state access garna milxa child le

