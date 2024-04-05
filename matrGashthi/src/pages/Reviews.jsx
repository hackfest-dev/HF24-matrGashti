import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import PropTypes from 'prop-types'

function Rat({ setRating, setHover, rating, hover }) {
    return (
        <div className='star'>
            {[...Array(5)].map((star, index) => {
                const currRating = index + 1;
                return (
                    <label key={index}>
                        <input type='radio' style={{ display: "none" }} name='rating' value={currRating} onClick={() => setRating(currRating)} />
                        <div style={{ display:"inline-flex"}}>
                            <FaStar style={{ cursor: "pointer" }}  size={25} color={currRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"} onMouseEnter={() => setHover(currRating)} onMouseLeave={() => setHover(null)} />
                        </div>
                    </label>
                );
            })}
        </div>
    );
}

Rat.propTypes = {
    setRating: PropTypes.func.isRequired,
    setHover: PropTypes.func.isRequired,
    rating: PropTypes.number,
    hover: PropTypes.number
};

export default function Reviews() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <>
            <h1>Feedback</h1>
            <div>
                <div className="ta1">
                    <p>How would you rate the quality of our food?</p>
                    <textarea style={{ width: '30%', height:'20%', border: '1px solid black' }} placeholder="Your feedback here..."></textarea>
                </div>
                <div className="ta2">
                    <p>Was the food delivered without any problems?</p>
                    <textarea style={{ width: '30%', height:'20%', border: '1px solid black' }} placeholder="Your feedback here..."></textarea>
                </div>
                <div className="ta3">
                    <p>Was the food delivered on time?</p>
                    <textarea style={{ width: '30%', height:'20%', border: '1px solid black' }} placeholder="Your feedback here..."></textarea>
                </div>
            </div>
            <div>
                <div className="sr">
                    <p>Overall rating</p>
                    <Rat setRating={setRating} setHover={setHover} rating={rating} hover={hover} />
                </div>
            </div>
            <div>
                <div className='b'>
                    <button style={{ backgroundColor:'green', border:'black', width:'10%', height:'10%'}} className='bt' type='text'>Submit</button>
                </div>
            </div>
        </>
    );
}
