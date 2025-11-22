import TrailersList from '../modules/content/components/TrailersList';
import Header from '../modules/layout/components/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StoreLanguages, StoreMovies } from '../actions/movieDataActions';
import { API_URL } from '../constants';

export async function getStaticProps() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    return {
      props: { data: json },
      revalidate: 3600
    };
  } catch (e) {
    // Fallback structure: [languagesArray, moviesObject]
    return {
      props: { data: [[], {}] },
      revalidate: 600
    };
  }
}

export default function Home({ data }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StoreLanguages(data[0]));
    dispatch(StoreMovies(data[1]));
  }, [data, dispatch]);
  return (
    <div className="home-layout">
      <Header />
      <TrailersList moviesList={data[1]} />
    </div>
  );
}