import img1 from "../../assets/img_state/state1.jpg";
const Contact = () => {
  return (
    <>
      <div className="">
        <img src={img1} className="object-cover h-96 w-full mx-auto " alt="" />
      </div>
      <section className="body-font relative bg-white text-gray-400">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium text-black sm:text-3xl">Contact Us</h1>
            <p className="mx-auto text-black leading-relaxed lg:w-2/3">
            Whether you're looking to buy or rent, our team is here to help. Contact us with any questions, feedback, or to schedule a consultation. We look forward to working with you.
            </p>
          </div>
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="peer w-full rounded border border-gray-700 bg-white bg-opacity-40 py-1 px-3 text-base leading-8  placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500  focus:ring-2 focus:ring-indigo-900"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 "
                  >
                    Name
                  </label>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="peer w-full rounded border border-gray-700 bg-white bg-opacity-40 py-1 px-3 text-base leading-8 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500  focus:ring-2 focus:ring-indigo-900"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    className="peer h-32 w-full resize-none rounded border border-gray-700 bg-white bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500  focus:ring-2 focus:ring-indigo-900"
                    placeholder="Message"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 "
                  >
                    Message
                  </label>
                </div>
              </div>
              <div className="w-full p-2">
                <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                  Send
                </button>
              </div>
              <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
                <a className="text-black" href="#">i@email.com</a>
                <p className="my-5 leading-normal">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    </>
  );
};

export default Contact;
