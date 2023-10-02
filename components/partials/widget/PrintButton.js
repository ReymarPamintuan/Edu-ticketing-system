"use client"
import { useRouter } from 'next/navigation';
import { dashboardTable } from '@/constant/table-data';
import { Html } from 'next/document';
import InvoicePage from '@/app/(mainpage)/(utility)/invoice/page';

export default function PrintButton({selectId}) {
  const handleButtonClick = () => {
    const report = document.getElementById(selectId);
    const newWindow = "toolbar=no, addressbar=no, directories=no,location=yes, status=yes, menubar=no, scrollbars=yes, resizable=yes, width=700 , height=500, left=500, top=250";
    const printWindow = window.open('',selectId, newWindow);
    console.log("data:", report.innerHTML);
    printWindow.document.write('<html><body>');
    printWindow.document.write('<div id="selectId" name="selectId" style="overflow:scroll;" >');
    printWindow.document.write('<div style="background-color: #fff; font-size: 28px; color: #000; display:flex; justify-content: center; align-items: center">');
    printWindow.document.write(report.innerHTML);       
    printWindow.document.write('</div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
      
    setTimeout(() => {
      printWindow.print();
      // printWindow.close(); 
    }, 2000); 
  };

  return (
    <span className="px-[10px] py-[4px] bg-[#6c757d] text-white rounded-[2px] font-[600]">
      <button onClick={handleButtonClick}>Print</button>
    </span>
  );
};


