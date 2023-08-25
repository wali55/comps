import { useState } from 'react';
import Table from './Table';

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  
  const { config } = props;

  const handleClick = (label) => {
    console.log(label)
  }

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
        return column;
    }

    return {
        ...column,
        header: () => <th onClick={() => handleClick(column.label)}>{column.label} is sortable</th>
    }
  })

  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
