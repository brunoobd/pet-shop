import { AppointmentPeriod, AppointmentWithDetails } from '@/types/appointment';
import { Cloudy, Moon, Sun } from 'lucide-react';
import { PeriodSectionAppointmentItem as AppointmentItem } from '@/components/period-section/appointment-item';

export type PeriodSectionProps = {
  title: string;
  type: AppointmentPeriod;
  timeRange: string;
  appointments: AppointmentWithDetails[];
};

const periodIcons = {
  morning: <Sun className="text-accent-yellow" />,
  afternoon: <Cloudy className="text-accent-orange" />,
  evening: <Moon className="text-accent-blue" />,
};

export const PeriodSection = ({
  title,
  type,
  timeRange,
  appointments,
}: PeriodSectionProps) => {
  return (
    <section className="mb-8 bg-background-tertiary rounded-xl">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#2E2C30]">
        <div className="flex items-center gap-2">
          {periodIcons[type]}

          <h2 className="text-label-large-size text-content-primary">
            {title}
          </h2>
        </div>

        <span className="text-label-large-size text-content-secondary">
          {timeRange}
        </span>
      </div>

      {appointments.length > 0 ? (
        <div className="px-5">
          <div>
            {appointments.map((appointment, index) => (
              <AppointmentItem
                key={index}
                appointment={appointment}
                isFirstInSection={index === 0}
              />
            ))}
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </section>
  );
};
