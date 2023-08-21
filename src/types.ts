export type Expirience = {
  name: string;
  slug: string;
  image: string;
  description: string;
};

export type Destination = {
  name: string;
  slug: string;
  image: string;
  id: number;
  description: string;
  experiences: Expirience[];
};
