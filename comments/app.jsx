let ProfilePic = (props) => {
    let image = {
        backgroundImage: `url{${props.imageURL}}`
    };
    return (
        <div className="imageDiv" style={image}>
        </div>
    );
    
    //Make this component render an image 
};  

let CommentBody = (props) => {
    const {userName, commentText} = props;
    return (
        <div className="CommentBody">
            <h4>{userName}</h4>
            <p>{commentText}</p>
        </div>
        ); 
};

let Comment = props => {
    const {imgURL, userName, commentText} = props;
    return ( 
        <ProfilePic imgURL={imgURL} />

        <CommentBody userName={userName} commentText ={commentText} />
    );
    
    //<span > Make each comment render a profile picture and the comment body < /span>
}

let Comments = () => {
    return <span > Make this component render a list of comments < /span>
}

ReactDOM.render( < Comments / > , document.getElementById('root'))