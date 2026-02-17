import { AppointmentFormDialog } from '@/components/appointment-form-dialog';
import { PeriodSection } from '@/components/period-section';
import { Button } from '@/components/ui/button';
import { Appointment } from '@/generated/prisma/client';
import { prisma } from '@/lib/prisma';
import { getPeriodSections } from '@/utils/appointment';

const appointments: Appointment[] = [
  {
    id: '1',
    petName: 'Buddy',
    description: 'Corte de cabelo',
    tutorName: 'John Doe',
    phone: '1234567890',
    scheduleAt: new Date('2026-01-01'),
  },
  {
    id: '2',
    petName: 'Buddy',
    description: 'Corte de cabelo',
    tutorName: 'Jane Doe',
    phone: '1234567890',
    scheduleAt: new Date('2026-01-02T10:00:00'),
  },
  {
    id: '3',
    petName: 'Buddy',
    description: 'Corte de cabelo',
    tutorName: 'Jane Doe',
    phone: '1234567890',
    scheduleAt: new Date('2026-01-03T11:00:00'),
  },
  {
    id: '4',
    petName: 'Buddy',
    description: 'Corte de cabelo',
    tutorName: 'Jane Doe',
    phone: '1234567890',
    scheduleAt: new Date('2026-01-04T12:00:00'),
  },
  {
    id: '5',
    petName: 'Buddy',
    description: 'Corte de cabelo',
    tutorName: 'Jane Doe',
    phone: '1234567890',
    scheduleAt: new Date('2026-01-05T13:00:00'),
  },
  {
    id: '6',
    petName: 'Buddy',
    description: 'Corte de cabelo',
    tutorName: 'Jane Doe',
    phone: '1234567890',
    scheduleAt: new Date('2026-01-06T14:00:00'),
  },
];

const Home = async () => {
  const appointments = await prisma.appointment.findMany();
  const periodSections = getPeriodSections(appointments);

  return (
    <div className="bg-background-primary p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-title-modal text-content-primary mb-2">
            Sua Agenda
          </h1>

          <p className="text-paragraph-medium text-content-secondary">
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </p>
        </div>
      </div>

      <div className="pb-24 md:pb-0">
        {periodSections.length > 0 &&
          periodSections.map(({ title, type, timeRange, appointments }) => (
            <PeriodSection
              key={title}
              title={title}
              type={type}
              timeRange={timeRange}
              appointments={appointments}
            />
          ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-[#23242C] py-[18px] px-6 md:bottom-6 md:right-6 md:left-auto md:top-auto md:w-auto md:bg-transparent md:p-0">
        <AppointmentFormDialog>
          <Button variant="brand">Novo Agendamento</Button>
        </AppointmentFormDialog>
      </div>
    </div>
  );
};

export default Home;
