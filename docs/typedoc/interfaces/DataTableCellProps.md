[@david.kucsai/react-pdf-table](../README.md) / [Exports](../modules.md) / DataTableCellProps

# Interface: DataTableCellProps

Whether to include borders or not.
Depending on the context some toggles will not have any effect.

## Hierarchy

- [`TableCellProps`](TableCellProps.md)

  ↳ **`DataTableCellProps`**

## Table of contents

### Properties

- [data](DataTableCellProps.md#data)
- [fontSize](DataTableCellProps.md#fontsize)
- [getContent](DataTableCellProps.md#getcontent)
- [includeBottomBorder](DataTableCellProps.md#includebottomborder)
- [includeLeftBorder](DataTableCellProps.md#includeleftborder)
- [includeRightBorder](DataTableCellProps.md#includerightborder)
- [includeTopBorder](DataTableCellProps.md#includetopborder)
- [isHeader](DataTableCellProps.md#isheader)
- [style](DataTableCellProps.md#style)
- [textAlign](DataTableCellProps.md#textalign)
- [weighting](DataTableCellProps.md#weighting)

## Properties

### data

• `Optional` **data**: `any`

The data associated with the cell.

#### Defined in

[src/DataTableCell.tsx:8](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/DataTableCell.tsx#L8)

___

### fontSize

• `Optional` **fontSize**: `string` \| `number`

The font-size to apply to the cell.

#### Inherited from

[TableCellProps](TableCellProps.md).[fontSize](TableCellProps.md#fontsize)

#### Defined in

[src/TableCell.tsx:57](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L57)

___

### getContent

• **getContent**: (`data`: `any`) => `ReactNode` \| `Element`

#### Type declaration

▸ (`data`): `ReactNode` \| `Element`

The content to display for this cell.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | the data passed in. |

##### Returns

`ReactNode` \| `Element`

#### Defined in

[src/DataTableCell.tsx:14](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/DataTableCell.tsx#L14)

___

### includeBottomBorder

• `Optional` **includeBottomBorder**: `boolean`

Include the bottom border. Default true.

#### Inherited from

[TableCellProps](TableCellProps.md).[includeBottomBorder](TableCellProps.md#includebottomborder)

#### Defined in

[src/TableCell.tsx:24](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L24)

___

### includeLeftBorder

• `Optional` **includeLeftBorder**: `boolean`

Include the left border. Default true.

#### Inherited from

[TableCellProps](TableCellProps.md).[includeLeftBorder](TableCellProps.md#includeleftborder)

#### Defined in

[src/TableCell.tsx:29](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L29)

___

### includeRightBorder

• `Optional` **includeRightBorder**: `boolean`

Include the right border. Default true.

#### Inherited from

[TableCellProps](TableCellProps.md).[includeRightBorder](TableCellProps.md#includerightborder)

#### Defined in

[src/TableCell.tsx:19](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L19)

___

### includeTopBorder

• `Optional` **includeTopBorder**: `boolean`

Include the top border. Default true.

#### Inherited from

[TableCellProps](TableCellProps.md).[includeTopBorder](TableCellProps.md#includetopborder)

#### Defined in

[src/TableCell.tsx:14](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L14)

___

### isHeader

• `Optional` **isHeader**: `boolean`

Whether this is a header cell or not. If not defined it will be false.

#### Inherited from

[TableCellProps](TableCellProps.md).[isHeader](TableCellProps.md#isheader)

#### Defined in

[src/TableCell.tsx:52](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L52)

___

### style

• `Optional` **style**: `Style` \| `Style`[]

Extra styling to apply. These will override existing style with the same key.

#### Inherited from

[TableCellProps](TableCellProps.md).[style](TableCellProps.md#style)

#### Defined in

[src/TableCell.tsx:42](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L42)

___

### textAlign

• `Optional` **textAlign**: ``"left"`` \| ``"center"`` \| ``"right"``

How to align the text

#### Inherited from

[TableCellProps](TableCellProps.md).[textAlign](TableCellProps.md#textalign)

#### Defined in

[src/TableCell.tsx:47](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L47)

___

### weighting

• `Optional` **weighting**: `number`

The weighting of a cell based on the flex layout style.
This value is between 0..1, if not specified 1 is assumed, this will take up the remaining available space.

#### Inherited from

[TableCellProps](TableCellProps.md).[weighting](TableCellProps.md#weighting)

#### Defined in

[src/TableCell.tsx:37](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L37)
