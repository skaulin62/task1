export interface Comment {
  author: string;
  content: string;
}

export interface Card {
  name: string;
  author: string;
  descr: string;
  comments: Comment[];
}

export interface Cards {
  title: string;
  item: Card[];
}
