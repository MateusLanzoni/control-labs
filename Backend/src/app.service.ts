import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Mocked data
  private events = [
    { id: 1, name: 'Clase Bases de Datos', description: 'Clase de 4to semestre', time: '10am-12pm', lab: '3er piso', date: '2023-08-17' },
    { id: 2, name: 'Clase Ingenieria Web', description: 'Clase de 4to semestre', time: '2pm-4pm', lab: '3er piso', date: '2023-08-17' },
    { id: 3, name: 'Semillero Ciber-Seguridad', description: 'Semillero de ciber-seguridad', time: '4pm-5pm', lab: '3er piso', date: '2023-08-17' },
    // Add more data as needed
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getEventsForLabAndDate(lab: string, date: string) {
    return this.events.filter(event => event.lab === lab && event.date === date);
  }
}
