const GetInTouch = () => {
  return (
    <div className="flex flex-col gap-8">
      <input type="email" placeholder="Your email" className="input w-full" />
      <textarea
        className="textarea w-full"
        placeholder="Your message..."
      ></textarea>
      <button className="btn btn-outline">Send</button>
    </div>
  );
};

export default GetInTouch;
