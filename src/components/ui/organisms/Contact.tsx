import React, { useState } from "react";
import { Wrapper } from "../atoms/Wrapper";
import { formFields } from "../../data/data";
import type { Errors, FormData, FieldName } from "../../data/data";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmitFormspree] = useForm("xwpbzlze");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const picture = "form1.jpg";

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) newErrors.name = "Imię jest wymagane";
    if (!formData.email.trim()) {
      newErrors.email = "Email jest wymagany";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Niepoprawny format email";
    }

    if (!formData.subject.trim()) newErrors.subject = "Temat jest wymagany";
    if (!formData.message.trim()) newErrors.message = "Wiadomość jest wymagana";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      handleSubmitFormspree(e);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as FieldName]: value,
    }));
  };

  return (
    <section id="kontakt" className="text-center">
      <div
        className="h-[730px] w-full bg-cover bg-fixed bg-top bg-no-repeat md:h-[600px]"
        style={{ backgroundImage: `url(${picture})` }}
      >
        <div className="h-full w-full bg-amber-300/15 px-3 pt-10 backdrop-brightness-50">
          <Wrapper>
            <h2 className="font-LoraCustom text-4xl text-white  md:text-5xl lg:mt-8 lg:text-6xl">
              Umów się na bezpłatną konsultację
            </h2>
            <p className="mt-6 text-sm text-white">
              Proszę wpisać swoje dane kontaktowe, a my skontaktujemy się z
              Państwem w ciągu 1-2 dni roboczych, aby omówić Państwa sprawę.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-12 w-full max-w-[800px] px-8 "
              noValidate
            >
              <div className="mb-4 flex flex-col justify-center gap-3 md:flex-row">
                {formFields.map((field, i) => (
                  <div key={i} className="w-full">
                    <label htmlFor={field.name} className="sr-only">
                      {field.placeholder}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      className={`w-full rounded p-2 border focus:outline-none focus:ring-2 focus:ring-amber-300 ${
                        errors[field.name]
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleChange}
                      aria-invalid={errors[field.name] ? "true" : "false"}
                      aria-describedby={`${field.name}-error`}
                    />
                    {errors[field.name] && (
                      <p
                        id={`${field.name}-error`}
                        className="mt-1 text-sm font-Mulish font-medium text-red-600"
                      >
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Wiadomość..."
                  className={`w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-amber-300 ${
                    errors.message ? "border-[3px] border-red-500" : ""
                  }`}
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby="message-error"
                ></textarea>
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 font-medium text-sm text-red-600"
                  >
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full  rounded border-2  https://github.com/xcinek1337/kancelaria-onepageborder-amber-500 p-2 font-semibold hover:text-gray-200 text-amber-500 transition duration-300 hover:bg-amber-500/50"
                disabled={state.submitting}
              >
                {state.submitting ? "Wysyłanie..." : "Wyślij"}
              </button>
              {state.succeeded && (
                <p className="mt-4 font-bold rounded-md bg-white/30 backdrop-blur p-2 md:p-4 md:text-lg text-green-700 shadow">
                  Dziękujemy! Formularz został wysłany.
                </p>
              )}
            </form>
          </Wrapper>
        </div>
      </div>
    </section>
  );
};
