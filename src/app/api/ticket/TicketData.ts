import mock from '../mock';
import { Chance } from 'chance';
import { TicketType } from '@/app/(DashboardLayout)/types/apps/ticket';

const chance = new Chance();

const TicketData: TicketType[] = [
  {
    id_room: 1,
    room_name: "A1",
    roomTitle: 'Sed ut perspiciatis unde omnis iste',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Capacity: 1,
    Label: 'success',
    clientImage: "/images/profile/user-10.jpg",
    clientName: 'Liam',    
    date_init: chance.date(),
    date_fin: chance.date(),
    deleted: false,
  },
  {
    id_room: 2,
    room_name: "A2",
    roomTitle: 'Consequuntur magni dolores eos qui ratione',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Pending',
    Capacity: 2,
    Label: 'warning',
    clientImage: "/images/profile/user-2.jpg",
    clientName: 'Steve',    
    date_init: chance.date(),
    date_fin: chance.date(),
    deleted: false,
  },
  {
    id_room: 3,
    room_name: "A3",
    roomTitle: 'Exercitationem ullam corporis',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Open',
    Capacity: 3,
    Label: 'success',
    clientImage: "/images/profile/user-3.jpg",
    clientName: 'Jack',    
    date_init: chance.date(),
    date_fin: chance.date(),
    deleted: false,
  },
  {
    id_room: 4,
    room_name: "A4",
    roomTitle: 'Sed ut perspiciatis unde omnis iste',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Capacity: 2,
    Label: 'error',
    clientImage: "/images/profile/user-4.jpg",
    clientName: 'Steve',    
    date_init: chance.date(),
    date_fin: chance.date(),
    deleted: false,
  },
  {
    id_room: 5,
    room_name: "B1",
    roomTitle: 'Exercitationem ullam corporis',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Capacity: 2,
    Label: 'error',
    clientImage: "/images/profile/user-5.jpg",
    clientName: 'Liam',    
    date_init: chance.date(),
    date_fin: chance.date(),
    deleted: false,
  },
  {
    id_room: 6,
    room_name: "B2",
    roomTitle: 'Consequuntur magni dolores eos qui ratione',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Pending',
    Capacity: 5,
    Label: 'warning',
    clientImage: "/images/profile/user-6.jpg",
    clientName: 'Jack',    
    date_init: chance.date(),
    date_fin: chance.date(),
    deleted: false,
  },
  {
    id_room: 7,
    room_name: "B3",
    roomTitle: 'Sed ut perspiciatis unde omnis iste',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Open',
    Capacity: 6,
    Label: 'success',
    clientImage: "/images/profile/user-7.jpg",
    clientName: 'Steve',    
    date_init: chance.date(),
    date_fin: chance.date(),
    deleted: false,
  },
  {
    id_room: 8,
    room_name: "B4",
    roomTitle: 'Consequuntur magni dolores eos qui ratione',
    room_description:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Capacity: 2,
    Label: 'error',
    clientImage: "/images/profile/user-8.jpg",
    clientName: 'John',    
    date_init: chance.date(),
    date_fin: chance.date(),
    deleted: false,
  },
];

mock.onGet('/api/data/ticket/TicketData').reply(() => {  
  return [200, TicketData];
});
export default TicketData;
