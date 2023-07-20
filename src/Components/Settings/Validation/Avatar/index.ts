import {mixed, number, object} from "yup";

const supportedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
const maxFileSize = 5 * 1024 * 1024; // 5MB
const minImageWidth = 500;
const minImageHeight = 500;

const imageSchema = object({
    width: number().min(minImageWidth).required(),
    height: number().min(minImageHeight).required(),
});

export const AvatarSchema = object({
    avatar: mixed()
        .nullable()
        .test('fileFormat', 'The extension must be jpeg, jpg or png', (value) => {
            if (!value) return true;
            return supportedFormats.includes((value as File).type);
        })
        .test('fileSize', 'The size must be less than 5MB', (value) => {
            if (!value) return true;
            return value ? (value as File).size <= maxFileSize : true;
        })
        .test('imageSize', 'Minimum size of a photo must be 500x500', function (value) {
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