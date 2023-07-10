export type PostType = {
    id: number;
    title: string;
    content: string;
    author_id: number;
    image: {
        id: number;
        url: string;
    };
    created_at: Date;
    updated_at: Date
}