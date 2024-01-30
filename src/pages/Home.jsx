import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../request";

const Home = () => {
  return (
    <>
      <Main />
      {/* <Row rowID="1" title="Upcoming" fetchUrl={requests.requestUpcoming} /> */}
      <Row rowID="6" title="New" fetchURL={requests.requestNew} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      {/* prettier-ignore */}
      <Row rowID="5" title="People Like You Love" fetchURL={requests.requestCompare} />
      <Row rowID="6" title="Spotlight" fetchURL={requests.requestSpotlight} />
      <Row
        rowID="7"
        title="Watch Again"
        fetchURL={requests.requestWatchAgain}
      />
      <Row rowID="8" title="Random" fetchURL={requests.requestRandom} />
    </>
  );
};

export default Home;
