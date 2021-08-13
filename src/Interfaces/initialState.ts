/**
 * Implementation of initialState interfaces
 */

export interface IJokes {
  isLoading: boolean;
  jokesData: Array<IJokeData>;
  currentPage: number;
  totalPages: number;
  errorMessage: string;
}

interface IJokeData {
  id: string;
  joke: string;
}

export interface IActionType {
  type: string;
  response: any;
  requestInfo: string;
}
