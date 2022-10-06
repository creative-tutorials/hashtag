import { Col2Tabs } from "../UI/Col2Tabs";
import { useRef, useMemo, useState, useEffect } from "react";
import InputPopUp from "../UI/textBox";
import { ReadFileFromSystem } from "../fileReader/fileReader";
import { HashTagQuotes } from "../fun/quotes";
import { Col1Tabs } from "../UI/col1Tabs";
import logo from "/hashtag_logo.png";
import portrait from "/ab1.jpg";
import React from "react";
import LazyLoad from "react-lazy-load";
const HashtagHomePage = () => {
  const [isRendering, setisRendering] = useState(false);
  const _box_item: any = useRef();
  useEffect(() => {
    isRendering ? null : [LoadedPage(), Carousel()];
    return () => {
      setisRendering(false);
    };
  });

  const quotes = HashTagQuotes();
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const lodge = useMemo(() => randomQuote, [randomQuote]);
  console.log(lodge);
  const input: any = useRef();

  const LoadedPage = () => {
    if (!isRendering) {
      setisRendering(false);
      let inputPlaceholder = input.current.placeholder;
      input.current.placeholder = randomQuote;
      // Carousel();
    } else {
      setisRendering(true);
    }
  };
  const ReqFile = (event: any) => {
    ReadFileFromSystem(event);
  };
  const Carousel = () => {
    console.log("carousel loaded");
    let _bx = _box_item.current;
    let count = 0;
    _bx.scrollLeft = 0;
    const carouselInterval = setInterval(() => {
      count += 187;
      _bx.scrollLeft = count;
      console.log(count);
      if (count === 187) {
        clearInterval(carouselInterval);
        console.log("interval finished");
      }
    }, 3000);
  };
  return (
    <>
      <div className="cols">
        <div className="col-1">
          <div className="img">
            <img src={logo} alt="app_logo" width={100} height={100} />
          </div>
          <Col1Tabs />
        </div>
        <Col2Tabs
          portrait={portrait}
          input={input}
          ReqFile={ReqFile}
          _box_item={_box_item}
        />
      </div>
      <InputPopUp />
    </>
  );
};
export default HashtagHomePage;
