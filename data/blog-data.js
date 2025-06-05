const blogData = {
  blog: [
    {
      id: "1",
      title: "Pick, Omit, and Partial in Typescript",
      description:
        "In TypeScript, utility types like Pick, Omit, and Partial are used to transform existing types. Here's a breakdown and examples of each, including how you can combine them (Pick + Partial, Omit + Partial, etc.).",
      thumbnail: "./data/blog-images/TypeScript-Banner.jpg",
      body: [
        {
          title: "1. Pick<Type, Keys>",
          description:
            "Creates a type by picking a set of properties from another type.",
          code: {
            language: "typescript",
            content: `type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

type UserNameAndEmail = Pick<User, 'name' | 'email'>;
// Result:
// { name: string; email: string; }`,
          },
          image: "",
        },
        {
          title: "2. Omit<Type, Keys>",
          description:
            "Creates a type by omitting a set of properties from another type.",
          code: {
            language: "typescript",
            content: `type UserWithoutEmail = Omit<User, 'email'>;
// Result:
// { id: number; name: string; age: number; }`,
          },
          image: "",
        },
        {
          title: "3. Partial<Type>",
          description: "Creates a type with all properties optional.",
          code: {
            language: "typescript",
            content: `type PartialUser = Partial<User>;
// Result:
// { id?: number; name?: string; email?: string; age?: number; }`,
          },
          image: "",
        },
      ],
      tags: ["Typescript"],
    },
    {
      id: "2",
      title: "Understanding || and && in JavaScript",
      description:
        "JavaScript provides logical operators like || (OR) and && (AND) to perform short-circuit evaluation. These are not just boolean logic operators — they are expression evaluators, which return values based on operand truthiness.",
      thumbnail: "./data/blog-images/js.png",
      body: [
        {
          title: "|| (Logical OR)",
          description:
            "Returns the first truthy operand or the last one if all are falsy. Falsy values: false, 0, '', null, undefined, NaN. Everything else is truthy",
          code: {
            language: "javascript",
            content: `function greet(userName) {
  const name = userName || "Anonymous";
  console.log('Hello: ' ${name});
}
greet("");       // Hello, Anonymous
greet("Alice");  // Hello, Alice`,
          },
          image: "",
        },
        {
          title: "&& (Logical AND)",
          description:
            "Returns the first falsy operand, or the last one if all are truthy.",
          code: {
            language: "javascript",
            content: `const isLoggedIn = true;
isLoggedIn && console.log("User is logged in");
// Prints only if isLoggedIn is truthy`,
          },
          image: "",
        },
        {
          title: "Pro Tips",
          description:
            "Prefer ?? (nullish coalescing) when you want to treat only null and undefined as defaults:",
          code: {
            language: "javascript",
            content: `const title = "" || "Default";   // "Default"
const safeTitle = "" ?? "Default"; // ""`,
          },
          image: "",
        },
        {
          title: "Conclusion with Real-World Example",
          description:
            "Use || for defaults or fallback values. Use && for conditional logic or safe evaluations. They return values, not strictly true or false. Understand short-circuiting to write cleaner and more efficient code.",
          code: {
            language: "javascript",
            content: `function getConfig(userConfig) {
  return {
    theme: userConfig.theme || "light",
    lang: userConfig.lang || "en",
    showSidebar: userConfig.showSidebar ?? true // using nullish
  };
}

const config = getConfig({ theme: "", lang: "fr" });
console.log(config); 
// { theme: "light", lang: "fr", showSidebar: true }`,
          },
          image: "",
        },
      ],

      tags: ["Javascript"],
    },
    {
      id: "3",
      title:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
      thumbnail: "./data/blog-images/code-snapshot.png",
      body: [
        {
          title: "HTML",
          description: "This is html",
          code: {
            language: "markup",
            content: `<div class="container">
  <h1>Hello, World!</h1>
</div>`,
          },
          image: "",
        },
        {
          title: "CSS",
          description: "Hiii",
          code: {
            language: "css",
            content: `.container {
  padding: 20px;
  background-color: #f0f0f0;
  color: #333;
}`,
          },
          image: "",
        },
        {
          title: "JavaScript",
          description: "hellaaa",
          code: {
            language: "javascript",
            content: `function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet("VS Code");`,
          },
          image: "",
        },
      ],
      tags: ["React", "Ui/Ux", "Typescript", "SocketIo"],
    },
  ],
};
