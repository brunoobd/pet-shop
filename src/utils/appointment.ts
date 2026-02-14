import { PeriodSectionProps } from '@/components/period-section';
import { Appointment } from '@/generated/prisma/client';
import { AppointmentPeriod, AppointmentWithDetails } from '@/types/appointment';

const getPeriod = (hour: number): AppointmentPeriod => {
  if (hour >= 9 && hour < 12) {
    return AppointmentPeriod.Morning;
  }

  if (hour >= 13 && hour < 18) {
    return AppointmentPeriod.Afternoon;
  }

  return AppointmentPeriod.Evening;
};

const getGroupAppointmentsByPeriod = (appointments: Appointment[]) => {
  const transformedAppointments: AppointmentWithDetails[] = appointments.map(
    (appointment) => ({
      ...appointment,
      time: appointment.scheduleAt.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      service: appointment.description,
      period: getPeriod(appointment.scheduleAt.getHours()),
    })
  );

  const morningAppointments = transformedAppointments.filter(
    (transformedAppointment) =>
      transformedAppointment.period === AppointmentPeriod.Morning
  );

  const afternoonAppointments = transformedAppointments.filter(
    (transformedAppointment) =>
      transformedAppointment.period === AppointmentPeriod.Afternoon
  );

  const eveningAppointments = transformedAppointments.filter(
    (transformedAppointment) =>
      transformedAppointment.period === AppointmentPeriod.Evening
  );

  return {
    morningAppointments,
    afternoonAppointments,
    eveningAppointments,
  };
};

export const getPeriodSections = (
  appointments: Appointment[]
): PeriodSectionProps[] => {
  const { morningAppointments, afternoonAppointments, eveningAppointments } =
    getGroupAppointmentsByPeriod(appointments);

  return [
    {
      title: 'Manhã',
      type: AppointmentPeriod.Morning,
      timeRange: '09h-12h',
      appointments: morningAppointments,
    },
    {
      title: 'Tarde',
      type: AppointmentPeriod.Afternoon,
      timeRange: '13h-18h',
      appointments: afternoonAppointments,
    },
    {
      title: 'Noite',
      type: AppointmentPeriod.Evening,
      timeRange: '19h-21h',
      appointments: eveningAppointments,
    },
  ];
};
