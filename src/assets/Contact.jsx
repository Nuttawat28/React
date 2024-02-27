import PropTypes from 'prop-types';

export default function Contact(props){
    return(
        <div>
            <h1>{props.email} {props.phone}</h1>
        </div>
    );
}

Contact.propTypes = {
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};

