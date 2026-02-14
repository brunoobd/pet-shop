import { Appointment } from '@/generated/prisma/client';

export enum AppointmentPeriod {
  Morning = 'morning',
  Afternoon = 'afternoon',
  Evening = 'evening',
}

export type AppointmentWithDetails = Appointment & {
  time: string;
  service: string;
  period: AppointmentPeriod;
};
