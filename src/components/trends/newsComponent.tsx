import { RederedContent } from "./renderedContent";
import { useEffect, useRef } from "react";
export function NewsComponent({ data, props, style, dataRef }: any) {
  const trendsContainer: any = useRef();
  let checkRenderedLimit = 0;
  useEffect(() => {
    checkRenderedLimit++;
    if (checkRenderedLimit > 1) [null];
    else RecoverTrendsFromPropsData();

    return () => {
      checkRenderedLimit = 0;
    };
  }, []);
  const RecoverTrendsFromPropsData = async () => {};
  return (
    <>
      <span id={style.top_text}>
        <p>Discover & Read news from around the world</p>
        <h3>Let’s Start Reading today</h3>
      </span>
      <div id={style.trends_container} ref={trendsContainer}>
        {dataRef.map(function (item: any, index: any) {
          return <RederedContent style={style} val={index} item={item} />;
        })}
      </div>
    </>
  );
}
