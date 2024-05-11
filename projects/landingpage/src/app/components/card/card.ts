export interface ICardComponent {
  name: string;
  image?: string;
  description?: string;
  url?: string;
  onClick?: () => void;
}
