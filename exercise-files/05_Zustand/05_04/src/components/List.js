const List = ({ allItems, check, styles }) => {
  return (
    <ul className="px-5">
      {allItems.map((item) => (
        <li
          style={item.done ? styles.item_done : {}}
          onClick={() => check(item.id)}
        >
          {item.task}
        </li>
      ))}
    </ul>
  );
};

export default List;
