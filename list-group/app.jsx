let ListGroupItem = props => {
    return <li className="list-group-item">{props.content}</li>;
};

let ListGroup = () => {
    return (
    <ul className ="list-group">
        <ListGroupItem content="test" />
        <ListGroupItem content="testing"/>
        <ListGroupItem content="test 3"/>
        <ListGroupItem content="final test"/>

    </ul>);
};


ReactDOM.render( < ListGroup / > , document.getElementById('root'))