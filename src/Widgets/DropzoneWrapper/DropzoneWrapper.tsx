import "./dropzoneWrapper.scss";
import {useDropzone} from "react-dropzone";
import React from "react";
import {ErrorField} from "../ErrorField/ErrorField";
import {FileCard} from "./Component/FileCard";
import {H5} from "../Headings/H5/H5";

type CommonDropzoneTypes = {
    setFieldValue: (field: string, value: any) => any;
    setFieldTouched: (field: string, value: boolean) => any;
    errorMessage: string | undefined;
    isTouched: boolean | undefined;
    isMultiple?: boolean;
    maxFiles?: number;
    isEdit?: boolean;
    originalImage?: {
        id: number;
        url: string;
    };
    id:string;
}

type FileDropzoneTypes = CommonDropzoneTypes & {
    file: File | null;
    files?: never;
}

type FilesDropzoneTypes = CommonDropzoneTypes & {
    files: Array<File> | [];
    file?: never;
}

type DropzoneWrapperTypes = FileDropzoneTypes | FilesDropzoneTypes

export const DropzoneWrapper: React.FC<DropzoneWrapperTypes> = (
    {
        isMultiple = false, maxFiles = 1, setFieldValue, errorMessage,
        isTouched, setFieldTouched, file, files,
        isEdit = false, originalImage, id
    }
) => {
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: {
            "image/jpeg": ['.jpeg', '.jpg'],
            "image/png": ['.png'],
        },
        maxFiles,
        multiple: isMultiple,
        onDrop: acceptedFiles => {
            if (isMultiple) {
                if (files) {
                    setFieldValue("images", [...files, ...acceptedFiles] as Array<File>);
                } else {
                    setFieldValue("images", acceptedFiles);
                }
                setFieldTouched("images", true);
            } else {
                setFieldValue("image", acceptedFiles[0]);
                setFieldTouched("image", true);
            }
        },
    });

    const remove = (e: React.MouseEvent, file: any) => {
        e.stopPropagation();
        if (isMultiple) {
            if (files) {
                const updatedFiles = files.filter(f => f !== file);
                setFieldValue("images", updatedFiles);
            }
        } else {
            setFieldValue("image", null);
        }
    }

    return (
        <div className={"dropzone_wrapper"}>
            <div {...getRootProps({className: "dropzone"})}>
                <input {...getInputProps()} id={id}/>
                {
                    isMultiple ?
                        (files && files.length > 0) ? <ul className={"files_list"}>
                                {files.map((file, index) => <FileCard key={index} file={file} remove={remove}/>)}
                            </ul> :
                            isDragActive ?
                                <p>drop the image here ...</p> :
                                <p>{isEdit ? 'if you want to change the image, drop or click to select the image' : 'drop or click to select the image'}</p>
                        :
                        file ?
                            <ul className={"files_list"}><FileCard file={file} remove={remove}/>
                            </ul> : isDragActive ?
                                <p>drop the image here ...</p> :
                                <p>{isEdit ? 'if you want to change the image, drop or click to select the image' : 'drop or click to select the image'}</p>
                }
            </div>
            {
                (errorMessage && isTouched) &&
                <div className="dropzone_error">
                    <ErrorField message={errorMessage}/>
                </div>
            }
            {
                isEdit && originalImage && <div className="original_image_field">
                    <H5>Original Image</H5>
                    <img src={originalImage.url} alt="" className={"original_image"}/>
                </div>
            }
            <div className={"dropzone_help"}>
                <p className="dropzone_help_main">
                    {((files && files.length > 0) || file) ?
                        "You can delete this image and upload another image" :
                        "Upload only one image which will be the main one"
                    }
                </p>
                <p className="dropzone_help_types">(Only *.jpeg, *.jpg and *.png images will be accepted)</p>
            </div>
        </div>
    )
}