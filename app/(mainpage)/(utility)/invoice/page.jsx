/* eslint-disable react/display-name */
"use client";

import React, { useState, useEffect, useMemo } from "react";
// import { advancedTable } from "@/constant/table-data";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { useRouter, usePathname } from "next/navigation";
import CSVButton from "@/components/partials/widget/CSVButton";
import PrintButton from "@/components/partials/widget/PrintButton";
import Tooltip from "@/components/ui/Tooltip";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination";
import {
  useTable,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import GlobalFilter from "@/components/partials/table/GlobalFilter";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input
          type="checkbox"
          ref={resolvedRef}
          {...rest}
          className="table-checkbox"
        />
      </>
    );
  }
);

const InvoicePage = ({ advancedTable }) => {
  //pagination start
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add any other logic you need here, such as making an API call to fetch data for the new page
  };
  //pagination end
  // const InvoicePage = (props) => {
  const router = useRouter();
  const location = usePathname();
  const locationName = location.replace("/", "");
  // const advancedTable = props.advancedTable;
  // const { advancedTable } = props;
  // const advancedTable = props.a;
  const generateCSV = () => {
    // Generate the CSV content (replace with your own logic)
    const csvContent = "Name,Age\nJohn Smith,25\nJane Doe,30";

    return csvContent;
  };

  const handleDownloadCSV = () => {
    const csvData = generateCSV();

    // Create a data URL for the CSV content
    const csvUrl = "data:text/csv;charset=utf-8," + encodeURIComponent(csvData);

    // Open a new window for downloading the CSV file
    window.open(csvUrl);
  };
  const actions = [
    {
      name: "send",
      icon: "ph:paper-plane-right",
      doit: () => {
        router.push("/invoice-add");
      },
    },
    {
      name: "view",
      icon: "heroicons-outline:eye",
      doit: () => {
        router.push("/invoice-preview");
      },
    },
    {
      name: "edit",
      icon: "heroicons:pencil-square",
      doit: (id) => {
        router.push("/invoice-edit");
      },
    },
    {
      name: "delete",
      icon: "heroicons-outline:trash",
      doit: (id) => {
        return null;
      },
    },
  ];
  const COLUMNS = [
    {
      Header: "Date",
      accessor: "date",
      Cell: (row) => {
        return <span className="text-[16px]">{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Priority",
      accessor: "priority",
      Cell: (row) => {
        return (
          <span
            className={` text-[16px] font-[600] ${
              row?.cell?.value === "Tier 3" ? "text-[#e13030]" : ""
            } 
                  ${row?.cell?.value === "Tier 1" ? "text-[#af1214]" : ""}
                
                `}
          >
            {row?.cell?.value}
          </span>
        );
      },
    },
    {
      Header: "Location",
      accessor: "location",
      Cell: (row) => {
        return <span className="text-[16px]">{row?.cell?.value}</span>;
      },
    },

    {
      Header: "title",
      accessor: "title",
      Cell: (row) => {
        return <span className="text-[16px]">{row?.cell?.value}</span>;
      },
    },
    {
      Header: "status",
      accessor: "status",
      Cell: (row) => {
        return (
          <span className="block w-full">
            <span
              className={` text-[16px] font-[600] min-w-[90px] text-center mx-auto py-1 ${
                row?.cell?.value === "Open" ? "text-[#fabc43]" : ""
              } 
            ${row?.cell?.value === "Pending" ? "text-[#19a5ad]" : ""}
            
             `}
            >
              {row?.cell?.value}
            </span>
          </span>
        );
      },
    },
    {
      Header: "assigned",
      accessor: "assigned",
      Cell: (row) => {
        return <span className="text-[16px]">{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: (row) => {
        console.log("row-> ", row?.cell);
        return (
          <div className="flex gap-4">
            {row?.cell?.value.map((data, index) => (
              <Link
                key={index}
                className={`bg-[#6c757d] px-[10px] py-[4px] text-white 
                           ${data === "address" ? "bg-blue-600" : ""} 
                           ${data === "reject" ? "bg-red-600" : ""} 
                           ${data === "accept" ? "bg-green-600" : ""}`}
                // href={`ticket-details/${ parseInt(row?.cell?.row.id) + 1}`}
                href={`${
                  data === "details"
                    ? `ticket-details/${row?.cell?.row?.original?.id}`
                    : `ticket-address/${row?.cell?.row?.original?.id}`
                }`}
              >
                {data}
              </Link>
            ))}
            {console.log("Link-test:", row?.cell?.row)}
          </div>
        );

        for (const data of row?.cell?.value.map) {
          return;
        }
      },
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => advancedTable, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },

    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  const [modalOpen, setModalOpen] = useState(false);
  const handleButtonClick = () => {
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false);
    }, 1500);
  };

  return (
    <>
      <Card className="">
        {locationName === "ticketing-dashboard" ||
        locationName === "locations" ? (
          <div className="flex justify-between items-center bg-[#dfdfdf] px-6 py-2">
            <p className="font-[600] text-[19px] text-[#000000]">Ticket List</p>
            <Link
              className="flex items-center bg-[#6c757d] px-[12px] py-[6px] text-[13px] font-[600] text-white rounded-[2px] gap-1"
              href="create-ticket"
            >
              {" "}
              <div className="text-[18px]">
                <Icon icon="mdi:tag" />
              </div>
              Create Ticket
            </Link>
          </div>
        ) : (
          <></>
        )}
        <div className="flex relative justify-center items-center gap-1 pt-[30px] mb-[10px] px-6 py-2">
          <div className="flex gap-1">
            <button
              className="px-[10px] py-[4px] bg-[#6c757d] text-white rounded-[2px] font-[600]"
              onClick={handleButtonClick}
            >
              Copy
            </button>
            <CSVButton />
            <PrintButton selectId="dashboardtable" />
          </div>
          {modalOpen && (
            <div className="absolute flex justify-center items-center z-[100]">
              <div className={` border-2 w-[400px] `}>
                <div className="flex justify-center items-center px-2 py-3 border-b border-black bg-[#f4f4f4]">
                  <h3>Copy to clipboard</h3>
                </div>
                <div className="flex justify-center items-center px-2 py-2 bg-white">
                  <p>Copied 5 rows to clipboard.</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center px-6 py-3">
          <select
            className="form-control py-2 w-max"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[5, 10, 15, 20, 25, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <div className="w-[200px] ">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
        </div>
        <div className="overflow-x-auto -mx-6 px-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden px-6" id="dashboardtable">
              <table
                className="border-collapse border border-slate-400 min-w-full table-fixed"
                {...getTableProps}
              >
                <thead className=" border-t border-slate-100 dark:border-slate-800">
                  {headerGroups.map((headerGroup) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      key={`ex-tr-${headerGroup.id}`}
                    >
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          scope="col"
                          className="border border-slate-300 table-th font-[600] text-[16px] capitalize"
                          key={`ex-th-${column.id}`}
                        >
                          {column.render("Header")}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " 🔽"
                                : " 🔼"
                              : ""}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700"
                  {...getTableBodyProps}
                >
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} key={`ex-tr2-${row.id}`}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="border border-slate-300 table-td py-3"
                              key={`ex-td-${cell.column.id}`}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center px-6 pb-6">
          <div className="flex justify-end w-full">
            <ul className="flex justify-end items-center   space-x-3  rtl:space-x-reverse flex-wrap">
              {/* <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
                <button
                  className={` ${
                    !canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  <Icon icon="heroicons:chevron-double-left-solid" />
                </button>
              </li> */}
              <li className="text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180">
                <button
                  className={` ${
                    !canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  <Icon icon="fluent:ios-arrow-24-regular" />
                </button>
              </li>
              {pageOptions.map((page, pageIdx) => (
                <li key={pageIdx}>
                  <button
                    href="#"
                    aria-current="page"
                    className={` ${
                      pageIdx === pageIndex
                        ? "bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium "
                        : "bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "
                    }    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`}
                    onClick={() => gotoPage(pageIdx)}
                  >
                    {page + 1}
                  </button>
                </li>
              ))}
              <li className="text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180">
                <button
                  className={` ${
                    !canNextPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  <Icon icon="fluent:ios-arrow-24-regular" rotate={2} />
                </button>
              </li>
              {/* <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
                <button
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                  className={` ${
                    !canNextPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <Icon icon="heroicons:chevron-double-right-solid" />
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
};

export default InvoicePage;
