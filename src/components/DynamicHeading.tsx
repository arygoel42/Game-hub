import React from 'react';
import { Genre } from './GenreList';
import { platform } from './GameGrid';

interface Props {
  genre: Genre | null;
  category: string;
  filter: platform | null;
}

const DynamicHeading = ({ category, genre, filter }: Props) => {
  if (!category && !filter && !genre) {
    return <h1>{'Games'}</h1>;
  }

  if (!category) {
    return <h1>{`${genre?.name || ''} ${filter?.name || ''} Games`}</h1>;
  }
  if (!filter) {
    return <h1>{`${genre?.name || ''} ${category} Games`}</h1>;
  }
  if (!genre) {
    return <h1>{`${category} ${filter?.name || ''} Games`}</h1>;
  }

  return <h1>{`${genre.name} ${category} ${filter.name} Games`}</h1>;
};

export default DynamicHeading;