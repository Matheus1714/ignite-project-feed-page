import styles from './Comment.module.css'
import { Comment } from './Comment'

interface CommentListProps{
    comments: string[]
    deleteComment: (commentToDelete: string) => void
}

export function CommentList({comments, deleteComment}:CommentListProps){
    return (
        <div className={styles.commentList}>
            {comments.map(comment => {
                return (
                    <Comment 
                        onDeleteComment={deleteComment} 
                        key={comment} 
                        content={comment} 
                    />
                )
            })}
        </div>
    )
}