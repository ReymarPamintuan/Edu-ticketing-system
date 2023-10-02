"use client"
import { CSVLink } from 'react-csv';
import { dashboardTable } from '@/constant/table-data';

const headers = [
  { label: 'Date', key: 'date' },
  { label: 'Priority', key: 'priority' },
  { label: 'Location', key: 'location' },
  { label: 'Title', key: 'title' },
  { label: 'Status', key: 'status' },
  { label: 'Assigned', key: 'assigned' },
  { label: 'Action', key: 'action' },
];

const data = dashboardTable.map((item) => (
  { date:  item.date, priority: item.priority, location: item.location, title: item.title, status: item.status, assigned: item.assigned, action: item.action }
));

const csvReport = {
  data: data,
  headers: headers,
  filename: 'Performance Scoring EDU.csv',
};

export default function CSVButton() {
  return (
    <span className="px-[10px] py-[4px] bg-[#6c757d] text-white rounded-[2px] font-[600]">
      <CSVLink {...csvReport}>CSV</CSVLink>
    </span>
  );
}
