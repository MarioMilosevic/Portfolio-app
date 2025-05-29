import { useRef } from "react";
import Swal from "sweetalert2";

const GetInTouch = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "0dbc61d6-a278-417d-ab7a-67cb3bd5ef72");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success",
      });
      form.current?.reset();
    }
  };

  return (
    <form
      className="flex flex-col"
      id="footerForm"
      ref={form}
      onSubmit={onSubmit}
    >
      <div>
        <input
          className="input validator w-full"
          type="email"
          required
          placeholder="Your Email"
          id="email"
          autoComplete="email"
          name="email"
        />
        <div className="validator-hint">Enter valid email address</div>
      </div>
      <textarea
        id="content"
        className="textarea w-full mt-2 mb-8"
        placeholder="Your message..."
        required
        name="message"
      ></textarea>
      <button
        className="btn btn-outline hover:border hover:border-slate-100"
        type="submit"
        value="Submit"
      >
        Send
      </button>
    </form>
  );
};

export default GetInTouch;
