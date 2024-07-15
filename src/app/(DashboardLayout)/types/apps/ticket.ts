export interface TicketType {
  id_pieza: number;
  nombre_pieza: string;
  ticketTitle: string; //borrar?
  room_description: string;
  Capacity: number;
  Status: string;
  Label: string;
  thumb: string;
  AgentName: string; //borrar?
  cliente_id: number|null;  
  date_init: Date;
  deleted: boolean;
}
