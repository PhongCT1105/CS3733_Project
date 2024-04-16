import { Node } from "../mapEditorTablePage.tsx";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header.tsx";
import { ColumnDef } from "@tanstack/react-table";
// import {EditableTableCell, EditCellActionButton} from "@/routes/map-editor/nodes/nodes-table.tsx";
import { EditCellActionButton } from "@/components/table/editable-data-table-cell-button.tsx";
import { EditableTableCell } from "@/components/table/editable-data-table-cell-field.tsx";

export const nodeColumns: ColumnDef<Node>[] = [
  {
    accessorKey: "nodeID",
    id: "nodeID",
    accessorFn: (originalRow) => {
      return originalRow && originalRow.nodeID;
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px] font-normal">#{row.getValue("nodeID")}</div>
    ),
    meta: {
      type: "text",
    },
    enableHiding: false,
  },
  {
    accessorKey: "xcoord",
    accessorFn: (originalRow) => {
      return originalRow && originalRow.xcoord;
    },
    id: "xcoord",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="x-cord" />
    ),
    meta: {
      type: "number",
    },
    cell: ({ table, row, column }) => (
      <EditableTableCell
        table={table}
        column={column}
        row={row}
        getValue={row.getValue}
      ></EditableTableCell>
    ),
    // cell: EditableTableCell,
    enableHiding: false,
  },
  {
    accessorKey: "ycoord",
    id: "ycoord",
    accessorFn: (originalRow) => {
      return originalRow && originalRow.ycoord;
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="y-cord" />
    ),
    meta: {
      type: "number",
    },
    cell: ({ table, row, column }) => (
      <EditableTableCell
        table={table}
        column={column}
        row={row}
        getValue={row.getValue}
      ></EditableTableCell>
    ),
    // cell: EditableTableCell,
    enableHiding: false,
  },
  {
    accessorKey: "floor",
    id: "floor",
    accessorFn: (originalRow) => {
      return originalRow && originalRow.floor;
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Floor" />
    ),
    meta: {
      type: "text",
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[50px] truncate font-medium">
            {row.getValue("floor")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "building",
    id: "building",
    accessorFn: (originalRow) => {
      return originalRow && originalRow.building;
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Building" />
    ),
    meta: {
      type: "text",
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate font-medium">
            {row.getValue("building")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "nodeType",
    id: "nodeType",
    accessorFn: (originalRow) => {
      return originalRow && originalRow.nodeType;
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Node Type" />
    ),
    meta: {
      type: "text",
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] truncate font-medium">
            {row.getValue("nodeType")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "longName",
    id: "longName",
    accessorFn: (originalRow) => {
      return originalRow && originalRow.longName;
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Long Name" />
    ),
    cell: ({ table, row, column }) => (
      <EditableTableCell
        table={table}
        column={column}
        row={row}
        getValue={row.getValue}
      />
    ),
    // cell: EditableTableCell,
    enableHiding: false,
    meta: {
      type: "text",
    },
  },
  {
    accessorKey: "shortName",
    id: "shortName",
    accessorFn: (originalRow) => {
      return originalRow && originalRow.shortName;
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Short Name" />
    ),
    meta: {
      type: "text",
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("shortName")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    // accessorKey
    id: "Edit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Edit" />
    ),
    cell: ({ row, table }) => (
      <EditCellActionButton row={row} table={table}></EditCellActionButton>
    ),
  },
];