import './styles.css';

export const Post = ({ body, cover, title, id}) => (
    <div className="post-container">
        <img src={cover} alt="title" />
        <div className="post-content">
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
) 
