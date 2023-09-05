function StarRating({ rating }) {

  return <div className="star-wrapper">
    {Array.from({length: rating}).map(item => {
      return (
        <img
        alt=""
        className="gold-star"
        src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        key={crypto.randomUUID()}
       />
      )
    })}
  </div>;
}

export default StarRating;
