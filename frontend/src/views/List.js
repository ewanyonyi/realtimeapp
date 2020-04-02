import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'OS',
        field: 'os',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Runtime',
        field: 'runtime',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        name: 'Machine 1',
        os: 'Ubuntu 18.04',
        status: 'Runnning',
        runtime: '200 hrs',
      },
      {
        name: 'Machine 2',
        os: 'Centos 7',
        status: 'Runnning',
        runtime: '50 hrs',
      },
      {
        name: 'Machine 3',
        os: 'Ubuntu 18.04',
        status: 'Restarting',
        runtime: '15 hrs',
      },
      {
        name: 'Machine 4',
        os: 'Kali Linux 2020.1',
        status: 'Runnning',
        runtime: '1000 hrs',
      },
      {
        name: 'Machine 5',
        os: 'Windows 10',
        status: 'Inactive',
        runtime: '--',
      },
    ]
  };

  return (
    <MDBDataTable
      striped
      hover
      data={data}
    />
  );
}

export default DatatablePage;