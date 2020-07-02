import React from "react";
import { useRouter } from "next/router";
import ItemsContainer from "../../src/components/items-container/items-container.component";
const Movies = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <ItemsContainer slug={slug} />
    </div>
  );
};

export default Movies;
