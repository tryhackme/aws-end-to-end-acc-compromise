import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useState } from 'react';
import Popup from '../components/Popup';

const Playground = () => {
  const isAuthenticated = useSelector((state: RootState) => state.usersSlice.isAuthenticated);
  const [stsCredentials, setStsCredentials] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const ecrImages = [
    {
      name: "MockImage",
      description: "Mock description",
      createdAt: "2023-06-01T00:00:00Z",
      sizeInBytes: 123456,
    },
  ];

  const ecsTasks = [
    {
      taskArn: "arn:aws:ecs:us-east-1:123456789012:task/1d8779d0-9988-4e3a-9f85-1c9db8b793b7",
      clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/test",
      taskDefinitionArn: "arn:aws:ecs:us-east-1:123456789012:task-definition/test:1",
      lastStatus: "RUNNING",
    },
  ];

  const cellStyle = {
    border: '1px solid black',
    textAlign: 'center',
    verticalAlign: 'middle',
    padding: '0.5rem',
  };

  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: 'black',
    color: 'white',
  };

  const headingStyle = {
    color: 'blue',
    textAlign: 'center',
    marginBottom: '1rem',
  };

  const getTemporaryCredentials = async () => {
    if (!isAuthenticated) {
      setStsCredentials({
        accessKeyId: 'Not Authenticated',
        secretAccessKey: 'Not Authenticated',
        sessionToken: 'Not Authenticated',
      });
      setPopupVisible(true);
      return;
    }

    try {
      const response = await fetch('/tokens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${identityToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to retrieve temporary credentials');
      }

      const data = await response.json();
      setStsCredentials(data);
      setPopupVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <h1 style={headingStyle}>Developer Playground</h1>

      <div>
        <h2 style={headingStyle}>Temporary Credentials</h2>
        <button className="buttonStyle" onClick={getTemporaryCredentials}>Get Temporary Credentials</button>
        <Popup isOpen={isPopupVisible} onClose={closePopup}>
          <p><strong>AWS Access Key ID:</strong> {stsCredentials?.accessKeyId || 'Not Authenticated'}</p>
          <p><strong>AWS Secret Access Key:</strong> {stsCredentials?.secretAccessKey || 'Not Authenticated'}</p>
          <p><strong>AWS Session Token:</strong> {stsCredentials?.sessionToken || 'Not Authenticated'}</p>
        </Popup>
      </div>

      <h2 style={headingStyle}>ECR Images</h2>
      <table style={{ width: '100%', marginBottom: '1rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Name</th>
            <th style={headerCellStyle}>Description</th>
            <th style={headerCellStyle}>Created At</th>
            <th style={headerCellStyle}>Size (bytes)</th>
          </tr>
        </thead>
        <tbody>
          {ecrImages.map((image) => (
            <tr key={image.name}>
              <td style={cellStyle}>{image.name}</td>
              <td style={cellStyle}>{image.description}</td>
              <td style={cellStyle}>{image.createdAt}</td>
              <td style={cellStyle}>{image.sizeInBytes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={headingStyle}>ECS Tasks</h2>
      <table style={{ width: '100%', marginBottom: '1rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Task ARN</th>
            <th style={headerCellStyle}>Cluster ARN</th>
            <th style={headerCellStyle}>Task Definition ARN</th>
            <th style={headerCellStyle}>Last Status</th>
          </tr>
        </thead>
        <tbody>
          {ecsTasks.map((task) => (
            <tr key={task.taskArn}>
              <td style={cellStyle}>{task.taskArn}</td>
              <td style={cellStyle}>{task.clusterArn}</td>
              <td style={cellStyle}>{task.taskDefinitionArn}</td>
              <td style={cellStyle}>{task.lastStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Playground;