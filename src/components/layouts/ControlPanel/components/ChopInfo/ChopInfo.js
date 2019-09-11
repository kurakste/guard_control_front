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
      Header: 'Регион',
      accessor: 'regionId',
    },
    {
      Header: 'Телефон',
      accessor: 'tel',
    },
    {
      Header: 'Доп. телефон 1',
      accessor: 'tel1',
    },
    {
      Header: 'Доп. телефон 2',
      accessor: 'tel2',
    },
    {
      Header: 'Заметки',
      accessor: 'notes',
      style: { whiteSpace: 'unset' },
    },
  ];
  return (
    <Col lg='9' xl='9' mg='9' sm='9' xs='9' className="px-0">
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
