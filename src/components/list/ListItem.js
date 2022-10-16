import '../../App.css';

const ListItem = (props) => {
    return (
        <div className='list-item' style={{
            "backgroundColor": props.item.color,
        }}>
            <p>{props.item.name}</p>
        </div>
    );
}

export default ListItem;