export interface ItemOptions {
  link?: string;
  photo?: string;
  title?: string;
  description?: string;
  responsive: ResponsiveOptions;
  color?: 'dark' | 'light' | 'red' | 'purple' | 'blue';
  size: 'cube' | 'line' | 'icon' | 'poster' | 'square';
}

export interface AvatarOptions {
  title: string;
  photo?: string;
  description?: string;
  responsive: ResponsiveOptions;
}

export interface ResponsiveOptions {
  row: number;
  column: number;
}

export interface ProfileOptions {
  items: ItemOptions[];
  avatar: AvatarOptions;
  theme: 'dark' | 'light';
  color: 'red' | 'purple' | 'blue';
}
