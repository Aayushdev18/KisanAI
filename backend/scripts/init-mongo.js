/**
 * MongoDB Initialization Script for Docker
 * Sets up the KisanAI database with proper user permissions
 */

// Switch to admin database for user creation
db = db.getSiblingDB('admin');

// Create application user for KisanAI database
db.createUser({
  user: 'kisanai',
  pwd: 'kisanai123',
  roles: [
    {
      role: 'readWrite',
      db: 'kisanai'
    }
  ]
});

// Switch to KisanAI database
db = db.getSiblingDB('kisanai');

// Create collections with validation (optional - Mongoose will create these)
db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['personalInfo', 'authentication', 'location'],
      properties: {
        personalInfo: {
          bsonType: 'object',
          required: ['firstName', 'lastName', 'phoneNumber'],
          properties: {
            firstName: { bsonType: 'string' },
            lastName: { bsonType: 'string' },
            phoneNumber: { bsonType: 'string' }
          }
        }
      }
    }
  }
});

db.createCollection('farms');
db.createCollection('diagnosishistories');
db.createCollection('irrigationlogs');

// Create initial indexes for performance
db.users.createIndex({ 'personalInfo.phoneNumber': 1 }, { unique: true });
db.users.createIndex({ 'personalInfo.email': 1 }, { unique: true, sparse: true });
db.users.createIndex({ 'location.coordinates': '2dsphere' });

db.farms.createIndex({ owner: 1 });
db.farms.createIndex({ 'location.centerPoint': '2dsphere' });

db.diagnosishistories.createIndex({ user: 1, createdAt: -1 });
db.diagnosishistories.createIndex({ farm: 1, fieldId: 1 });

db.irrigationlogs.createIndex({ user: 1, createdAt: -1 });
db.irrigationlogs.createIndex({ farm: 1, fieldId: 1 });

print('KisanAI database initialization completed successfully!');