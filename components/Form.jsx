import React from "react";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full flex-start flex-col max-w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type}</span> Post
      </h1>
      <p className="text-left max-w-md desc">
        {type} and share amazing thoughts with the world , let the words flow
        in.
      </p>
      <form
        onSubmit={handleSubmit}
        className=" mt-10 w-full max-w-2xl gap-7 glassmorphism flex-col"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Title
          </span>
          <textarea
            value={post.post}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="write here"
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Description
          </span>
          <textarea
            value={post.post}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            placeholder="write here"
            className="form_textarea"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
            {submitting ? `${type}` : type}
          </button>

        </div>
      </form>
    </section>
  );
};

export default Form;
