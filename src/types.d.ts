type Task = {
id: string;
content: string;
isCompleted:boolean;
};

type addTask = (taskContent:string) => void;

type TextBox = {
addTask:addTask;
};

type CheckCheckBox = (id:string) => void;

type onEdit = (text:string,id:string) => void;

type onClick = (value:string) => void;