import { styled } from '@mui/material/styles';
import { DialogContent, FormControlLabel } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  '& .MuiDataGrid-row': {
    minHeight: '100px !important',
    maxHeight: '300px !important',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    }
  },
  '& .MuiDataGrid-cell': {
    padding: '16px',
    borderBottom: `1px solid ${theme.palette.divider}`,
    color: theme.palette.text.primary
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderBottom: `2px solid ${theme.palette.divider}`
  },
  '& .MuiDataGrid-footerContainer': {
    backgroundColor: theme.palette.background.default,
    borderTop: `2px solid ${theme.palette.divider}`
  },
  '& .poster-cell': {
    padding: '8px',
    '& img': {
      borderRadius: '8px',
      boxShadow: theme.palette.mode === 'dark' 
        ? '0 2px 8px rgba(255,255,255,0.1)'
        : '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.05)'
      }
    }
  },
  '& .title-cell': {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.palette.primary.main
  },
  '& .date-cell': {
    fontFamily: 'monospace',
    color: theme.palette.secondary.main
  },
  '& .rating-cell': {
    fontWeight: 600,
    color: theme.palette.text.primary
  },
  '& .description-cell': {
    fontSize: '0.9rem',
    lineHeight: 1.5,
    color: theme.palette.text.secondary
  }
}));

export const StyledModalContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  '& img': {
    borderRadius: '12px',
    boxShadow: theme.palette.mode === 'dark' 
      ? '0 4px 16px rgba(255,255,255,0.2)'
      : '0 4px 16px rgba(0,0,0,0.2)'
  },
  '& p': {
    margin: theme.spacing(1.5, 0),
    lineHeight: 1.6,
    color: theme.palette.text.primary,
    '& strong': {
      color: theme.palette.primary.main
    }
  }
}));

export const ThemeSwitch = styled(FormControlLabel)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  '& .MuiSwitch-root': {
    marginRight: theme.spacing(1)
  }
})); 