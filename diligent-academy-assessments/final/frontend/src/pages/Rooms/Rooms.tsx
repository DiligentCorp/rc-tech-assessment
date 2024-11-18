import { Box, Stack } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

import { getRooms } from '@/api/rooms.service';
import { PaginatedResponse, Room } from '@/types';

export function Rooms() {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });
  // const [searchValue, setSearchValue] = React.useState('')

  const roomsQuery = useQuery<PaginatedResponse<Room>>({
    queryKey: ['rooms', paginationModel.page],
    queryFn: () => getRooms(paginationModel.page + 1),
    placeholderData: keepPreviousData
  })

  const columns: GridColDef[] = React.useMemo(() => ([
    {
      field: 'name',
      flex: 2,
      headerName: 'Name',
      renderCell: (params) => {
        return <Link to={`/rooms/${params.id}`}>{params.value}</Link>
      }
    },
    {
      field: 'createdAt',
      flex: 1,
      headerName: 'Created at',
    },
    {
      field: 'ownerName',
      flex: 2,
      headerName: 'Owner',
      valueGetter: (_, row) => {
        const ownerName = row.user ? [row.user?.first_name, row.user?.last_name].join(' ') : 'n/a'
        return `${ownerName}`
      }
    }
  ]), [])

  const rows: GridRowsProp = React.useMemo(() => (
    roomsQuery.data?.data || []
  ), [roomsQuery.data])


  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={2} sx={{ justifyContent: 'space-between'}}>
        <Link to='#'>Create a new Room</Link>
      </Stack>
      <Box sx={{ maxHeight: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        rowCount={roomsQuery.data?.total || 0}
        loading={roomsQuery.isLoading}
        pageSizeOptions={[5]}
        disableColumnFilter={true}
        disableColumnMenu={true}
        paginationModel={paginationModel}
        paginationMode="server"
        onPaginationModelChange={setPaginationModel}
      />
      </Box>
    </Stack>
  )
}
