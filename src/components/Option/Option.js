
import { Link } from 'react-router-dom';
import './Option.css'

const Option = ({ option, detail }) => {
    console.log(detail)

    const { correctAnswer } = detail

    const haddAdd = (detail) => {


        if (correctAnswer === option) {

            alert('right')
        }
        else {

            alert('wrong')
        }
    }

    return (
        <div>
            <ul>
                <Link onClick={haddAdd} > <li key={option.index} className='option bg-green-200'>
                    <span className=' text-1xl'> <input type='checkbox' /></span> {option}

                </li></Link>

            </ul>


        </div>
    );
};

export default Option;