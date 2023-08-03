# Slot Machine App

Welcome to the Slot Machine App! This is a simple React application that simulates a slot machine with emojis. When you click the "Onclick" button, the emojis in the slots will change randomly. If all three emojis match, you get a "Matched" message; otherwise, you get a "Not Matched" message.

## How to Run the App

1. Clone the repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Open a terminal and navigate to the project's root directory.
4. Run `npm install` to install the required dependencies.
5. Run `npm start` to start the development server.
6. Open your web browser and go to `http://localhost:3000` to play with the Slot Machine App.

## How to Play

- The Slot Machine has three slots, each displaying a random emoji from the provided set of emojis.
- To play the game, click the "Onclick" button.
- The emojis in the slots will change randomly.
- If all three emojis in the slots match, you will see a "Matched" message, indicating that you've won!
- If the emojis in the slots do not match, you will see a "Not Matched" message.

## Components

1. `App.js`: This is the main component that renders the Slot Machine App. It manages the state of the emojis displayed in the slots and provides a button to trigger the random emoji changes.

2. `ChangeEmoji.js`: This module contains an array of emojis that will be used to randomly populate the slots.

3. `Icon.js`: This component represents the individual slot in the Slot Machine. It receives the emoji values for each slot as props and displays them. If the emojis in all three slots match, it displays a "Matched" message; otherwise, it shows a "Not Matched" message.

## Customization

- If you want to customize the emojis used in the game, you can modify the `Emoji` array in `ChangeEmoji.js` with your desired emojis.

## Contributing

If you find any issues with the app or have suggestions for improvement, feel free to create a new issue or submit a pull request. We welcome contributions from the community!

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as you like.

## Acknowledgments

- The Slot Machine App was created as a fun and educational project using React.
- The emojis used in the game are provided from the `Emoji` array in `ChangeEmoji.js`.

Have fun playing with the Slot Machine App! If you have any questions or need further assistance, feel free to reach out to us. Happy spinning!
