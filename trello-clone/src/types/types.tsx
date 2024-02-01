export interface Comment {
  author: string;
  content: string;
}

export interface Card {
  name: string;
  author: string;
  descr: string;
  comments: Comment[];
  countComments: number;
}

export interface Cards {
  title: string;
  item: Card[];
}
