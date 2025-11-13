import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    // Set date to October 26, 2025 (or current year if passed) to ensure positive numbers
    const difference = +new Date("2025-10-26") - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-md border border-rose-100">
      <span className="text-2xl md:text-3xl font-serif font-bold text-rose-500">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500 mt-1">{label}</span>
    </div>
  );

  return (
    <section id="countdown" className="py-20 bg-rose-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Counting Down To The Big Day
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Mins" />
          <TimeBox value={timeLeft.seconds} label="Secs" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;