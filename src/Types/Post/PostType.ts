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

export type PostCardType = {
    id: number;
    title: number;
    author_id: number;
    preview: {
        id: number;
        prev_url: string;
    };
    created_at: Date;
    updated_at: Date
}