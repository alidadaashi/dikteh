export type header = {
  name: string;
  surname: string;
  education: string;
  field: string;
  updateInfo?: (
    name: string,
    surname: string,
    education: string,
    field: string
  ) => void;
};
