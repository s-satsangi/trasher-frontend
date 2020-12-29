import React from "react";

import InfiniteScroll from "react-infinite-scroller";

export default function Feed(props) {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.getData}
      hasMore={props.hasMore}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      {props.data ? props.data : <div></div>}
    </InfiniteScroll>
  );
}
