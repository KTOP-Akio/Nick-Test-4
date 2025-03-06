import { MovieData } from '../types/movie';

export const generateMockData = (numberOfRows: number): MovieData[] => {
  return Array.from({ length: numberOfRows }, (_, index) => ({
    id: index + 1,
    poster: `https://picsum.photos/200/300?random=${index}`,
    title: `Movie ${index + 1}`,
    releaseDate: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    rating: Math.floor(Math.random() * 5) + 5,
    description: `This is a sample ${index + 1}.`
  }));
}; 