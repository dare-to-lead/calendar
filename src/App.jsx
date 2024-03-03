import { useState } from "react";
import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const presentDay = new Date();
  presentDay.setDate(1);
  const allDays = [];

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  for (let i = 0; i < daysInMonth; i++) {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(presentDay.getDate() + i);
    const formattedDate = nextDay.toISOString().split("T")[0];
    allDays.push(formattedDate);
  }

  const selectedMonth = selectedDate.toLocaleString("default", {
    month: "long",
  });

  const selectedDay = selectedDate.toLocaleString("default", {
    weekday: "long",
  });

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="date"
          value={selectedDate.toISOString().split("T")[0]}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
      </div>
      <div className="day-month">
        <span>{selectedMonth}</span>
        <span>{selectedDay}</span>
      </div>

      <div className="dates-container">
        {allDays.map((day, index) => (
          <span
            key={index}
            className="date"
            style={{
              backgroundColor:
                selectedDate.toISOString().split("T")[0] === day
                  ? "#ffffff"
                  : "#2C5F2D",
              color:
                selectedDate.toISOString().split("T")[0] === day
                  ? "#2C5F2D"
                  : "#fff",
            }}>
            <span>{day.split("-")[2]}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
