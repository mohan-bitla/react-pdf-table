[@david.kucsai/react-pdf-table](../README.md) / [Exports](../modules.md) / TableBodyProps

# Interface: TableBodyProps

## Hierarchy

- `TableRowProps`

- `Pick`<[`ZebraProps`](ZebraProps.md), ``"zebra"``\>

  ↳ **`TableBodyProps`**

## Table of contents

### Properties

- [data](TableBodyProps.md#data)
- [even](TableBodyProps.md#even)
- [evenRowColor](TableBodyProps.md#evenrowcolor)
- [fontSize](TableBodyProps.md#fontsize)
- [includeBottomBorder](TableBodyProps.md#includebottomborder)
- [includeLeftBorder](TableBodyProps.md#includeleftborder)
- [includeRightBorder](TableBodyProps.md#includerightborder)
- [includeTopBorder](TableBodyProps.md#includetopborder)
- [oddRowColor](TableBodyProps.md#oddrowcolor)
- [renderTopBorder](TableBodyProps.md#rendertopborder)
- [textAlign](TableBodyProps.md#textalign)
- [zebra](TableBodyProps.md#zebra)

## Properties

### data

• `Optional` **data**: `any`[]

The data associated with the table.

#### Overrides

TableRowProps.data

#### Defined in

[src/TableBody.tsx:10](https://github.com/mohan-bitla/react-pdf-table/blob/311c211/src/TableBody.tsx#L10)

___

### even

• `Optional` **even**: `boolean`

Whether this row is even (true) or odd (false)

#### Inherited from

TableRowProps.even

#### Defined in

[src/TableRow.tsx:32](https://github.com/mohan-bitla/react-pdf-table/blob/311c211/src/TableRow.tsx#L32)

___

### evenRowColor

• `Optional` **evenRowColor**: `string`

Specify the color of even rows

#### Inherited from

TableRowProps.evenRowColor

#### Defined in

[src/TableRow.tsx:37](https://github.com/mohan-bitla/react-pdf-table/blob/311c211/src/TableRow.tsx#L37)

___

### fontSize

• `Optional` **fontSize**: `string` \| `number`

The font size as a valid unit defined in react-pdf.

#### Inherited from

TableRowProps.fontSize

#### Defined in

[src/TableRow.tsx:12](https://github.com/mohan-bitla/react-pdf-table/blob/311c211/src/TableRow.tsx#L12)

___

### includeBottomBorder

• `Optional` **includeBottomBorder**: `boolean`

Include the bottom border. Default true.

#### Inherited from

TableRowProps.includeBottomBorder

#### Defined in

[src/TableCell.tsx:24](https://github.com/mohan-bitla/react-pdf-table/blob/311c211/src/TableCell.tsx#L24)

___

### includeLeftBorder

• `Optional` **includeLeftBorder**: `boolean`

Include the left border. Default true.

#### Inherited from

TableRowProps.includeLeftBorder

#### Defined in

[src/TableCell.tsx:29](https://github.com/mohan-bitla/react-pdf-table/blob/311c211/src/TableCell.tsx#L29)

___

### includeRightBorder

• `Optional` **includeRightBorder**: `boolean`

Include the right border. Default true.

#### Inherited from

TableRowProps.includeRightBorder

#### Defined in

[src/TableCell.tsx:19](https://github.com/mohan-bitla/react-pdf-table/blob/311c211/src/TableCell.tsx#L19)

___

### includeTopBorder

• `Optional` **includeTopBorder**: `boolean`

Include the top border. Default true.

#### Inherited from

TableRowProps.includeTopBorder

#### Defined in

[src/TableCell.tsx:14](https://github.com/mohan-bitla/react-pdf-table/blob/311c211/src/TableCell.tsx#L14)

___

### oddRowColor

• `Optional` **oddRowColor**: `string`

Specify the color of odd rows

#### Inherited from

TableRowProps.oddRowColor

#### Defined in

[src/TableRow.tsx:42](https://github.com/mohan-bitla/react-pdf-table/blob/311c211/src/TableRow.tsx#L42)

___

### renderTopBorder

• `Optional` **renderTopBorder**: `boolean`

Allows control of the very top border of the TableBody to be toggled on and off
if there is no header.

#### Defined in

[src/TableBody.tsx:16](https://github.com/mohan-bitla/react-pdf-table/blob/311c211/src/TableBody.tsx#L16)

___

### textAlign

• `Optional` **textAlign**: ``"left"`` \| ``"center"`` \| ``"right"``

Whether to align the text. Defaults to left.

#### Inherited from

TableRowProps.textAlign

#### Defined in

[src/TableRow.tsx:17](https://github.com/mohan-bitla/react-pdf-table/blob/311c211/src/TableRow.tsx#L17)

___

### zebra

• `Optional` **zebra**: `boolean`

Whether rows have alternating styles

#### Inherited from

TableRowProps.zebra

#### Defined in

[src/TableRow.tsx:27](https://github.com/mohan-bitla/react-pdf-table/blob/311c211/src/TableRow.tsx#L27)
