import React from 'react';
import { Link, useParams } from 'react-router-dom';
//  prettier-ignore

const Hero = () => {
  const params = useParams();
  return (
    <>
      <h1>No reactions to your reddit posts?</h1>
      <h3>
        Great timing, great results! Find the best time to post on your
        subreddit.
      </h3>
      <Link to={`/search/${params.term}`}>
        <button type="button">SHOW ME THE BEST TIME</button>
      </Link>
      <input type="text" placeholder="Search..." defaultValue={params.term} />
    </>
  );
};

export default Hero;
