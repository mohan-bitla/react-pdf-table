[@david.kucsai/react-pdf-table](../README.md) / [Exports](../modules.md) / TableCellProps

# Interface: TableCellProps

Whether to include borders or not.
Depending on the context some toggles will not have any effect.

## Hierarchy

- [`TableBorder`](TableBorder.md)

  ↳ **`TableCellProps`**

  ↳↳ [`DataTableCellProps`](DataTableCellProps.md)

## Table of contents

### Properties

- [fontSize](TableCellProps.md#fontsize)
- [includeBottomBorder](TableCellProps.md#includebottomborder)
- [includeLeftBorder](TableCellProps.md#includeleftborder)
- [includeRightBorder](TableCellProps.md#includerightborder)
- [includeTopBorder](TableCellProps.md#includetopborder)
- [isHeader](TableCellProps.md#isheader)
- [style](TableCellProps.md#style)
- [textAlign](TableCellProps.md#textalign)
- [weighting](TableCellProps.md#weighting)

## Properties

### fontSize

• `Optional` **fontSize**: `string` \| `number`

The font-size to apply to the cell.

#### Defined in

[src/TableCell.tsx:57](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L57)

___

### includeBottomBorder

• `Optional` **includeBottomBorder**: `boolean`

Include the bottom border. Default true.

#### Inherited from

[TableBorder](TableBorder.md).[includeBottomBorder](TableBorder.md#includebottomborder)

#### Defined in

[src/TableCell.tsx:24](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L24)

___

### includeLeftBorder

• `Optional` **includeLeftBorder**: `boolean`

Include the left border. Default true.

#### Inherited from

[TableBorder](TableBorder.md).[includeLeftBorder](TableBorder.md#includeleftborder)

#### Defined in

[src/TableCell.tsx:29](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L29)

___

### includeRightBorder

• `Optional` **includeRightBorder**: `boolean`

Include the right border. Default true.

#### Inherited from

[TableBorder](TableBorder.md).[includeRightBorder](TableBorder.md#includerightborder)

#### Defined in

[src/TableCell.tsx:19](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L19)

___

### includeTopBorder

• `Optional` **includeTopBorder**: `boolean`

Include the top border. Default true.

#### Inherited from

[TableBorder](TableBorder.md).[includeTopBorder](TableBorder.md#includetopborder)

#### Defined in

[src/TableCell.tsx:14](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L14)

___

### isHeader

• `Optional` **isHeader**: `boolean`

Whether this is a header cell or not. If not defined it will be false.

#### Defined in

[src/TableCell.tsx:52](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L52)

___

### style

• `Optional` **style**: `Style` \| `Style`[]

Extra styling to apply. These will override existing style with the same key.

#### Defined in

[src/TableCell.tsx:42](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L42)

___

### textAlign

• `Optional` **textAlign**: ``"left"`` \| ``"center"`` \| ``"right"``

How to align the text

#### Defined in

[src/TableCell.tsx:47](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L47)

___

### weighting

• `Optional` **weighting**: `number`

The weighting of a cell based on the flex layout style.
This value is between 0..1, if not specified 1 is assumed, this will take up the remaining available space.

#### Defined in

[src/TableCell.tsx:37](https://github.com/mohan-bitla/react-pdf-table/blob/433583f/src/TableCell.tsx#L37)
