export const Schema = {
  title: "マルチステップフォーム",
  type: "object",
  properties: {
    firstName: { type: "string", title: "名" },
    lastName: { type: "string", title: "姓" },
    email: { type: "string", title: "メールアドレス", format: "email" },
    age: { type: "number", title: "年齢" }
  },
  required: ["firstName", "lastName", "email", "age"]
};

export const UISchema = {
  firstName: { "ui:autofocus": true },
  email: { "ui:widget": "email" },
  age: { "ui:widget": "updown" }
};

