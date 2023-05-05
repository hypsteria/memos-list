# Memos List App

[![Demo](https://img.shields.io/badge/Demo-View%20App-blue)](https://hypsteria.github.io/memos-list/)

Memos List App is a simple application for creating and storing memos. You can create memos using text input or by utilizing SpeechRecognition. It is available at [https://hypsteria.github.io/memos-list/](https://hypsteria.github.io/memos-list/).

## Features

- Create and edit memos using text input or SpeechRecognition
- Store memos using IndexedDB
- Delete memos

## Technologies

- React
- Typescript
- redux-toolkit
- IndexedDB
- SpeechRecognition
- Ant Design

## App Hierarchy

The app is organized into the following folders:

- `components`: Contains React components for UI elements
- `hooks`: Contains custom hooks for managing component state and logic
- `models`: Contains data models for the app, such as memo object
- `store`: Contains the Redux store configuration and slices for managing application state
- `utils`: Contains utility for communicating with the database

## Implementation Details

- State management: The app uses Redux Toolkit for managing the list of memos in the application state.
- Database: IndexedDB is used as a database for storing memo data.
- Speech Recognition: The Web Speech API is utilized for SpeechRecognition functionality.
- Form: The app uses a single form for creating and editing memos, with its state and behavior determined by the passed props.


## Getting Started

To get started with the Memos List App, clone the repository and follow the installation steps below.

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (comes bundled with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/hypsteria/memos-list.git
```

Navigate to the project directory:
```bash
cd memos-list
```
Install dependencies:
```bash
npm ci
```
Start the development server:
```bash
npm start
```
The app should now be running on http://localhost:3000/.

### Testing

The Memos List App includes a few tests. To run the tests, simply execute the following command:

```bash
npm test
```
