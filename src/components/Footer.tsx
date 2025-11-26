export default function Footer() {
  return (
    <footer
      className="relative h-[800px] bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[800px] w-full flex">
        <h2 className="m-auto text-9xl text-white">Thank you</h2>
      </div>
    </footer>
  );
}
