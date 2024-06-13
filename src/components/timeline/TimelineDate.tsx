import { GrValidate } from "react-icons/gr";

import { ITimeline } from "@/interfaces";

interface Props {
  element: ITimeline;
  isRecentDate: boolean;
  isLastDate: boolean;
  isEven: boolean;
}

export const TimelineDate = ({
  element,
  isRecentDate,
  isLastDate,
  isEven,
}: Props) => {
  // Las fechas pares se alinean a la derecha, las impares a la izquierda
  const positionClass = isEven
    ? "timeline-end text-start"
    : "timeline-start text-start md:text-end";

  return (
    <li>
      {/* La fecha más reciente no tiene línea superior de color */}
      {isRecentDate && <hr className="rounded-lg bg-gray-400" />}

      {/* Las fechas intermedias tienen línea superior de color */}
      {!isRecentDate && <hr className="bg-info" />}

      <div className="timeline-middle timeline-box bg-info mx-2">
        <GrValidate className="text-white dark:text-gray-900" size={20} />
      </div>

      <div className={`${positionClass} my-4`}>
        <time className="font-mono">{element.date}</time>

        {element.company && (
          <span className="block italic font-semibold text-gray-700/90 dark:text-gray-200/90">
            {element.company}
          </span>
        )}

        <div className="text-lg font-black">{element.title}</div>
        <p className="text-balance">{element.description}</p>
      </div>

      {/* La fecha más antigua no tiene línea inferior */}
      {!isLastDate && <hr className="bg-info" />}
    </li>
  );
};
