import validator from 'validator';
import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import toast from 'react-hot-toast';
import axios from 'axios';
import SectionTitle from '../SectionTitle';
import Paragraph from '../Paragraph';
import useForm from '../../utils/useForm';
import { ContactSectionStyles } from './ContactSection.styles';

export default function ContactSection() {
  const formRef = useRef(null);
  const { values, updateValue, reset } = useForm({
    name: '',
    email: '',
    subject: '',
    project_type: '',
    estimated_budget: 500,
    details: '',
  });
  const {
    values: honeypotValues,
    updateValue: updateHoneypotValue,
    reset: honeypotReset,
  } = useForm({
    name: '',
    email: '',
  });

  const handleFocus = () => {
    const fieldsGroup = formRef.current.querySelectorAll('.form-group');
    fieldsGroup.forEach((field) => {
      const input =
        field.querySelector('input') ||
        field.querySelector('select') ||
        field.querySelector('textarea') ||
        null;
      if (input !== null) {
        input.addEventListener('focus', () => {
          field.classList.add('focused');
        });
        input.addEventListener('blur', () => {
          field.classList.remove('focused');
        });
      }
    });
  };

  useEffect(() => {
    handleFocus();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypotValues.name || honeypotValues.email) {
      toast.error('Please fill out the form correctly');
      reset();
      honeypotReset();
      return;
    }

    // get the data
    const data = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      details: values.details,
    };
    if (values.subject === 'hire') {
      data.project_type = values.project_type;
      data.estimated_budget = values.estimated_budget;
    }
    const dataArr = Object.entries(data);

    // check if all fields are filled correctly
    const emptyFields = dataArr.filter(([, value]) => {
      const trimmedValue = value.toString().trim();
      return (
        trimmedValue === '' || trimmedValue === null || trimmedValue === ' '
      );
    });
    if (emptyFields.length > 0) {
      toast.error(
        `${emptyFields.map((item) => `${item[0]}`).join(', ')} can't be empty`
      );
      honeypotReset();
      return;
    }
    // check if email is valid
    if (values.email) {
      if (validator.isEmail(values.email) === false) {
        toast.error('Please enter a valid email');
        return;
      }
    }

    // finally send the form
    const dataObj = Object.fromEntries(dataArr);
    const baseUrl = process.env.GATSBY_EMAIL_URL;
    try {
      toast.promise(axios.post(baseUrl, dataObj), {
        loading: 'Sending...',
        success: 'Your message has been sent!',
        error: 'Something went wrong, please try again later',
      });
    } catch (err) {
      console.log(err);
    } finally {
      reset();
      honeypotReset();
    }
  };

  return (
    <ContactSectionStyles name="contact" id="contact">
      <div className="container">
        <SectionTitle>Hire & Inquiry</SectionTitle>
        <div className="contact__subtitle">
          <Paragraph>Drop us a text we would love to hear from you</Paragraph>
        </div>
        <div className="form__wrapper">
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="form-group name__group">
              <label htmlFor="Name">
                Your Full Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={values.name}
                  onChange={updateValue}
                />
              </label>
            </div>
            <div className="form-group email__group">
              <label htmlFor="Email">
                Your Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={values.email}
                  onChange={updateValue}
                />
              </label>
            </div>
            <div className="form-group subject__group">
              <label htmlFor="subject">
                Subject
                <div className="customSelect">
                  <select
                    name="subject"
                    id="subject"
                    required
                    placeholder="choose"
                    value={values.subject}
                    onChange={updateValue}
                  >
                    <option value="" disabled>
                      Choose Subject
                    </option>
                    <option value="hire">Hire</option>
                    <option value="inquiry">Inquiry</option>
                    <option value="message">Message</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="custom-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </label>
            </div>
            <CSSTransition
              in={values.subject === 'hire'}
              classNames="fade"
              timeout={500}
              unmountOnExit
            >
              <div className="form-group type__group">
                <label htmlFor="projectType">
                  Project Type
                  <div className="customSelect">
                    <select
                      type="text"
                      id="projectType"
                      name="project_type"
                      required
                      value={values.project_type}
                      onChange={updateValue}
                    >
                      <option disabled value="">
                        Choose Type
                      </option>
                      <option value="redesign">Re-Design</option>
                      <option value="new_webSite">New Website</option>
                      <option value="web_app">Web App</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="custom-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </label>
              </div>
            </CSSTransition>
            <CSSTransition
              in={values.subject === 'hire'}
              classNames="fade"
              timeout={500}
              unmountOnExit
            >
              <div className="form-group budget__group">
                <label htmlFor="projectBudget">
                  Estimate Budget
                  <br />
                  <span className="budget__number">
                    {new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                    }).format(values.estimated_budget)}
                  </span>
                  <input
                    type="range"
                    id="projectBudget"
                    name="estimated_budget"
                    min="500"
                    max="50500"
                    step="1000"
                    value={values.estimated_budget}
                    onChange={updateValue}
                  />
                </label>
              </div>
            </CSSTransition>
            {/* <!-- H o n e y p o t --> */}
            <label className="shadow" htmlFor="name">
              <input
                className="shadow"
                autoComplete="off"
                type="text"
                id="name"
                name="name"
                placeholder="Your name here"
                value={honeypotValues.name}
                onChange={updateHoneypotValue}
              />
            </label>
            <label className="shadow" htmlFor="email">
              <input
                className="shadow"
                autoComplete="off"
                type="text"
                id="email"
                name="email"
                placeholder="Your e-mail here"
                value={honeypotValues.email}
                onChange={updateHoneypotValue}
              />
            </label>
            {/* <!-- H o n e y p o t --> */}
            <div className="form-group message__group">
              <label htmlFor="message">
                Details
                <textarea
                  name="details"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                  value={values.details}
                  onChange={updateValue}
                />
              </label>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </ContactSectionStyles>
  );
}
