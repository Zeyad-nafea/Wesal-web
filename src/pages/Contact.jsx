import React, { useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Mail, Linkedin, Facebook, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 dark:text-dark-foreground text-light-foreground" />,
    title: "Email Us",
    details: ["wesalorganization@gmail.com"],
    description: "Send us an email anytime",
  },
  {
    icon: <Linkedin className="w-6 h-6 dark:text-dark-foreground text-light-foreground" />,
    title: "LinkedIn",
    details: ["Wesal - وِصَـال"],
    description: "Connect with us on LinkedIn",
  },
  {
    icon: <Facebook className="w-6 h-6 dark:text-dark-foreground text-light-foreground" />,
    title: "Facebook",
    details: ["وِصَـال - Wesal"],
    description: "Follow us on Facebook",
  },
];

const faqItems = [
  {
    question: "How do I enroll in a course?",
    answer: "Browse our courses page, select the course you want, and click 'Enroll Now' to get started.",
  },
  {
    question: "Are the workshops online or in-person?",
    answer: "We offer both online and in-person workshops. Check the workshop details for specific information.",
  },
  {
    question: "How do I apply for internships?",
    answer: "Visit our Internships page, find the position you're interested in, and submit your application online.",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-light-hero to-light-hero-end dark:from-dark-hero dark:to-dark-hero-end pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white leading-tight">
              Get in <span className="text-light-accent">Touch</span>
            </h1>
            <p className="text-xl text-light-cream/90">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 -mt-12 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="mt-6 bg-light-card dark:bg-dark-card rounded-xl border dark:border-dark-border hover:border-light-accent/90 dark:hover:border-light-accent/50"
              >
                <CardBody className="flex flex-col items-center text-center">
                  <section className="w-14 h-14 rounded-full bg-light-ring/80 flex items-center justify-center">
                    {info.icon}
                  </section>
                  <Typography variant="h5" className="mb-2 mt-3 text-light-accent-foreground dark:text-dark-destructive-foreground">
                    {info.title}
                  </Typography>
                  <Typography className="mb-1 mt-1 text-sm">{info.details}</Typography>
                  <Typography>{info.description}</Typography>
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-light-card dark:bg-dark-card rounded-xl p-8 border border-light-border dark:border-dark-border">
              <div className="mb-8">
                <h2 className="text-3xl text-light-foreground dark:text-dark-foreground mb-3">
                  Send us a Message
                </h2>
                <p className="text-light-muted-foreground dark:text-dark-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-light-foreground dark:text-dark-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-light-input dark:bg-dark-input rounded-lg text-light-foreground dark:text-dark-foreground placeholder:text-light-muted-foreground dark:placeholder:text-dark-muted-foreground focus:outline-none focus:border-light-accent border border-light-border dark:border-dark-border transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-light-foreground dark:text-dark-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-light-input dark:bg-dark-input rounded-lg text-light-foreground dark:text-dark-foreground placeholder:text-light-muted-foreground dark:placeholder:text-dark-muted-foreground focus:outline-none focus:border-light-accent border border-light-border dark:border-dark-border transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm text-light-foreground dark:text-dark-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-light-input dark:bg-dark-input rounded-lg border border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-accent"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Course Information">Course Information</option>
                    <option value="Workshop Questions">Workshop Questions</option>
                    <option value="Internship Applications">Internship Applications</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Billing & Payments">Billing & Payments</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-light-foreground dark:text-dark-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-light-input dark:bg-dark-input text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-accent resize-none"
                  />
                </div>
                {status === "success" && (
                  <p className="text-green-500 text-center">Message sent successfully!</p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-center">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-light-accent text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl text-light-foreground dark:text-dark-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-light-card dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border hover:border-light-accent/90 dark:hover:border-light-accent/50 transition-colors"
                  >
                    <h3 className="text-light-foreground dark:text-dark-foreground font-semibold text-lg mb-2">
                      {item.question}
                    </h3>
                    <p className="text-light-muted-foreground dark:text-dark-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;