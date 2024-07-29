export interface TicketType {
  id_room: number;
  room_name: string;
  roomTitle: string;
  room_description: string;
  Capacity: number;
  Status: string;
  Label: string;
  clientImage: string;
  clientName: string;   
  date_init: Date;
  date_fin: Date;
  deleted: boolean;
}
