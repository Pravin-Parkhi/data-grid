'use client';

import { useState } from 'react';
import { CustomCheckbox } from '../CustomCheckbox';
import { StatusIndicator } from '../StatusIndicator';
import { File } from '@/app/models/file';
import { Download } from 'lucide-react';

interface Props {
    data: File[]
}

/**
 * DataGrid Component
 * 
 * This component renders a data grid with selectable items and a download button. 
 * It takes an array of data items and provides functionalities to select individual 
 * or all items, and download the selected items if they are available.
 * 
 * Props:
 * - data: An array of File objects to be displayed in the data grid.
 * 
 * State:
 * - selectedItems: A set of selected item names.
 * 
 * Features:
 * - Select/Deselect all items with a master checkbox.
 * - Select/Deselect individual items.
 * - Display the count of selected items.
 * - Enable/Disable download button based on selection and item availability.
 * - Download selected items as JSON.
 * 
 * @param {Props} props - The props for the DataGrid component.
 * @returns {JSX.Element} The rendered DataGrid component.
 */
const DataGrid: React.FC<Props> = ({ data }) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const allSelected = data.length > 0 && selectedItems.size === data.length;

  const someSelected = selectedItems.size > 0 && selectedItems.size < data.length;

  const canDownload = Array.from(selectedItems).every(name => 
    data.find(item => item.name === name)?.status === 'available'
  );

  /**
   * Toggles the selection of all items.
   * If all items are selected, it clears the selection.
   * Otherwise, it selects all items.
   */
  const toggleAll = () => {
    if (allSelected) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(data.map(item => item.name)));
    }
  };

  /**
   * Toggles the selection of a single item by its name.
   * Adds the item to the selection if it's not already selected.
   * Removes the item from the selection if it is already selected.
   * 
   * @param {string} name - The name of the item to toggle.
   */
  const toggleItem = (name: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(name)) {
      newSelected.delete(name);
    } else {
      newSelected.add(name);
    }
    setSelectedItems(newSelected);
  };

  /**
   * Handles the download action for selected items.
   * Filters the selected items from the data and displays them in an alert as JSON.
   */
  const handleDownload = () => {
    const selectedData = data.filter(item => selectedItems.has(item.name));
    alert(JSON.stringify(selectedData, null, 2));
  };

  return (
    <div className="container">
      <div className="datagrid">
        <div className="datagrid-header">
          <h1 className="datagrid-title">Datagrid</h1>
        </div>
        
        <div className="datagrid-toolbar">
          <CustomCheckbox
            checked={allSelected}
            indeterminate={someSelected}
            onChange={toggleAll}
            label={selectedItems.size === 0 
              ? 'None Selected' 
              : `${selectedItems.size} Selected`}
          />
          <button
            onClick={handleDownload}
            disabled={!canDownload || selectedItems.size === 0}
            className="download-button"
          >
            <Download style={{ width: 16, height: 16 }} />
            Download Selected
          </button>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: 48 }}></th>
                <th>Name</th>
                <th>Device</th>
                <th>Path</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.name}>
                  <td>
                    <CustomCheckbox
                      checked={selectedItems.has(item.name)}
                      onChange={() => toggleItem(item.name)}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.device}</td>
                  <td className="monospace">{item.path}</td>
                  <td>
                    <StatusIndicator status={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataGrid