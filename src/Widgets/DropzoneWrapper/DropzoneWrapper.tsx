import "./dropzoneWrapper.scss";
import {useDropzone} from "react-dropzone";
import React, {useState} from "react";
import {UseSvg} from "../UseSvg/UseSvg";

type DropzoneWrapperTypes = {
    isMultiple?: boolean;
    maxFiles?: number;
}

export const DropzoneWrapper: React.FC<DropzoneWrapperTypes> = ({isMultiple = false, maxFiles = 1}) => {
    const [files, setFiles] = useState<Array<File>>([]);

    const {getRootProps, getInputProps, isDragActive, fileRejections} = useDropzone({
        accept: {
            "image/jpeg": ['.jpeg', '.jpg'],
            "image/png": ['.png'],
        },
        maxFiles,
        multiple: isMultiple,
        onDrop: acceptedFiles => {
            if (isMultiple) {
                setFiles([...files, ...acceptedFiles] as Array<File>);
            } else {
                setFiles(acceptedFiles);
            }
        },
    });

    const remove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, file: any) => {
        e.stopPropagation();
        const updatedFiles = files?.filter(f => f !== file);
        setFiles(updatedFiles);
    }

    const formatSize = (size: number) => {
        if (size < 1024) {
            return size + " B";
        } else if (size < 1024 * 1024) {
            return (size / 1024).toFixed(2) + " KB";
        } else {
            return (size / (1024 * 1024)).toFixed(2) + " MB";
        }
    };

    return (
        <div>
            <div {...getRootProps({className: "dropzone"})}>
                <input {...getInputProps()} />
                {
                    files.length > 0 ? <ul className={"files_list"}>
                            {files.map((file, index) => (
                                <li key={index} className={"file_item"}>
                                    <img src={URL.createObjectURL(file)} alt={file.name} className={"file_preview"}/>
                                    <p className="file_name">{file.name}</p>
                                    <p className="file_size">{formatSize(file.size)}</p>
                                    <div className="remove_file" onClick={e => remove(e, file)}>
                                        <UseSvg spriteName={"trash"} className={"remove_file_icon"}/>
                                    </div>
                                </li>
                            ))}
                        </ul> :
                        isDragActive ?
                            <p>drop the photo here ...</p> :
                            <p>drop or click to select the photo</p>
                }
            </div>
            {
                fileRejections.length > 0 && <div>Error</div>
            }
        </div>
    )
}