
const Hello = ({ name, surname }) => {
    console.log({ name, surname });
    return (
      <div>
        <h1> {name} {surname} </h1>
      </div>
    );
  };
  
  import PropTypes from 'prop-types';

Hello.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
};

export default Hello;