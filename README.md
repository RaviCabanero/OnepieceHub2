# One Piece Character Search App 🏴‍☠️

A full-stack web application for searching One Piece characters with their bounties and images.

## Features

- 🔍 **Character Search**: Search for One Piece characters by name
- 🖼️ **Character Images**: High-quality character images from One Piece Wiki
- 💰 **Bounty Information**: View current bounties for each character
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **One Piece Theme**: Orange and red color scheme matching the series

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL (Azure Database for MySQL)
- **Styling**: Custom CSS with One Piece theme

## Screenshots

![One Piece Search App](https://via.placeholder.com/600x400/e67e22/ffffff?text=One+Piece+Search+App)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/onepiece-nodejs-app.git
cd onepiece-nodejs-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up your database connection in `server.js`:
```javascript
const db = mysql.createConnection({
  host: 'your-database-host',
  user: 'your-username',
  password: 'your-password',
  database: 'one_piece_db'
});
```

4. Create the database and table:
```sql
CREATE DATABASE one_piece_db;
USE one_piece_db;

CREATE TABLE characters (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  bounty VARCHAR(50),
  image_url TEXT
);
```

5. Start the server:
```bash
npm start
```

6. Open your browser and visit: `http://localhost:3000`

## Usage

1. Enter a character name in the search box
2. Press Enter or click the Search button
3. View character information including bounty and image
4. Search supports partial matches (e.g., "Luffy" will find "Monkey D. Luffy")

## Characters Database

The app includes 20+ One Piece characters with their:
- Full names
- Current bounties
- High-quality character images
- Additional information

### Featured Characters
- Monkey D. Luffy
- Roronoa Zoro
- Nami
- Sanji
- Tony Tony Chopper
- Nico Robin
- Franky
- Brook
- Jinbe
- Trafalgar Law
- Portgas D. Ace
- And many more!

## API Endpoints

- `GET /` - Serves the main application
- `GET /search?q=<query>` - Search for characters by name

## File Structure

```
onepiece-nodejs-app/
├── server.js              # Express server and API routes
├── index.html             # Frontend application
├── package.json           # Dependencies and scripts
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Character images from [One Piece Wiki](https://onepiece.fandom.com/)
- Inspired by the amazing One Piece series by Eiichiro Oda
- Built with love for the Straw Hat Pirates! 🏴‍☠️

## Live Demo

Visit the live application: [One Piece Character Search](http://localhost:3000)

---

*"I'm gonna be the King of the Pirates!"* - Monkey D. Luffy
