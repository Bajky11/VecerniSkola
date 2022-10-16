const Error = ({ err, msg }) => {
    return (
        <div className="error">
            <h2>{err}</h2>
            <h3>{msg}</h3>
        </div>
    );
}

export default Error;