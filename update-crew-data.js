const mysql = require('mysql2');
const fs = require('fs');

// Database connection
const db = mysql.createConnection({
  host: 'onepiecedb.mysql.database.azure.com',
  user: 'adminuser',
  password: 'root123!',
  database: 'one_piece_db',
  ssl: {
    ca: fs.readFileSync('./DigiCertGlobalRootCA.crt.pem')
  }
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL database');
  
  addCrewAndDevilFruitColumns();
});

function addCrewAndDevilFruitColumns() {
  console.log('Checking and adding crew and devil_fruit columns...');
  
  // Check if crew column exists
  db.query('SHOW COLUMNS FROM characters LIKE "crew"', (err, results) => {
    if (err) {
      console.error('Error checking crew column:', err);
      return;
    }
    
    if (results.length === 0) {
      // Add crew column
      db.query('ALTER TABLE characters ADD COLUMN crew VARCHAR(255)', (err) => {
        if (err) {
          console.error('Error adding crew column:', err);
        } else {
          console.log('✓ Added crew column');
        }
      });
    } else {
      console.log('✓ Crew column already exists');
    }
  });

  // Check if devil_fruit column exists
  db.query('SHOW COLUMNS FROM characters LIKE "devil_fruit"', (err, results) => {
    if (err) {
      console.error('Error checking devil_fruit column:', err);
      return;
    }
    
    if (results.length === 0) {
      // Add devil_fruit column
      db.query('ALTER TABLE characters ADD COLUMN devil_fruit VARCHAR(255)', (err) => {
        if (err) {
          console.error('Error adding devil_fruit column:', err);
        } else {
          console.log('✓ Added devil_fruit column');
        }
      });
    } else {
      console.log('✓ Devil_fruit column already exists');
    }
  });

  setTimeout(() => {
    updateCharacterData();
  }, 2000);
}

function updateCharacterData() {
  console.log('\nUpdating character data with crew and devil fruit information...');
  
  const updates = [
    { name: 'Monkey D. Luffy', crew: 'Straw Hat Pirates', devil_fruit: 'Gomu Gomu no Mi' },
    { name: 'Roronoa Zoro', crew: 'Straw Hat Pirates', devil_fruit: null },
    { name: 'Nami', crew: 'Straw Hat Pirates', devil_fruit: null },
    { name: 'Sanji', crew: 'Straw Hat Pirates', devil_fruit: null },
    { name: 'Usopp', crew: 'Straw Hat Pirates', devil_fruit: null },
    { name: 'Tony Tony Chopper', crew: 'Straw Hat Pirates', devil_fruit: 'Hito Hito no Mi' },
    { name: 'Nico Robin', crew: 'Straw Hat Pirates', devil_fruit: 'Hana Hana no Mi' },
    { name: 'Franky', crew: 'Straw Hat Pirates', devil_fruit: null },
    { name: 'Brook', crew: 'Straw Hat Pirates', devil_fruit: 'Yomi Yomi no Mi' },
    { name: 'Jinbe', crew: 'Straw Hat Pirates', devil_fruit: null },
    { name: 'Shanks', crew: 'Red Hair Pirates', devil_fruit: null },
    { name: 'Trafalgar Law', crew: 'Heart Pirates', devil_fruit: 'Ope Ope no Mi' },
    { name: 'Eustass Kid', crew: 'Kid Pirates', devil_fruit: 'Jiki Jiki no Mi' },
    { name: 'Portgas D. Ace', crew: 'Whitebeard Pirates', devil_fruit: 'Mera Mera no Mi' },
    { name: 'Sabo', crew: 'Revolutionary Army', devil_fruit: 'Mera Mera no Mi' },
    { name: 'Buggy', crew: 'Buggy Pirates', devil_fruit: 'Bara Bara no Mi' },
    { name: 'Kaido', crew: 'Beast Pirates', devil_fruit: 'Uo Uo no Mi' },
    { name: 'Big Mom', crew: 'Big Mom Pirates', devil_fruit: 'Soru Soru no Mi' },
    { name: 'Blackbeard', crew: 'Blackbeard Pirates', devil_fruit: 'Yami Yami no Mi' },
    { name: 'Boa Hancock', crew: 'Kuja Pirates', devil_fruit: 'Mero Mero no Mi' }
  ];
  
  let updated = 0;
  updates.forEach(update => {
    db.query(
      'UPDATE characters SET crew = ?, devil_fruit = ? WHERE name LIKE ?',
      [update.crew, update.devil_fruit, `%${update.name}%`],
      (err, result) => {
        if (err) {
          console.error(`Error updating ${update.name}:`, err);
        } else {
          console.log(`✓ Updated ${update.name} with crew and devil fruit info`);
        }
        
        updated++;
        if (updated === updates.length) {
          console.log('\n🎉 All character data updated!');
          console.log('🌐 Your app now has full crew and devil fruit filtering!');
          db.end();
        }
      }
    );
  });
}
