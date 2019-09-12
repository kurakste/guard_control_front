import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import { Badge } from 'reactstrap';
import { useStore } from 'effector-react';
import { operators } from 'store';

import './ControlPanelAlarms.scss';

import { statusChecker } from 'helpers';

const Alarms = ({ alarms, alarmId, onClick }) => {
  const operatorsFromStore = useStore(operators);

  const columns = [
    {
      Header: 'Статус',
      accessor: 'status',
      Cell: row => {
        let status = 'danger';
        if (row.row.status === 10) {
          status = 'warning';
        }
        if (row.row.status === 20) {
          status = 'success';
        }

        return (
          <div className="status-container">
            <span className="status-text">{statusChecker(row.row.status)}</span>
            <Badge pill color={status}>!</Badge>
          </div>
        );
      },
    },
    {
      Header: 'В обработке оператором',
      accessor: 'oid',
      Cell: row => {
        let operatorForRow = operatorsFromStore.find(operator => operator.id === row.row.oid);
        if (operatorForRow) {
          operatorForRow = `${operatorForRow.lastName} ${operatorForRow.firstName}`;
        }
        return (
          <div>
            <span>{operatorForRow || 'не взят в обработку'}</span>
          </div>
        );
      },
    },
    {
      Header: 'Пользователь',
      accessor: 'User',
      Cell: row => (
        <div>
          <span>{`${row.row.User.lastName} `}</span>
          <span>{row.row.User.firstName}</span>
        </div>
      ),
    },
    {
      Header: 'Телефон',
      accessor: 'User.tel',
    },
  ];

  const trProps = (state, rowInfo) => {
    const newProps = {
      onClick: (e, handleOriginal) => {
        onClick(rowInfo.original.id);
        if (handleOriginal) {
          handleOriginal();
        }
      },
      style: {
        textAlign: 'center',
        cursor: 'pointer',
        whiteSpace: 'unset',
      },
    };
    if (rowInfo.original.id === alarmId) {
      newProps.style = {
        ...newProps.style,
        background: '#20a8d8',
        color: 'white',
      };
    }
    return newProps;
  };

  return (
    <ReactTable
      data={alarms}
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
  );
};
/*
const Alarms = ({ alarms, alarmId, onClick }) => (
  <ListGroup>
    {alarms.map(alarm => {
      let status = 'danger';
      if (alarm.status === 1) {
        status = 'warning';
      }
      if (alarm.status === 2) {
        status = 'success';
      }
      return (
        <ListGroupItem
          className="justify-content-between"
          tag="button"
          action
          key={alarm.id}
          active={alarmId === alarm.id}
          onClick={() => onClick(alarm.id)}
        >
          {`Событие у ${alarm.User.lastName}, тел. ${alarm.User.tel}`}
          <Badge className="float-right" pill color={status}>!</Badge>
        </ListGroupItem>);
    })}
  </ListGroup>
);
*/
Alarms.propTypes = {
  alarms: PropTypes.array.isRequired,
  alarmId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Alarms;
