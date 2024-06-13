import { TimelineDate } from "./TimelineDate";
import { timelineData } from "@/conts";
import { ITimeline } from "@/interfaces";

export const Timeline = () => {
  return (
    <section className="min-h-screen bg-base-200 p-8" id="experience">
      <h2 className="text-4xl text-center my-12">Experiencia</h2>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {timelineData.map((element: ITimeline) => {
          const isRecentDate = element.key === timelineData.length - 1;
          const isLastDate = element.key === 0;
          const isEven = element.key % 2 === 0;

          return (
            <TimelineDate
              key={element.key}
              element={element}
              isRecentDate={isRecentDate}
              isLastDate={isLastDate}
              isEven={isEven}
            />
          );
        })}
      </ul>
    </section>
  );
};
