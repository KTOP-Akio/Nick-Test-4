import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Switch, FormControlLabel } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledDataGrid, ThemeSwitch } from '../styles/DataGridStyles';
import { MuiDataGridProps, MovieData } from '../types/movie';
import { generateMockData } from '../utils/mockData';
import MovieDetailsModal from './MovieDetailsModal';
import ImageModal from './ImageModal';

const MuiDataGrid: React.FC<MuiDataGridProps> = ({ 
  numberOfRows, 
  darkMode, 
  setDarkMode 
}) => {
  const theme = useTheme();
  const [rows, setRows] = React.useState<MovieData[]>([]);
  const [selectedRow, setSelectedRow] = React.useState<MovieData | null>(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [openImageModal, setOpenImageModal] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');

  React.useEffect(() => {
    setRows(generateMockData(numberOfRows));
  }, [numberOfRows]);
  
  const columns: GridColDef[] = [
    {
      field: 'poster',
      headerName: 'Poster',
      width: 150,
      cellClassName: 'poster-cell',
      renderCell: (params: GridRenderCellParams) => (
        <img
          src={params.value}
          alt="movie poster"
          style={{ width: '100%', cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImage(params.value);
            setOpenImageModal(true);
          }}
        />
      ),
      sortable: false
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      cellClassName: 'title-cell',
      filterable: true,
      renderCell: (params) => params.value
    },
    {
      field: 'releaseDate',
      headerName: 'Release Date',
      width: 150,
      cellClassName: 'date-cell',
      filterable: true,
      renderCell: (params) => new Date(params.value).toLocaleDateString()
    },
    {
      field: 'rating',
      headerName: 'Rating',
      width: 120,
      cellClassName: 'rating-cell',
      type: 'number',
      renderCell: (params) => (
        <span style={{ 
          color: params.value >= 7 
            ? theme.palette.success.main 
            : theme.palette.warning.main 
        }}>
          {params.value}
        </span>
      )
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 300,
      cellClassName: 'description-cell',
      renderCell: (params) => params.value
    }
  ];

  const handleRowClick = (params: any) => {
    setSelectedRow(params.row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRow(null);
  };

  return (
    <div style={{ padding: '24px' }}>
      <ThemeSwitch
        control={
          <Switch
            checked={darkMode}
            onChange={(e) => {
              setDarkMode(e.target.checked);
              localStorage.setItem('darkMode', String(e.target.checked));
            }}
          />
        }
        label="Dark Mode"
      />

      <StyledDataGrid
        rows={rows}
        columns={columns}
        autoHeight
        rowHeight={150}
        disableSelectionOnClick
        onRowClick={handleRowClick}
        initialState={{
          sorting: JSON.parse(localStorage.getItem('tableSorting') || '{}'),
          filter: JSON.parse(localStorage.getItem('tableFilter') || '{}')
        }}
        onSortModelChange={(model) => {
          localStorage.setItem('tableSorting', JSON.stringify(model));
        }}
        onFilterModelChange={(model) => {
          localStorage.setItem('tableFilter', JSON.stringify(model));
        }}
      />

      <MovieDetailsModal
        open={openModal}
        onClose={handleCloseModal}
        selectedRow={selectedRow}
      />

      <ImageModal
        open={openImageModal}
        onClose={() => setOpenImageModal(false)}
        imageUrl={selectedImage}
      />
    </div>
  );
};

export default MuiDataGrid; 