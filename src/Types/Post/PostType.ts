export type PostType = {
    id: number | null,
    title: string | '',
    content: string | '',
    author_id: number | null,
    created_at: Date,
    updated_at: Date
}