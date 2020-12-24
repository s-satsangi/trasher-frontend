import React from "react";

import InfiniteScroll from "react-infinite-scroller";

export default function Feed(props) {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.getData}
      hasMore={true || false}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      {props.data}
    </InfiniteScroll>
  );
}
