export type header = {
  name: string;
  surname: string;
  education: string;
  field: string;
  updateUserInfo: (
    name?: string,
    surname?: string,
    education?: string,
    field?: string
  ) => void;
};
