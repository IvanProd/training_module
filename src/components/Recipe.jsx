import {BsAlarm} from 'react-icons/bs';
import {HiOutlineChartPie, HiOutlineChartBar} from 'react-icons/hi';

export const Recipe = ({recipe}) => {
    const { name, time, servings, calories } = recipe;

    return <div>
        <h2>{name}</h2>
        <div>
            <div>
                <BsAlarm /> 
                <p>{time} min</p>
            </div>
            <div>
            <HiOutlineChartPie />
                <p>{servings} servings</p>
            </div>
            <div>
                <HiOutlineChartBar />
                <p>{calories} calories</p>
            </div>
        </div>
    </div> ;
}