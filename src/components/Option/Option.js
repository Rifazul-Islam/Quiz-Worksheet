
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Option.css'

const Option = ({ option, detail }) => {
    // console.log(detail)

    const { correctAnswer } = detail

    const haddAdd = (detail) => {


        if (correctAnswer === option) {

            toast.success('success: right answer', { autoClose: 500 })
        }
        else {


            toast.warning('warring: false answer', { autoClose: 500 })
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