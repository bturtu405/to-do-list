type Task = {
id: string;
content: string;
isCompleted:boolean;
};

type OnSubmitTextBox = (content:string) => void;

type OnCheck = (id:string) => void;

type OnEdit = (text:string,id:string) => void;

type OnClick = (value:string) => void;

type OnClickClearButton = () => void;