import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useState } from 'react';
import Popup from '../components/Popup';
import Table from '../components/Table'; 

const Playground = () => {
  const isAuthenticated = useSelector((state: RootState) => state.usersSlice.isAuthenticated);
  const [stsCredentials, setStsCredentials] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const ecrImages = [
    {
      name: "ExampleImage:ExampleTag",
      description: "Example Image Description",
      createdAt: "2023-06-01T00:00:00Z",
      sizeInBytes: 123456,
    },
  ];

  const ecsTasks = [
    {
      taskArn: "arn:aws:ecs:us-east-1:123456789012:task/1d8779d0-9988-4e3a-9f85-1c9db8b793b7",
      clusterArn: "arn:aws:ecs:us-east-1:123456789012:cluster/{example-cluster}",
      taskDefinitionArn: "arn:aws:ecs:us-east-1:123456789012:task-definition/{example-task-definition}:1",
      lastStatus: "RUNNING",
    },
  ];

  const ecrImagesColumns = [
    { name: 'name', label: 'Name' },
    { name: 'description', label: 'Description' },
    { name: 'createdAt', label: 'Created At' },
    { name: 'sizeInBytes', label: 'Size (bytes)' },
  ];

  const ecsTasksColumns = [
    { name: 'taskArn', label: 'Task ARN' },
    { name: 'clusterArn', label: 'Cluster ARN' },
    { name: 'taskDefinitionArn', label: 'Task Definition ARN' },
    { name: 'lastStatus', label: 'Last Status' },
  ];

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
      <Table data={ecrImages} columns={ecrImagesColumns} />

      <h2 style={headingStyle}>ECS Tasks</h2>
      <Table data={ecsTasks} columns={ecsTasksColumns} />
    </div>
  );
};

export default Playground;
