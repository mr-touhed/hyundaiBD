import * as XLSX from 'xlsx';

export   const handle_Download_XLSheet = (data , type) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
  
    // Generate the current date
    const date = new Date();
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  
    // Create the filename with the desired format
    const filename = `${type}-data-${formattedDate}.xlsx`;
  
    // Create a download link and trigger the download
    XLSX.writeFile(wb, filename);
  };