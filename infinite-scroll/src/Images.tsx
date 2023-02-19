import React, { useEffect, useState } from "react";

import { FetchResponseI } from "./utils/types";
import LazyLoadImage from "./LazyLoadImage";
import _fetchImages from "./utils/fetchImages";

const Images = () => {
  // const [loading, err, images, sendRequest, pageNumberRef, limitRef] =
  //   useFetch();
  const [imageList, setImageList] = useState<FetchResponseI[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [apiState, setApiState] = useState({
    loading: false,
    error: null,
  });
  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  useEffect(() => {
    (async function () {
      const images = await _fetchImages(pageNumber);
      setImageList((prevImages) => [...prevImages, ...images]);
    })();
  }, [pageNumber]);

  return (
    <div>
      {/* map thru images */}
      {imageList &&
        imageList.length > 0 &&
        imageList.map((img, idx) => {
          let isLast = false;
          if ((idx + 1) % 10 === 0) isLast = true;

          return (
            <section key={`${img.author}-${img.id}`}>
              <LazyLoadImage
                author={img.author}
                id={img.id}
                downloadUrl={img.download_url}
                idx={idx}
                url={img.download_url}
                isLastImageTile={isLast}
                nextPage={nextPage}
              />
            </section>
          );
        })}
    </div>
  );
};

export default Images;
