const CheckListItem = ({ item }) => {
  console.log(item);
  return (
    <div>
      <input type="checkbox" />
      <p>{item.name}</p>
      <p>{item.item_quantity}</p>
      <p>{item.choices}</p>
    </div>
  );
};

export default CheckListItem;
