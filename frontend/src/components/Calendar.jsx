import { add, eachDayOfInterval, endOfMonth, format, isEqual, isSameMonth, isToday, parse, startOfToday } from 'date-fns';
import './Calendar.css'
import { LeftChevronIcon, RightChevronIcon } from './Icons';
import { useState } from 'react';

const Calendar = () => {

    const dayInitials = ['D', 'L', 'M', 'M', 'J', 'V', 'S']
    let today = startOfToday()
    const [selectedDay, setSelectedDay] = useState(today)
    const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
    const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

    const previousMonth = () => {
        const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }
    
    const nextMonth = () => {
        const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    const days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth)
    })

    return (
        <div className='calendar'>
            <div>
                <div className='calendar__container'>
                    <div className="calendar__header__month">
                        <h3 className="calendar__header__title">
                            {format(firstDayCurrentMonth, 'MMMM yyyy')}
                        </h3>
                        <button type='button' className="calendar__header__button" onClick={previousMonth}>
                            <LeftChevronIcon/>
                        </button>
                        <button type='button' className="calendar__header__button" onClick={nextMonth}>
                            <RightChevronIcon/>
                        </button>
                    </div>

                    <div className='calendar__header__days'>
                        {dayInitials.map((initial, index) => (
                            <div className='day__container' key={index}>
                                {initial}
                            </div>
                        ))}
                    </div>

                    <div className='calendar__content__days'>
                        {days.map((day, dayIndx) => (
                            <div key={day.toString()} className='day__container'>
                                <button 
                                    type='button' 
                                    className={`
                                        ${isEqual(day, selectedDay) && 'text__white'}
                                        ${!isEqual(day, selectedDay) && isToday(day) && 'text__blue'} 
                                        ${!isEqual(day, selectedDay) && !isToday(day) && isSameMonth(day, firstDayCurrentMonth) && 'text__gray'}
                                        ${!isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            !isSameMonth(day, firstDayCurrentMonth) &&
                                            'text__gray__light'}
                                        ${isEqual(day, selectedDay) && isToday(day) && 'bg__blue'}
                                        ${isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            'bg__gray'}
                                        ${!isEqual(day, selectedDay) && 'hover__bg'}
                                        ${ (isEqual(day, selectedDay) || isToday(day)) &&
                                            'selected'}
                                        calendar__content__day`}
                                    onClick={() => setSelectedDay(day)}
                                >
                                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                                        {format(day, 'd')}
                                    </time>
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Calendar;