import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { useState } from 'react'

interface CommentProps{
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comment ({content, onDeleteComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(0)

    function hadleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/matheus1714.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Mota</strong>
                            <time title="8 de Agosto às 15:25" dateTime='2023-08-12 15:25:10'>
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button 
                            title="Deletar comentário"
                            onClick={hadleDeleteComment}
                        >
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}