export function RederedContent({ val, style, item }: any) {
  return (
    <div id={style.trend_box} key={val}>
      <div id={style.trend_image_container}>
        <img src={item.thumbnail} alt="image of trend" loading={"lazy"} />
      </div>
      <div id={style.trend_text_container}>
        <h3>{item.title}</h3>
      </div>
      <div id={style.count}>
        <span>
          <i className="bx bxs-group"></i>
          {item.likes}
        </span>{" "}
        <span>
          <i className="bx bxs-book-reader"></i>
          {item.read}
        </span>
      </div>
      <div id={style.call_to_action}>
        <button id={style.cta_btn} onClick={() => console.log("Like", item.title)}>
          <i className="bx bx-like"></i>Like
        </button>
        <button id={style.cta_btn} onClick={() => console.log("Reading", item.title)}>
          <i className="bx bxs-book-reader"></i>Read
        </button>
      </div>
    </div>
  );
}
