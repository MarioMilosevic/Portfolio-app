const GetInTouch = () => {
  return (
    <div className="flex flex-col">
      <div>
        <input
          className="input validator w-full"
          type="email"
          required
          placeholder="Your Email"
        />
        <div className="validator-hint">Enter valid email address</div>
      </div>
      <textarea
        className="textarea w-full mt-2 mb-8"
        placeholder="Your message..."
      ></textarea>
      <button className="btn btn-outline hover:border hover:border-slate-100">
        Send
      </button>
    </div>
  );
};

export default GetInTouch;
