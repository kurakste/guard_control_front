import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import { Badge } from 'reactstrap';
import { useStore } from 'effector-react';
import {
  operators,
  auth,
} from 'store';

import './ControlPanelAlarms.scss';

import { statusChecker } from 'helpers';

const Alarms = ({ alarms, alarmId, onClick }) => {
  const operatorsFromStore = useStore(operators);
  const authFromStore = useStore(auth);
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
        let operatorForRow = operatorsFromStore.find(id => id === row.row.oid);
        if (operatorForRow) {
          operatorForRow = `В обработке: id${operatorForRow}`;
        }
        if (!operatorForRow && row.row.status) {
          operatorForRow = 'В обработке: оператор не в сети';
        }
        if (row.row.oid === authFromStore.user.id) {
          operatorForRow = 'В обработке мной';
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
    {
      Header: 'Оплачен',
      accessor: 'callIsPaid',
      Cell: row => {
        return (
          <div>
            <span>{`${row.row.callIsPaid ? 'Да' : 'Нет'} `}</span>
          </div>
        );
      },
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
      showPagination={(alarms && alarms.length > 15)}
      showPaginationBottom={true}
      showPageSizeOptions={false}
      defaultPageSize={15}
      previousText='Предыдущая страница'
      nextText='Следующая страница'
      pageText= 'Страница'
      ofText= 'из'
      rowsText= 'строк'
      minRows={0}
      style={{
        height: '80vh',
        borderLeft: '0px',
        borderTop: '0px',
        borderBottom: '0px',
      }}
      getTdProps={trProps}
    />
  );
};

Alarms.propTypes = {
  alarms: PropTypes.array.isRequired,
  alarmId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Alarms;
