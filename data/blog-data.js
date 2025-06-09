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
      title: "Efficient DOM Handling with Event Delegation in JavaScript",
      description:
        "Event delegation is a powerful JavaScript pattern that allows you to handle events efficiently by assigning a single event listener to a parent element rather than multiple listeners to individual child elements. This technique takes advantage of event bubbling in the DOM, where events propagate from the target element up through its ancestors. By using event delegation, you not only improve performance but also simplify the handling of dynamic content, as newly added child elements are automatically covered by the existing event listener. In this blog post, we demonstrate a clean and minimal example using 'div' elements, showing how a single listener on a container can manage interactions for all its child boxes—whether they exist at page load or are added later dynamically.",
      thumbnail: "./data/blog-images/event-delegation.png",
      body: [
        {
          title: "HTML",
          description: "Example: Event Delegation with 'div' Elements",
          code: {
            language: "markup",
            content: `<div id="container">
      <div class="box">Box 1</div>
      <div class="box">Box 2</div>
      <div class="box">Box 3</div>
    </div>

    <script>
      const container = document.getElementById('container');

      container.addEventListener('click', function(event) {
        // Check if a div with class "box" was clicked
        if (event.target.classList.contains('box')) {
          alert('You clicked: ' + event.target.textContent);
        }
      });
    </script>
    `,
          },
          image: "",
        },
      ],
      tags: ["JavaScript", "Html"],
    },
  ],
};
