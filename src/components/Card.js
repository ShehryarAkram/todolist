import './Card.css';

function Card(props){
    const classes = 'card '+props.mainClass;
    return <div className={classes}>{props.children}</div>
}

export default Card;