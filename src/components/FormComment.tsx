import styles from './FormComment.module.css'
import { FormEvent, ChangeEvent, InvalidEvent } from 'react'

interface FormCommentProps{
    handleCreateNewComment: (event: FormEvent)=> void
    handleNewCommentChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
    handleNewCommentInvalid: (event: InvalidEvent<HTMLTextAreaElement>) => void
    newCommentText: string
}

export function FormComment({
    handleCreateNewComment, 
    handleNewCommentChange, 
    handleNewCommentInvalid, 
    newCommentText}:FormCommentProps){
    
    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe o seu feedback</strong>
            <textarea
                name="comment"
                placeholder='Deixe um comentário'
                onChange={handleNewCommentChange}
                value={newCommentText}
                required
                onInvalid={handleNewCommentInvalid}
            />

            <footer>
                <button disabled={isNewCommentEmpty} type='submit'>
                    Publicar
                </button>
            </footer>
        </form>
    )
}