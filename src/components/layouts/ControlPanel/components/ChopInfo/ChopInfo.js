import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import { Col } from 'reactstrap';

const ChopInfo = ({ chop }) => {
  const columns = [
    {
      Header: 'Название',
      accessor: 'name',
    },
    {
      Header: 'Телефон',
      accessor: 'phone',
    },
    {
      Header: 'Заметки',
      accessor: 'notes',
      style: { whiteSpace: 'unset' },
    },
  ];
  return (
    <Col className="px-0">
      <ReactTable
        data={[chop]}
        columns={columns}
        showPagination ={false}
        minRows={0}
        style={{
          height: '100%',
          border: '0px',
        }}
      />
    </Col>
  );
};

ChopInfo.propTypes = {
  chop: PropTypes.object.isRequired,
};

export default ChopInfo;
