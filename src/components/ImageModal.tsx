import React from 'react';
import {
  Dialog,
  DialogActions,
  Button,
  DialogTitle
} from '@mui/material';
import { StyledModalContent } from '../styles/DataGridStyles';

// Props for the ImageModal component
interface ImageModalProps {
  open: boolean;      // Controls if modal is visible
  onClose: () => void;  // Function to close the modal
  imageUrl: string;     // URL of the image to show
  keepMounted?: boolean;
  disableEnforceFocus?: boolean;
}

// Component that shows an image in a popup modal
const ImageModal: React.FC<ImageModalProps> = ({
  open,
  onClose,
  imageUrl,
  keepMounted,
  disableEnforceFocus
}) => {
  return (
    // Modal dialog that contains the image
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md"
      keepMounted={keepMounted}
      disableEnforceFocus={disableEnforceFocus}
      aria-labelledby="image-preview-title"
      disablePortal
    >
      <DialogTitle id="image-preview-title" sx={{ display: 'none' }}>
        Image Preview
      </DialogTitle>
      {/* Content section with the image */}
      <StyledModalContent>
        <img src={imageUrl} alt="movie poster large" style={{ width: '100%' }} />
      </StyledModalContent>
      {/* Bottom section with close button */}
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageModal; 