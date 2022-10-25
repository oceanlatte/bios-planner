import React, { useState } from 'react';
import 'resize-observer-polyfill/dist/ResizeObserver.global';
import { TimeGridScheduler, classes } from '@remotelock/react-week-scheduler';
import '@remotelock/react-week-scheduler/index.css';
 
const rangeStrings = [
  ['2019-03-04 00:15', '2019-03-04 01:45'],
  ['2019-03-05 09:00', '2019-03-05 10:30'],
  ['2019-03-06 22:00', '2019-03-06 22:30'],
  ['2019-03-07 01:30', '2019-03-07 03:00'],
  ['2019-03-07 05:30', '2019-03-07 10:00'],
  ['2019-03-08 12:30', '2019-03-08 01:30'],
  ['2019-03-09 22:00', '2019-03-09 23:59'],
];
 
const defaultSchedule = rangeStrings.map(range =>
  range.map(dateString => new Date(dateString)),
);
 
function App() {
  const [schedule, setSchedule] = useState(defaultSchedule);
 
  return (
    <TimeGridScheduler
      classes={classes}
      originDate={new Date('2019-03-04')}
      schedule={schedule}
      onChange={setSchedule}
    />
  );
}

export default Weekly;