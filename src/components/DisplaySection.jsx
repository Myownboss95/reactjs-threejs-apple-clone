function DisplaySection({ triggerPreview }) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Testing Apple Site</p>
      <span className="description">
        from $20/mo you can own an iphone before you can trade for a macbook pro
      </span>
      <button className="button" onClick={triggerPreview}>
        Try This Now
      </button>
      <button className="back-button" onClick={handleScrollToTop}>
        Top
      </button>
    </div>
  );
}

export default DisplaySection;
