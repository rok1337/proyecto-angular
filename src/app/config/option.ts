import { TodoStatus } from "../interface/todos.interfaces";
import { tradctions } from "../utils/traductions";

export const formOptions: {name: string, value: TodoStatus}[] = [
    {value: 'empty', name: tradctions['empty'] },
    {value: 'in-progress', name: tradctions['in-progress'] },
    {value: 'finished', name: tradctions['finished'] },
];