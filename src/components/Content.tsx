import styles from './Content.module.css'
import { ContentType } from './Post'

interface ContentProps{
    content: ContentType[]
}

export function Content({content}:ContentProps){
    return (
        <div className={styles.content}>
            {content.map(line => {
                if(line.type === 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else if(line.type === 'link'){
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
            })}
        </div>
    )
}