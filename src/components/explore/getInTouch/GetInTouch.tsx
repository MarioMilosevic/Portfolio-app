import { useForm, SubmitHandler } from "react-hook-form";
import { useRef } from "react";

type Inputs = {
  email: string;
  message: string;
};

const GetInTouch = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const form = useRef<HTMLFormElement | null>(null);

  return (
    <form
      action="mailto:mariomilosevic887@gmail.com"
      method="post"
      encType="text/plain"
      className="flex flex-col"
      id="footerForm"
      ref={form}
    >
      <div>
        <input
          className="input validator w-full"
          type="email"
          required
          placeholder="Your Email"
          id="email"
          autoComplete="email"
          {...register("email")}
        />
        <div className="validator-hint">Enter valid email address</div>
      </div>
      <textarea
        id="content"
        className="textarea w-full mt-2 mb-8"
        placeholder="Your message..."
        {...register("message")}
        required
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
