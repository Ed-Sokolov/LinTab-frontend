export type UserType = {
    id: number | null;
    email: string;
    nickname: string;
    name: string;
    about: string;
    avatar: {
        id: number;
        url: string;
    };
    isDeleted: boolean;
}