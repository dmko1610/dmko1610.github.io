import Title from "./Title";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center mb-10 mx-auto">
      <form
        action="https://getform.io/f/a4ae8ff1-2adf-4dd7-8f96-2de82dc21bf6"
        method="POST"
        className="flex flex-col w-full md:w-7/12"
      >
        <Title>Contact</Title>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 bg-transparent border-2 rounded-md focus:outline-none" />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="p-2 my-2 bg-transparent border-2 rounded-md focus:outline-none" />
        <textarea
          name="message"
          placeholder="Message"
          rows={10}
          className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none" />
        <button
          type="submit"
          className="text-center inline-block px-8 py-3 w-max text-base rounded-md bg-gradient-to-r from-yellow-500 to-pink-700 drop-shadow-md text-white hover:stroke-white">
          Work with me
        </button>
      </form>
    </div>
  );
}