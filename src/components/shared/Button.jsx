const Button = (props) => {
    return (
        <button onClick={() => props.deleteEmployee(props.id)} className="btn-delete">delete</button>
    );
}
export default Button;