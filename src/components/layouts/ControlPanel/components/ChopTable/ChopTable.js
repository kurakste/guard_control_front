import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';

import './ChopTable.scss';

import { Col } from 'reactstrap';

const ChopTable = ({ chops, onClick, activeChopIndex }) => {
  const columns = [
    {
      Header: 'Название',
      accessor: 'name',
      style: { cursor: 'pointer' },
    },
  ];

  const trProps = (state, rowInfo) => {
    const newProps = {
      onClick: (e, handleOriginal) => {
        onClick(rowInfo.index);
        if (handleOriginal) {
          handleOriginal();
        }
      },
    };
    if (rowInfo.index === activeChopIndex) {
      newProps.style = {
        background: '#20a8d8',
        color: 'white',
      };
    }
    return newProps;
  };

  return (
    <Col className="px-0">
      <ReactTable
        data={chops}
        columns={columns}
        showPagination ={false}
        minRows={0}
        style={{
          height: '100%',
          borderLeft: '0px',
          borderTop: '0px',
          borderBottom: '0px',
        }}
        getTdProps={trProps}
      />
    </Col>
  );
};

ChopTable.propTypes = {
  chops: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  activeChopIndex: PropTypes.number.isRequired,
};


export default ChopTable;
