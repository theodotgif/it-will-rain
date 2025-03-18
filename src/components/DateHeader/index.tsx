import classes from './DateHeader.module.css';

interface DateHeaderProps {
  date: Date;
}

// Intl.DateTimeFormat was made 4 dis
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const DateHeader = ({ date }: DateHeaderProps) => {
  // get this outta here
  console.log(date.getDay());
  return (
    <div>
      <h2 className={classes.day}>{daysOfWeek[date.getDay()]}</h2>
      <h3 className={classes.date}>{date.toLocaleDateString()}</h3>
    </div>
  );
};

export default DateHeader;
