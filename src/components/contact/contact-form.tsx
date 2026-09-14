export default function ContactForm() {
  return (
    <form>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="text-foreground" htmlFor="name">
            Full Name
          </label>
          <input
            className="w-full mt-1.25 p-4 border bg-green-light-a border-green-a text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="text-foreground" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full mt-1.25 p-4 border bg-green-light-a border-green-a text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="text-foreground" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            className="w-full mt-1.25 p-4 border bg-green-light-a border-green-a text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="text-foreground" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            placeholder="Enter your subject"
            className="w-full mt-1.25 p-4 border bg-green-light-a border-green-a text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2 h-40">
          <label className="text-foreground" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="How can I help?"
            className="h-full w-full mt-1.25 p-4 border bg-green-light-a border-green-a text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2 mt-6 ">
          <label
            htmlFor="consent"
            className="inline-flex items-start leading-4.5 gap-2.5 cursor-pointer text-[13px] select-none"
          >
            <input
              type="checkbox"
              id="consent"
              name="consent"
              value="declined"
              className="appearance-none absoulute opacity-0 cursor-pointer peer sr-only"
              required
            />
            <span className="w-3 h-3 mt-1 grow-0 shrink-0 border border-secondary-text inline-block transition-all duration-200 peer-hover:border-primary peer-checked:bg-primary peer-checked:border-primary" />
            I consent to Daniel contacting me using the contact details I have
            provided on this form for business purpose only.
          </label>
        </div>

        <button
          type="submit"
          className="group flex gap-10 items-center w-fit font-semibold hover:bg-green-light-a active:bg-green-light-a px-4 py-3 border border-primary hover:border-green-light-b active:border-green-light-b bg-primary text-black hover:text-primary active:text-primary stroke-black hover:stroke-primary active:stroke-primary"
        >
          SEND A MESSAGE
        </button>
      </div>
    </form>
  );
}
