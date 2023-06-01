// src/cognito.js
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'YOUR_USER_POOL_ID',
  ClientId: 'YOUR_APP_CLIENT_ID',
};

export const userPool = new CognitoUserPool(poolData);