import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Author.module.css'
import { Avatar } from './Avatar'
import { AuthorType } from './Post'

interface AuthorProps{
    author: AuthorType
    publishedAt: Date
}

export function Author({author, publishedAt}:AuthorProps){

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix:true
    })

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale:ptBR
    })

    return (
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>
            <time title={publishedDateFormatted} dateTime={publishedAt.toString()}>
                {publishedDateRelativeToNow}
            </time>
        </header>
    )
}