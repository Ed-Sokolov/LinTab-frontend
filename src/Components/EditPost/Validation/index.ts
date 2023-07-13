import {mixed, number, object, string} from "yup";

const supportedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
const maxFileSize = 5 * 1024 * 1024; // 5MB
const minImageWidth = 1280;
const minImageHeight = 720;

const imageSchema = object({
    width: number().min(minImageWidth).required(),
    height: number().min(minImageHeight).required(),
});

export const EditPostSchema = object({
    title: string()
        .required("The title is required")
        .min(4, "The title must be more than 4 characters")
        .max(255, "The title must be less than 255 characters"),
    content: string()
        .required("The content is required")
        .min(100, "The content must be more than 100 characters")
        .max(60000, "The content must be less than 60000 characters"),
    image: mixed()
        .nullable()
        .test('fileFormat', 'The extension must be jpeg, jpg or png', (value) => {
            if (!value) return true;
            return supportedFormats.includes((value as File).type);
        })
        .test('fileSize', 'The size must be less than 5MB', (value) => {
            if (!value) return true;
            return value ? (value as File).size <= maxFileSize : true;
        })
        .test('imageSize', 'Minimum size of a photo must be 1280x720', function (value) {
            if (!value) return true;
            return new Promise((resolve) => {
                const img = new Image();
                img.src = URL.createObjectURL(value as File);
                img.onload = function () {
                    const width = img.naturalWidth;
                    const height = img.naturalHeight;
                    imageSchema
                        .validate({ width, height })
                        .then(() => {
                            resolve(true);
                        })
                        .catch(() => {
                            resolve(false);
                        });
                };
            });
        }),
})