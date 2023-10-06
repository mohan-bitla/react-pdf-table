import { Table, TableHeader, TableCell, TableBody, DataTableCell } from '@david.kucsai/react-pdf-table';
import {PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
  }
});

// Create Document Component
const MyDocument = () => (
  <PDFViewer width={1000} height={768}>
    <Document>
      <Page size="A4" style={styles.page}>
        <Table
          data={[
                {firstName: "John", lastName: "Smith", dob: new Date(2000, 1, 1), country: "Australia", phoneNumber: "xxx-0000-0000"}
            ]}
        >
            <TableHeader>
                <TableCell>
                    First Name
                </TableCell>
                <TableCell>
                    Last Name
                </TableCell>
                <TableCell>
                    DOB
                </TableCell>
                <TableCell>
                    Country
                </TableCell>
                <TableCell>
                    Phone Number
                </TableCell>
            </TableHeader>
            <TableBody>
                <DataTableCell getContent={(r) => r.firstName}/>
                <DataTableCell getContent={(r) => r.lastName}/>
                <DataTableCell getContent={(r) => r.dob.toLocaleString()}/>
                <DataTableCell getContent={(r) => r.country}/>
                <DataTableCell getContent={(r) => r.phoneNumber}/>
            </TableBody>
        </Table>
      </Page>
    </Document>
  </PDFViewer>
);

export default MyDocument