# ToDo App using React and IndexDB with Tailwind

This is a minimalist ToDo app built using React and IndexDB for offline storage, with Tailwind for styling. It features a dark mode toggle, allows users to add, edit, and delete tasks, and also includes the ability to reorder tasks and text filters.

![ToDo App Preview](https://media.giphy.com/media/dUUim1vc3d3MNS6vF5/giphy.gif)
![ToDo App Preview](https://media.giphy.com/media/yVC8MohNrPNUt1BZDq/giphy.gif)

## Features

- Add, edit, and delete tasks
- Reorder tasks by dragging and dropping
- Create custom filters based on task name
- Dark mode toggle
- Offline usage with IndexDB

## Tech Stack

- React
- IndexDB
- Tailwind

## Getting Started

To get started with the app, follow these steps:

1. Clone the repo: `git clone https://github.com/maziyargh83/taskApp.git`
2. Install dependencies: `npm install`
3. Run the app: `npm start`
4. Open `http://localhost:5173` in your browser

## Usage

- To add a new task, enter a task name in the input field and click the "Add Task" button.
- To edit a task, click the pencil icon next to the task name. Edit the task name in the input field that appears, then click the "Save" button.
- To delete a task, click the trash can icon next to the task name.
- To mark a task as completed, click the check mark icon next to the task name.
- To reorder tasks, drag and drop the task card to the desired position.
- To create a custom filter, click on the search item on sidebar and write title.
- To toggle dark mode, click the sun/moon icon in the top right corner.

## Offline Usage

This app uses IndexDB for offline storage. Tasks are saved to the database as they are added or edited, and are retrieved from the database when the app is loaded or reloaded. This allows the app to be used offline and for tasks to persist between sessions.

## Screenshots

The app features two modes, light and dark. Here are some screenshots of each mode:

### Light Mode

![Light Mode](/screenshots/lightmode.png)

### Dark Mode

![Dark Mode](/screenshots/darkmode.png)

## Preview

You can see a live preview of the app [here](https://task-app-lemon.vercel.app/).

## Reference

The design for this ToDo app was inspired by this Dribbble shot by [Rayfan Tio Saputro](https://dribbble.com/rayfantio):
![Reference from Dribbble](https://cdn.dribbble.com/users/5084254/screenshots/19318949/media/bc4cc389fbe5a81106f07c63abc1e3b6.png)

## Conclusion

This ToDo app is a simple yet powerful tool that demonstrates how to build a functional web application using React and IndexDB, with the added benefit of offline usage and a sleek design. Thank you for checking it out!
