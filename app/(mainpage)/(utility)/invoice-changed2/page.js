/* eslint-disable react/display-name */
"use client";

import React, { useState, useMemo } from "react";
// import { advancedTable } from "@/constant/table-data";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Dropdown from "@/components/ui/Dropdown";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
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

const InvoiceChanged2Page = ({ advancedTable }) => {
  // const InvoicePage = (props) => {
  const router = useRouter();
  const location = usePathname();
  const locationName = location.replace("/", "");
  // const advancedTable = props.advancedTable;
  // const { advancedTable } = props;
  // const advancedTable = props.a;
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
      Header: "Campus",
      accessor: "campus",
      Cell: (row) => {
        return <span className="text-[16px]">{row?.cell?.value}</span>;
      },
    },
    // {
    //   Header: "Priority",
    //   accessor: "priority",
    //   Cell: (row) => {
    //     return (
    //       <span
    //         className={` text-[16px] font-[600] ${
    //           row?.cell?.value === "Tier 3" ? "text-[#e13030]" : ""
    //         }
    //               ${row?.cell?.value === "Tier 1" ? "text-[#af1214]" : ""}

    //             `}
    //       >
    //         {row?.cell?.value}
    //       </span>
    //     );
    //   },
    // },
    {
      Header: "Location",
      accessor: "location",
      Cell: (row) => {
        return <span className="text-[16px]">{row?.cell?.value}</span>;
      },
    },
    // {
    //   Header: "customer",
    //   accessor: "customer",
    //   Cell: (row) => {
    //     return (
    //       <div>
    //         <span className="inline-flex items-center">
    //           <span className="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none bg-slate-600">
    //             <img
    //               src={row?.cell?.value.image}
    //               alt=""
    //               className="object-cover w-full h-full rounded-full"
    //             />
    //           </span>
    //           <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
    //             {row?.cell?.value.name}
    //           </span>
    //         </span>
    //       </div>
    //     );
    //   },
    // },

    // {
    //   Header: "title",
    //   accessor: "title",
    //   Cell: (row) => {
    //     return <span className="text-[16px]">{row?.cell?.value}</span>;
    //   },
    // },
    // {
    //   Header: "status",
    //   accessor: "status",
    //   Cell: (row) => {
    //     return (
    //       <span className="block w-full">
    //         <span
    //           className={` text-[16px] font-[600] min-w-[90px] text-center mx-auto py-1 ${
    //             row?.cell?.value === "Open" ? "text-[#fabc43]" : ""
    //           }
    //         ${row?.cell?.value === "Pending" ? "text-[#19a5ad]" : ""}

    //          `}
    //         >
    //           {row?.cell?.value}
    //         </span>
    //       </span>
    //     );
    //   },
    // },
    // {
    //   Header: "assigned",
    //   accessor: "assigned",
    //   Cell: (row) => {
    //     return <span className="text-[16px]">{row?.cell?.value}</span>;
    //   },
    // },
    {
      Header: "action",
      accessor: "action",
      Cell: (row) => {
        console.log("row-> ", row?.cell?.value);
        return (
          <div className="flex gap-4">
            {row?.cell?.value.map((data, index) => (
              <Button
                key={index}
                className="bg-[#6c757d] px-[10px] py-[4px] text-white"
                href="#"
              >
                {data}
              </Button>
            ))}
          </div>
        );
        for (const data of row?.cell?.value.map) {
          return;
        }

        // return (
        //   <div>
        //     {console.log("arrayTest:", row?.cell?.value)}
        //     {row?.cell?.value[0] === "detail" && (
        //       <div>
        //         <Button
        //           className="bg-[#6c757d] px-[10px] py-[4px] text-white"
        //           href="#"
        //         >
        //           Details
        //         </Button>
        //         <Button>a</Button>
        //       </div>
        //     )}
        //   </div>
        // );
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

    // (hooks) => {
    //   hooks.visibleColumns.push((columns) => [
    //     {
    //       id: "selection",
    //       Header: ({ getToggleAllRowsSelectedProps }) => (
    //         <div>
    //           <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
    //         </div>
    //       ),
    //       Cell: ({ row }) => (
    //         <div>
    //           <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
    //         </div>
    //       ),
    //     },
    //     ...columns,
    //   ]);
    // }
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

  return (
    <>
      <Card>
        {locationName === "locations" ? (
          <div className="flex justify-between items-center bg-[#dfdfdf] px-6 py-2">
            <p className="font-[600] text-[19px] text-[#000000]">Ticket List</p>
            <Link
              className="bg-[#6c757d] px-[10px] py-[4px] text-white"
              href="locations/create-ticket"
            >
              Create Ticket
            </Link>
          </div>
        ) : (
          <></>
        )}
        <div className="flex justify-center items-center gap-1 pt-[30px] mb-[10px] px-6 py-2">
          <Button
            className="bg-[#6c757d] px-[10px] py-[4px] text-white"
            href="#"
          >
            Copy
          </Button>
          <Button
            className="bg-[#6c757d] px-[10px] py-[4px] text-white"
            href="#"
          >
            CSV
          </Button>
          <Button
            className="bg-[#6c757d] px-[10px] py-[4px] text-white"
            href="#"
          >
            Print
          </Button>
        </div>
        <div className="flex flex-row-reverse px-6 py-3">
          <div className="w-[200px] ">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
        </div>
        <div className="overflow-x-auto -mx-6 px-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden px-6">
              <table
                className="min-w-full border-collapse border border-slate-400 table-fixed"
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
          <div className=" flex items-center space-x-3 rtl:space-x-reverse">
            <span className=" flex space-x-2  rtl:space-x-reverse items-center">
              <span className=" text-sm font-medium text-slate-600 dark:text-slate-300">
                Go
              </span>
              <span>
                <input
                  type="number"
                  className=" form-control py-2"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(pageNumber);
                  }}
                  style={{ width: "50px" }}
                />
              </span>
            </span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Page{" "}
              <span>
                {pageIndex + 1} of {pageOptions.length}
              </span>
            </span>
          </div>
          <ul className="flex items-center  space-x-3  rtl:space-x-reverse mr-[20px]">
            <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${
                  !canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <Icon icon="heroicons-outline:chevron-left" />
              </button>
            </li>
            {pageOptions.map((page, pageIdx) => (
              <li key={pageIdx}>
                <button
                  href="#"
                  aria-current="page"
                  className={` ${
                    pageIdx === pageIndex
                      ? "bg-[#11416b] w-[40px] h-[40px] text-white font-medium  "
                      : "bg-[#11416b] text-slate-900 w-[40px] h-[40px]  font-normal  "
                  }    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`}
                  onClick={() => gotoPage(pageIdx)}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${
                  !canNextPage ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                <Icon icon="heroicons-outline:chevron-right" />
              </button>
            </li>
          </ul>
        </div>
      </Card>
    </>
  );
};

export default InvoiceChanged2Page;
