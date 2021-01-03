import React from "react";

import InfiniteScroll from "react-infinite-scroller";
// import InfiniteScroll from "react-infinite-scroll-component";

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
    // >
    // <InfiniteScroll
    //   dataLength={props.data} //This is important field to render the next data
    //   next={props.getData}
    //   hasMore={props.hasMore}
    //   loader={<h4>Loading...</h4>}
    //   endMessage={
    //     <p style={{ textAlign: "center" }}>
    //       <b>Yay! You have seen it all</b>
    //     </p>
    //   }
      // below props only if you need pull down functionality
      // refreshFunction={this.refresh}
      // pullDownToRefresh
      // pullDownToRefreshThreshold={50}
      // pullDownToRefreshContent={
      //   <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
      // }
      // releaseToRefreshContent={
      //   <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
      // }
    >
      {props.data ? props.data : <div></div>}
    </InfiniteScroll>
  );
}
