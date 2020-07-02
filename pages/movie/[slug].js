import React from "react";
import ItemDetails from "../../src/components/item-details/item-details.component";
import { useRouter } from "next/router";
const MovieDetails = ({ fetchMovieDetailsAsync, movieDetails, isFetching }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <ItemDetails slug={slug} />
    </div>
  );
};

export default MovieDetails;
