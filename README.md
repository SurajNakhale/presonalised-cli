# 📘 Personalised CLI - `counter`

A simple Node.js command-line tool to perform file-based operations like counting **words**, **lines**, and **characters** in a text file.

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/SurajNakhale/presonalised-cli.git
cd presonalised-cli
```

Install dependencies:

```bash
npm install
```

(Optional) Link the CLI globally:

```bash
npm link
```

---

## 🚀 Usage

```bash
counter [options] [command]
```

**Description**: CLI to do file-based tasks.

---

## 🔧 Options

| Option            | Description                   |
|-------------------|-------------------------------|
| `-V`, `--version` | Output the version number      |
| `-h`, `--help`    | Display help for command       |

---

## 📌 Commands

### 🔹 `count-words <file>`

Counts the number of **words** in the given file.

```bash
counter count-words path/to/file.txt
```

---

### 🔹 `count-lines <file>`

Counts the number of **lines** in the given file.

```bash
counter count-lines path/to/file.txt
```

---

### 🔹 `count-character <file>`

Counts the number of **characters** in the given file.

```bash
counter count-character path/to/file.txt
```

> Note: This includes spaces and newline characters.

---

### 🔹 `help [command]`

Displays help for a specific command.

```bash
counter help count-words
```

---

## 📋 Example Output

```bash
$ counter count-words file.txt
Word count: 5

$ counter count-lines file.txt
Line count: 1

$ counter count-character file.txt
Character count: 20
```

---

## 🧰 Built With

- Node.js
- [commander](https://www.npmjs.com/package/commander)

---

## 📄 License

This project is licensed under the MIT License.

---
