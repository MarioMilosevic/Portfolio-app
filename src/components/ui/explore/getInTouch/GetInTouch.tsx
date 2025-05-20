const GetInTouch = () => {
  return (
    <div className="flex flex-col gap-8">
      <input type="email" placeholder="Your email" className="input w-full" />
      <textarea
        className="textarea w-full"
        placeholder="Your message..."
      ></textarea>
      <button className="btn btn-outline hover:border hover:border-slate-100">
        Send
      </button>
    </div>
  );
};

export default GetInTouch;
