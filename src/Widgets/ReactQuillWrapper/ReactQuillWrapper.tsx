import ReactQuill from "react-quill";
import React from "react";
import 'react-quill/dist/quill.snow.css';
import "./reactQuillWrapper.scss"

type ReactQuillWrapperTypes = {
    value: any,
    setFieldValue: (field: string, value: any) => any;
    setFieldTouched: (field: string, isTouched: boolean) => any;
    id: string;
    placeholder: string;
    field?: string;
}

export const ReactQuillWrapper: React.FC<ReactQuillWrapperTypes> = (
    {value, setFieldValue, id, placeholder, setFieldTouched, field = 'content'}
) => {
    const modules = {
        toolbar: [
            [{'header': [1, 2, 3, 4, 5, 6, false]}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link'],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link'
    ]

    return <ReactQuill theme={"snow"} className={"textarea"} modules={modules}
                       formats={formats} value={value}
                       id={id} placeholder={placeholder}
                       onChange={e => setFieldValue(field, e)}
                       onBlur={() => setFieldTouched(field, true)}
    />
}