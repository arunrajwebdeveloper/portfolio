const blogData = {
  blog: [
    {
      id: "1",
      title:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      thumbnail: "./data/blog-images/dropdown-image.png",
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
        {
          title: "React functional component",
          description: "Simple react component",
          code: {
            language: "jsx",
            content: `import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
          },
          image: "",
        },
      ],

      tags: ["Html", "Css", "Javascript", "Jsx", "Hook"],
    },
    {
      id: "2",
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
