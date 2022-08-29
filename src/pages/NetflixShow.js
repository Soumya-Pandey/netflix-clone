import React from 'react'
import api from '../api/api'
import Row from '../components/Row/Row';
import Banner from '../components/banner/Banner';


const NetflixShow = () => {
  return (
    <div>
      <Banner/>
      <Row title="Netflix Originals" fetchUrl = {api.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl = {api.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl = {api.fetchTopRated} isLargeRow />
      <Row title="Action" fetchUrl = {api.fetchActionMovies} isLargeRow />
      <Row title="Comedy" fetchUrl = {api.fetchComedyMovies} isLargeRow />
      <Row title="Horror" fetchUrl = {api.fetchHorrorMovies} isLargeRow />
      <Row title="Romance" fetchUrl = {api.fetchRomanceMovies} isLargeRow />
      <Row title="Documentaries" fetchUrl = {api.fetchDocumentaries} isLargeRow />
    </div>
  )
}

export default NetflixShow
