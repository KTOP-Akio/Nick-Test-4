export interface MovieData {
  id: number;
  poster: string;
  title: string;
  releaseDate: string;
  rating: number;
  description: string;
}

export interface MuiDataGridProps {
  numberOfRows: number;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
} 