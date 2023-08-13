import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import styles from './Post.module.css'
import { Author } from './Author'
import { Content } from './Content'
import { FormComment } from './FormComment'
import { CommentList } from './CommentList'

export interface AuthorType{
    name: string
    role: string
    avatarUrl: string
}

export interface ContentType{
    type: 'paragraph' | 'link'
    content: string
}

export interface PostType{
    id: number
    author: AuthorType
    publishedAt: Date
    content: ContentType[]
}

interface PostProps{
    post: PostType
}

export function Post({ post }: PostProps){
    const [ comments, setComments ] = useState<string[]>([])
    const [ newCommentText, setNewCommentText ] = useState<string>('')

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeleteOne)
    }
    
    return (
        <article className={styles.post}>
            <Author 
                author={post.author}
                publishedAt={post.publishedAt}
            />
            <Content
                content={post.content}
            />

            <FormComment 
                handleCreateNewComment = {handleCreateNewComment}
                handleNewCommentChange = {handleNewCommentChange}
                handleNewCommentInvalid = {handleNewCommentInvalid}
                newCommentText = {newCommentText}
            />

            <CommentList
                comments = {comments}
                deleteComment={deleteComment}
            />
        </article>
    )
}