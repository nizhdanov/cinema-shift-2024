import { AgeRatings } from './age-ratings';
import { Country } from './country';
import { FilmPerson } from './film-person';
import { UserRatings } from './user-ratings';

export interface Film {
  id: string;
  name: string;
  originalName: string;
  description: string;
  releaseDate: string;
  actors: FilmPerson[];
  directors: FilmPerson[];
  runtime: number;
  ageRating: AgeRatings;
  genres: string[];
  userRatings: UserRatings;
  img: string;
  country: Country;
}
