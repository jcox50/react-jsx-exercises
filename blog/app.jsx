let Header = props => {
    return (<header><h1>{props.headerContent}</h1></header>);
    
};
let Article = props => {
    return (<p>{props.articleContent}</p>);
};
let Footer = props => {
    return (<footer>{props.footerContent}</footer>)
};

let Blog = () => {
    return (
        <div className="myblog">
        <Header headerContent="Welcome to my Blog!" />
        <br />
        <Article articleContent="this is a blog about my time becomming a developer" />
        <br />
        <Footer footerContent="contact info" />
        

        </div>

    );
};


ReactDOM.render( < Blog / > , document.getElementById('root'))