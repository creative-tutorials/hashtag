import { TrendBoxComponent } from "./trendBoxComponent";
import { useEffect, useRef } from "react";
export function DataComponent({ data, props, style, dataRef }: any) {
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
        <h3>Discover new trends</h3>
      </span>
      <div id={style.trends_container} ref={trendsContainer}>
        {dataRef.map(function (item: any, index: any) {
          return <TrendBoxComponent style={style} index={index} item={item} />;
        })}
      </div>
    </>
  );
}
