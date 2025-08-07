const Categories = ({}) => {
  return (
    <div className="item">
      <h1>Category</h1>
      <div className="cat">
        <input
          type="radio"
          name="cat"
          value="art"
          id="art"
          onClick={(e) => setCat(e.target.value)}
        />
        <label htmlFor="art">Art</label>
      </div>
      <div className="cat">
        <input type="radio" name="cat" value="science" id="science" />
        <label htmlFor="science">Science</label>
      </div>
      <div className="cat">
        <input type="radio" name="cat" value="technology" id="technology" />
        <label htmlFor="technology">Technology</label>
      </div>
      <div className="cat">
        <input type="radio" name="cat" value="cinema" id="cinema" />
        <label htmlFor="cinema">Cinema</label>
      </div>
      <div className="cat">
        <input type="radio" name="cat" value="design" id="design" />
        <label htmlFor="design">Design</label>
      </div>
      <div className="cat">
        <input type="radio" name="cat" value="food" id="food" />
        <label htmlFor="food">Food</label>
      </div>
    </div>
  );
};
