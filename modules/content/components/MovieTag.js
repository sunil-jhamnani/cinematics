import generateTagColor from '../../../utils/generateTagColor';


const MovieTag = ({ name }) => (
  <div
    className="movie-tag"
    style={{
      backgroundColor: generateTagColor()
    }}
  >
    {name}
  </div>
);

export default MovieTag;