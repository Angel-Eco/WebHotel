import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '@/store/hooks';
import { format } from 'date-fns';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { fetchTickets, DeleteTicket, SearchTicket } from '@/store/apps/tickets/TicketSlice';
import { TicketType } from '../../../(DashboardLayout)/types/apps/ticket';
import { useSession } from 'next-auth/react';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import { IconDotsVertical, IconEdit, IconPlus, IconTrash } from '@tabler/icons-react';


const TicketListing = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  // Supongamos que obtienes el userId de session  
  const { data: session } = useSession();
  const userID = session?.user.id  

  useEffect(() => {
    dispatch(fetchTickets(userID));
  }, [dispatch]);

  const getVisibleTickets = (tickets: TicketType[], filter: string, ticketSearch: string) => {
    switch (filter) {
      case 'total_tickets':
        return tickets.filter(
          (c) => !c.deleted && c.roomTitle.toLocaleLowerCase().includes(ticketSearch),
        );

      case 'Pending':
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === 'Pending' &&
            c.roomTitle.toLocaleLowerCase().includes(ticketSearch),
        );

      case 'Closed':
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === 'Closed' &&
            c.roomTitle.toLocaleLowerCase().includes(ticketSearch),
        );

      case 'Open':
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === 'Open' &&
            c.roomTitle.toLocaleLowerCase().includes(ticketSearch),
        );

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };

  const tickets = useSelector((state) =>
    getVisibleTickets(
      state.ticketReducer.tickets,
      state.ticketReducer.currentFilter,
      state.ticketReducer.ticketSearch,
    ),
  );
  const ticketBadge = (ticket: TicketType) => {
    return ticket.Status === 'Disponible'
      ? theme.palette.success.light
      : ticket.Status === 'Reservada'
        ? theme.palette.error.light
        : ticket.Status === 'Pending'
          ? theme.palette.warning.light
          : ticket.Status === 'Moderate'
            ? theme.palette.primary.light
            : 'primary';
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <Box mt={4}>
      <Box sx={{ maxWidth: '260px', ml: 'auto' }} mb={3}>
        <TextField
          size="small"
          label="Search"
          fullWidth
          onChange={(e) => dispatch(SearchTicket(e.target.value))}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">N° Pieza</Typography>
              </TableCell>              
              <TableCell>
                <Typography variant="h6">Asignada a</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Estado</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Capacidad</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Fecha Inicio</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Fecha Fin</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Descripcion</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id_room} hover>
                <TableCell>{ticket.room_name}</TableCell>                
                <TableCell>
                  <Stack direction="row" gap="10px" alignItems="center">
                    <Avatar
                      src={ticket.clientImage}
                      alt={ticket.clientImage}
                      sx={{
                        borderRadius: '100%',
                        width: '35', height: '35',
                      }}
                    />
                    <Typography variant="h6">{ticket.clientName}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      backgroundColor: ticketBadge(ticket),
                    }}
                    size="small"
                    label={ticket.Status}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      backgroundColor: ticketBadge(ticket),
                    }}
                    size="small"
                    label={ticket.Capacity}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">
                  {ticket.date_init ? format(new Date(ticket.date_init), 'E, MMM d') : 'N/A'}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">
                  {ticket.date_init ? format(new Date(ticket.date_init), 'E, MMM d') : 'N/A'}
                  </Typography>
                </TableCell>
                <TableCell sx={{ maxWidth: '200px' }}>
                  <Box>
                    <Typography variant="h6" fontWeight={600} noWrap>
                      {ticket.roomTitle}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      noWrap
                      sx={{ maxWidth: '250px' }}
                      variant="subtitle2"
                      fontWeight={400}
                    >
                      {ticket.room_description}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <IconDotsVertical width={18} />
                    </IconButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <IconPlus width={18} />
                        </ListItemIcon>
                        Agregar
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <IconEdit width={18} />
                        </ListItemIcon>
                        Edit
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <IconTrash width={18} />
                        </ListItemIcon>
                        Delete
                      </MenuItem>
                    </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box my={3} display="flex" justifyContent={'center'}>
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
  );
};

export default TicketListing;
