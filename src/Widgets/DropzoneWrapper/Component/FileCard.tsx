import {UseSvg} from "../../UseSvg/UseSvg";
import React from "react";
import "./fileCard.scss";

type FileCardTypes = {
    file: File;
    remove: (e: React.MouseEvent, file: File) => any;
}

export const FileCard: React.FC<FileCardTypes> = ({file, remove}) => {
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
        <li className={"file_item"}>
            <img src={URL.createObjectURL(file)} alt={file.name} className={"file_preview"}/>
            <div className="file_data">
                <p className="file_name">{file.name}</p>
                <p className="file_size">{formatSize(file.size)}</p>
            </div>
            <div className="remove_file" onClick={e => remove(e, file)}>
                <UseSvg spriteName={"trash"} className={"remove_file_icon"}/>
            </div>
        </li>
    )
}