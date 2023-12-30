import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isBefore,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfTomorrow,
  startOfWeek,
} from "date-fns";
import { es } from "date-fns/locale";
import "./Calendar.css";
import { LeftChevronIcon, RightChevronIcon } from "../Icons";
import { useState } from "react";
import { useModal } from "@/hooks/useModal";

const Calendar = () => {
  let today = startOfToday();
  let tomorrow = startOfTomorrow()
  const dayInitials = ["D", "L", "M", "M", "J", "V", "S"];
  const { userData, setUserData } = useModal();

  const [selectedDay, setSelectedDay] = useState(tomorrow);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));

  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const previousMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  let newDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const selectDay = (day) => {
    setSelectedDay(day);
    setUserData({ ...userData, day });
  };

  let colStartClasses = ["", "2", "3", "4", "5", "6", "7"];

  return (
    <div className="calendar">
      <div>
        <div className="calendar__container">
          <div className="calendar__header__month">
            <h3 className="calendar__header__title">
              {format(firstDayCurrentMonth, "MMMM yyyy", { locale: es })}
            </h3>
            <button
              type="button"
              className="calendar__header__button"
              onClick={previousMonth}
            >
              <LeftChevronIcon />
            </button>
            <button
              type="button"
              className="calendar__header__button"
              onClick={nextMonth}
            >
              <RightChevronIcon />
            </button>
          </div>

          <div className="calendar__header__days">
            {dayInitials.map((initial, index) => (
              <div className="day__container" key={index}>
                {initial}
              </div>
            ))}
          </div>

          <div className="calendar__content__days">
            {newDays.map((day, dayIndx) => (
              <div
                key={day.toString()}
                className="day__container"
                style={{ gridColumnStart: colStartClasses[getDay(day)] }}
              >
                <button
                  type="button"
                  className={`
                            ${
                                isEqual(day, selectedDay) &&
                                "text__white"
                            }
                            ${
                                !isEqual(day, selectedDay) &&
                                isToday(day) &&
                                "text__blue"
                            } 
                            ${
                                !isEqual(day, selectedDay) &&
                                !isToday(day) &&
                                isSameMonth(
                                day,
                                firstDayCurrentMonth
                                ) &&
                                "text__gray"
                            }
                            ${
                                !isEqual(day, selectedDay) &&
                                !isToday(day) &&
                                !isSameMonth(
                                day,
                                firstDayCurrentMonth
                                ) &&
                                "text__gray__light"
                            }
                            ${
                                isEqual(day, selectedDay) &&
                                isToday(day) &&
                                "bg__blue"
                            }
                            ${
                                isEqual(day, selectedDay) &&
                                !isToday(day) &&
                                "bg__gray"
                            }
                            ${
                                !isEqual(day, selectedDay) &&
                                "hover__bg"
                            }
                            ${
                                (isEqual(day, selectedDay) ||
                                isToday(day)) &&
                                "selected"
                            }
                            calendar__content__day`}
                  onClick={() => selectDay(day)}
                  disabled={isBefore(day, new Date())}
                >
                  <time dateTime={format(day, "yyyy-MM-dd")}>
                    {format(day, "d")}
                  </time>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
