const getNewItemPositionValue = (movingItemId, newPositionIndex, copiedItems) => {
  const positions = copiedItems.map(({ pos }) => pos);

  const previousElement = copiedItems[newPositionIndex - 1];
  if (!previousElement) {
    return Math.min(...positions) - 1;
  }

  const nextElement = copiedItems[newPositionIndex + 1];
  if (!nextElement) {
    return Math.max(...positions) + 1;
  }

  return (previousElement.pos + nextElement.pos) / 2;
};

// TODO: refactor
export const onDragEnd = (result, columns, setColumns, setColumnId, setItemId, setItemPosition) => {
  if (!result.destination) return;

  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    destItems.splice(destination.index, 0, removed);

    const movingItemId = sourceColumn.items[source.index].id;
    const newPositionIndex = destItems.findIndex(({ id }) => id === movingItemId);
    const newItemPositionValue = getNewItemPositionValue(movingItemId, newPositionIndex, destItems);

    setColumnId(destination.droppableId);
    setItemId(movingItemId);
    setItemPosition(newItemPositionValue);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);

    copiedItems.splice(destination.index, 0, removed);

    const movingItemId = column.items[source.index].id;
    const newPositionIndex = copiedItems.findIndex(({ id }) => id === movingItemId);
    const newItemPositionValue = getNewItemPositionValue(movingItemId, newPositionIndex, copiedItems);

    setColumnId(source.droppableId);
    setItemId(movingItemId);
    setItemPosition(newItemPositionValue);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};
