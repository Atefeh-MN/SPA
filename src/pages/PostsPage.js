


const PostPage = (props) => {
    const id = props.match.params.id || 1;
    return (<>
        <h2>Post detail - {id}</h2>
        <p>{JSON.stringify(props.match.params)}</p>
    </>);
}

export default PostPage;