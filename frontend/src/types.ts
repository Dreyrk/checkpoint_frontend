export interface FormInputProps {
  id: string;
  label: string;
  type: string;
  style?: string;
}

export type OptionItem = {
  name: string;
  emoji: string;
  id: string;
};

export type SelectInputProps = {
  id: string;
  options: any;
};
