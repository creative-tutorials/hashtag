import { RenderedTrendsBox } from './renderedTrendsBox';
import { DiscoverTrend } from "./discoverTrend";
import { useEffect, useRef } from "react";
export function TrendsList({ data, props, style, dataRef }: any) {
  const trendsContainer: any = useRef();
  let checkRenderedLimit = 0;
  useEffect(() => {
    checkRenderedLimit++;
    if (checkRenderedLimit > 1) [console.log("hello")];
    else RecoverTrendsFromPropsData();

    return () => {
      checkRenderedLimit = 0;
      console.log("removed");
    };
  }, []);
  const RecoverTrendsFromPropsData = async () => {};
  return (
    <>
      <span id={style.top_text}>
        <h3>Discover new trends</h3>
      </span>
      <span id={style.reloadBtn}>
        <button id={style.rldBtn} onClick={DiscoverTrend}>
          <i className="bx bx-rotate-left"></i>Fetch new Trend
        </button>
      </span>
      <div id={style.trends_container} ref={trendsContainer}>
        {dataRef.map(function (item: any, index: any) {
          return (
            <RenderedTrendsBox style={style} index={index} item={item} />
          );
        })}
      </div>
    </>
  );
}
