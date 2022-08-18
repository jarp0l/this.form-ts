export interface Form {
  id: string;
  name: string;
  category: string;
  status?: string;
  dateCreated?: Date;
}

export interface ColumnRecord {
  [key: string]: Column;
}

export interface Column {
  name: 'Draggable' | 'Droppable';
  items: Form[];
}

export type Status = 'Draggable' | 'Droppable';
