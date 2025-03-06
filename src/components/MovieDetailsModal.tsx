import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Grid
} from '@mui/material';
import { StyledModalContent } from '../styles/DataGridStyles';
import { MovieData } from '../types/movie';

// Props for the movie details modal
interface MovieDetailsModalProps {
  open: boolean;                 // Controls if modal is visible
  onClose: () => void;          // Function to close the modal
  selectedRow: MovieData | null; // Selected movie data to display
  keepMounted?: boolean;
  disableEnforceFocus?: boolean;
}

// Component that shows detailed information about a selected movie
const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({
  open,
  onClose,
  selectedRow,
  keepMounted,
  disableEnforceFocus
}) => {
  return (
    // Main modal container
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      keepMounted={keepMounted}
      disableEnforceFocus={disableEnforceFocus}
      aria-labelledby="movie-details-title"
      disablePortal
    >
      {/* Movie title header */}
      <DialogTitle 
        id="movie-details-title" 
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        {selectedRow?.title}
      </DialogTitle>

      {/* Modal content section */}
      <StyledModalContent>
        {selectedRow && (
          <Grid container spacing={3}>
            {/* Movie poster - takes 1/3 of width on desktop */}
            <Grid item xs={12} md={4}>
              <img src={selectedRow.poster} alt="movie poster" style={{ width: '100%' }} />
            </Grid>

            {/* Movie details - takes 2/3 of width on desktop */}
            <Grid item xs={12} md={8}>
              {Object.entries(selectedRow).map(([key, value]) => (
                <p key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                  {key === 'releaseDate' ? new Date(value as string).toLocaleDateString() : String(value)}
                </p>
              ))}
            </Grid>
          </Grid>
        )}
      </StyledModalContent>

      {/* Footer with close button */}
      <DialogActions sx={{ borderTop: 1, borderColor: 'divider' }}>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieDetailsModal; 