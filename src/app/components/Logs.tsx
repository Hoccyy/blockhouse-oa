
import styles from '@/app/components/Layout.module.css';

const Logs = () => {
  const logData = [
    { id: 1, timestamp: '2024-09-11 10:00:00', message: 'User logged in successfully.' },
    { id: 2, timestamp: '2024-09-11 10:05:00', message: 'Password attempt failed.' },
    { id: 3, timestamp: '2024-09-11 10:10:00', message: 'Failed to connect to the database.' },
    { id: 4, timestamp: '2024-09-11 10:15:00', message: 'User logged out.' },
    { id: 5, timestamp: '2024-09-11 10:20:00', message: 'User profile loaded in 250ms.' },
  ];

  return (
    <div className={styles.logs}>
    <h1 className={styles.header}>Logs</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '.1px solid black', padding: '8px' }}>Timestamp</th>
            <th style={{ border: '.1px solid black', padding: '8px' }}>Message</th>
          </tr>
        </thead>
        <tbody>
          {logData.map((log) => (
            <tr key={log.id}>
              <td style={{ border: '0px solid black', padding: '8px', textAlign: 'center' }}>{log.timestamp}</td>
              <td style={{ border: '0px solid black', padding: '8px', textAlign: 'center' }}>{log.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Logs;
