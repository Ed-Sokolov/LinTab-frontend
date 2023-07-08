import ReactQuill from "react-quill";
import React from "react";
import 'react-quill/dist/quill.snow.css';
import "./reactQuillWrapper.scss"

type ReactQuillWrapperTypes = {
    value: any,
    change: (e: any) => any;
    id: string;
    placeholder: string;
}

export const ReactQuillWrapper: React.FC<ReactQuillWrapperTypes> = ({value, change, id, placeholder}) => {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    return <ReactQuill theme={"snow"}
        className={"textarea"}
        modules={modules} formats={formats}
        value={value} onChange={change}
        id={id}
        placeholder={placeholder}
    />
}