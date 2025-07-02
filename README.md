# wynn-kit

Essential UI components built with **Tailwind CSS**.
Clean, minimal and ready for modern web interfaces.

## ✨ Features

- Reusable UI elements (buttons, inputs, tooltips, file pickers and more)
- Built-in Tailwind classes and motion support
- Focused on DX and accessibility
- Neutral, production-ready design

---

## 🚀 Installation

```bash
npm i @wynnkit/ui
```

> Make sure your project has the following installed:
>
> - `tailwindcss`

---

## ⚡️ Quick Usage

```tsx
import {
  ButtonUI,
  InputUI,
  SelectUI,
  ToggleUI,
  FileUI,
  CheckBoxUI,
  CheckBoxMultiUI,
  ToolTipUI,
  clsx,
} from "@wynnkit/ui";

export default function Demo() {
  return (
    <div className="space-y-4 p-4">
      <ButtonUI text="Click me" colorSchema="primary" />
      <InputUI name="fullname" label="Full name" />
      <SelectUI
        name="country"
        label="Select a country"
        options={[{ label: "Ecuador", value: "EC" }]}
      />
      <ToggleUI label="Enable notifications" />
      <CheckBoxUI label="Accept terms" />
    </div>
  );
}
```

---

## 📦 Included Components

| Component         | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| `ButtonUI`        | Button with color schema (`schemaColor`) and size (`size`) |
| `InputUI`         | Text input with floating label and validation              |
| `SelectUI`        | Styled select with custom options                          |
| `ToggleUI`        | Switch-style animated button with Motion                   |
| `FileUI`          | Custom file input                                          |
| `CheckBoxUI`      | Modern styled single checkbox                              |
| `CheckBoxMultiUI` | Multi-selection checkbox                                   |
| `ToolTipUI`       | Accessible and elegant tooltip                             |
| `clsx`            | Utility to conditionally concatenate class names           |

---

## 🛠 Environment Requirements

Ensure you have:

- **Tailwind CSS 4 or later**

---

## 📝 License

This package is released under a custom license.

- **Code modification is not allowed.**
- **Credit must be given to the author in production projects.**

[📄 View Full License](./LICENSE)  
[![License](https://img.shields.io/badge/License-Attribution_Required-blue)](LICENSE)

---

## 🤝 Contributions

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'feat: new feature'`
4. Open a Pull Request 🚀

---

## 👤 Author

Made with ❤️ by Bryan López Chavarría — @bryanlch

---

## 🌟 Like this project?

Support it with a ⭐ on the repository and share it if you found it useful. Thank you!
