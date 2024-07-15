import mock from '../mock';
import { Chance } from 'chance';
import { TicketType } from '@/app/(DashboardLayout)/types/apps/ticket';

const chance = new Chance();

const TicketData: TicketType[] = [
  {
    id_pieza: 1,
    nombre_pieza: "A1",
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Capacity: 1,
    Label: 'error',
    thumb: "/images/profile/user-10.jpg",
    AgentName: 'Liam',
    cliente_id: null,
    date_init: chance.date(),
    deleted: false,
  },
  {
    id_pieza: 2,
    nombre_pieza: "A2",
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Pending',
    Capacity: 2,
    Label: 'warning',
    thumb: "/images/profile/user-2.jpg",
    AgentName: 'Steve',
    cliente_id: null,
    date_init: chance.date(),
    deleted: false,
  },
  {
    id_pieza: 3,
    nombre_pieza: "A3",
    ticketTitle: 'Exercitationem ullam corporis',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Open',
    Capacity: 3,
    Label: 'success',
    thumb: "/images/profile/user-3.jpg",
    AgentName: 'Jack',
    cliente_id: null,
    date_init: chance.date(),
    deleted: false,
  },
  {
    id_pieza: 4,
    nombre_pieza: "A4",
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Capacity: 2,
    Label: 'error',
    thumb: "/images/profile/user-4.jpg",
    AgentName: 'Steve',
    cliente_id: null,
    date_init: chance.date(),
    deleted: false,
  },
  {
    id_pieza: 5,
    nombre_pieza: "B1",
    ticketTitle: 'Exercitationem ullam corporis',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Capacity: 2,
    Label: 'error',
    thumb: "/images/profile/user-5.jpg",
    AgentName: 'Liam',
    cliente_id: null,
    date_init: chance.date(),
    deleted: false,
  },
  {
    id_pieza: 6,
    nombre_pieza: "B2",
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Pending',
    Capacity: 5,
    Label: 'warning',
    thumb: "/images/profile/user-6.jpg",
    AgentName: 'Jack',
    cliente_id: null,
    date_init: chance.date(),
    deleted: false,
  },
  {
    id_pieza: 7,
    nombre_pieza: "B3",
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Open',
    Capacity: 6,
    Label: 'success',
    thumb: "/images/profile/user-7.jpg",
    AgentName: 'Steve',
    cliente_id: null,
    date_init: chance.date(),
    deleted: false,
  },
  {
    id_pieza: 8,
    nombre_pieza: "B4",
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Capacity: 2,
    Label: 'error',
    thumb: "/images/profile/user-8.jpg",
    AgentName: 'John',
    cliente_id: null,
    date_init: chance.date(),
    deleted: false,
  },
];

mock.onGet('/api/data/ticket/TicketData').reply(() => {  
  return [200, TicketData];
});
export default TicketData;
