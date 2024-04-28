import { CustomCalendarEvent } from "@/routes/employee-scheduling/components/BigCalendar.tsx";

export const CalendarToastDescription = (event: CustomCalendarEvent) => {
  return (
    <>
      <strong className={"text-left"}>{event.title}</strong>
      <span>
        {" "}
        from{" "}
        {new Date(event.start!).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}{" "}
        to{" "}
        {new Date(event.end!).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
        :{" "}
      </span>
      <p className={"text-left font-medium"}>{event.employee}</p>
    </>
  );
};
