import { useState } from 'react';
import Calendar from 'react-calendar';
import { format, addMinutes } from 'date-fns';
import './CalendarAndScheduler.scss';

export interface Event {
    id: string;
    title: string;
    start: Date;
    end: Date;
}

interface SchedulerProps {
    events: Event[];
}

const Scheduler: React.FC<SchedulerProps> = ({ events }) => {
    const startDate = new Date();
    const endDate = addMinutes(startDate, 24 * 60); // End of the day
    const intervals = [];
    let currentIntervalStart = startDate;

    while (currentIntervalStart < endDate) {
        intervals.push(currentIntervalStart);
        currentIntervalStart = addMinutes(currentIntervalStart, 30);
    }

    return (
        <div className="scheduler">
            {intervals.map((intervalStart, index) => (
                <div key={index} className="time-slot">
                    <span>{format(intervalStart, 'HH:mm')} - {format(addMinutes(intervalStart, 30), 'HH:mm')}</span>
                    <div className="events">
                        {events
                            .filter(event => event.start >= intervalStart && event.end <= addMinutes(intervalStart, 30))
                            .map(event => (
                                <div key={event.id} className="event">
                                    {event.title}
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const events: Event[] = [
    { id: '1', title: 'Meeting with John', start: new Date('2024-05-19T09:00:00'), end: new Date('2024-05-19T09:30:00') },
    { id: '2', title: 'Lunch Break', start: new Date('2024-05-19T12:00:00'), end: new Date('2024-05-19T13:00:00') },
];

export default function CalendarAndScheduler() {
    const [value, onChange] = useState<any>(new Date());
    // Example events array, replace with your actual data

    return (
        <div>
            <Calendar onChange={onChange} value={value} />
            <Scheduler events={events} />
        </div>
    );
}
