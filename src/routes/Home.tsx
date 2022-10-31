import { Col2Tabs } from "../components/UI/Col2Tabs";
import { useRef, useMemo, useState, useEffect } from "react";
import { ReadFileFromSystem } from "../components/upload/fileReader";
import { HashTagQuotes } from "../components/fun/quotes";
import { Col1Tabs } from "../components/UI/col1Tabs";
import portrait from "/ab1.jpg";
import React from "react";
import LazyLoad from "react-lazy-load"; /* 👈 Will be used soon 🔜 */
const HashtagHomePage = () => {
  const dataFetchedRef = useRef(false);
  const _box_item: any = useRef();

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    LoadedPage();
  }, []);

  const quotes = HashTagQuotes();
  /**
   * Returns a random quote from the quotes array.
   * @returns {string} - A random quote from the quotes array.
   */
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const lodge = useMemo(() => randomQuote, [randomQuote]);
  const input: any = useRef();

  const LoadedPage = () => {
    if (dataFetchedRef) {
      let inputPlaceholder = input.current.placeholder;
      /**
       * Sets the placeholder text of the input element to a random quote from the quote array.
       * @returns None
       */
      input.current.placeholder = lodge;
    }
  };
  /**
   * FetchFileFromFileAPI is a function that takes an event as an argument and calls the
   * ReadFileFromSystem function with the event as an argument.
   * @param {any} event - any - The event object that is passed to the function.
   */
  const FetchFileFromFileAPI = (event: any) => {
    ReadFileFromSystem(event);
  };
  return (
    <>
      <div className="cols">
        <div className="col-1">
          <Col1Tabs />
        </div>
        <Col2Tabs
          portrait={portrait}
          input={input}
          FetchFileFromFileAPI={FetchFileFromFileAPI}
          _box_item={_box_item}
        />
      </div>
    </>
  );
};
export default HashtagHomePage;
