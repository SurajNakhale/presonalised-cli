# ✅ Todo CLI App

A simple Node.js command-line tool to manage your daily tasks.

---

## 🚀 Getting Started

### 📦 Installation

```bash
git clone https://github.com/YourUsername/todocli.git
cd todocli
npm install
```

(Optional: Make it globally accessible)

```bash
npm link
```

---

## 🧑‍💻 Usage

```bash
node index.js [command] [options]
```

To see help:

```bash
node index.js -h
```

---

## 📌 Commands

### ➕ `add <todo_title> <time>`

Adds a new task to your todo list.

```bash
node index.js add "complete freecodecamp module" 10:00
```

**Output:**
```
todos added successfully
```

---

### ❌ `remove <todo_title>`

Removes a todo by its title.

```bash
node index.js remove "complete freecodecamp module"
```

**Output:**
```
todo Removed successfully
```

or

```
todo not found
```

---

### ✅ `mark <todo_title>`

Marks a task as completed.

```bash
node index.js mark "complete freecodecamp module"
```

**Output:**
```
Marked as done!
```

---

## 💡 Help

To view help for a specific command:

```bash
node index.js help <command>
```

Example:

```bash
node index.js help add
```

---

## 📁 Project Structure

```
todocli/
│
├── index.js          # Main CLI script
├── todos.json        # File where todos are stored
├── package.json
```

---

## 🛠️ Built With

- Node.js
- Commander.js
- JSON for simple storage

---

## 📄 License

MIT License

