"use client";

import { Button, Input, Textarea } from "@heroui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

type Values = {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  country_code: string;
  phone: string;
  message: string;
};

const ContactSchema = Yup.object({
  first_name: Yup.string()
    .trim()
    .max(100, "First name is too long")
    .required("Required"),
  last_name: Yup.string()
    .trim()
    .max(100, "Last name is too long")
    .required("Required"),
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .max(200, "Email is too long")
    .required("Required"),
  company: Yup.string()
    .trim()
    .max(200, "Company is too long")
    .optional()
    .default(""),
  country_code: Yup.string()
    .trim()
    .matches(/^\+?[0-9]{1,4}$/, "Invalid country code")
    .optional()
    .default(""),
  phone: Yup.string()
    .trim()
    .matches(/^[0-9\-()\s]{5,20}$/, "Invalid phone number")
    .optional()
    .default(""),
  message: Yup.string()
    .trim()
    .min(10, "Please provide more details (min 10 characters)")
    .max(4000, "Message is too long")
    .required("Required"),
});

export const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  return (
    <Formik<Values>
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        company: "",
        country_code: "",
        phone: "",
        message: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setStatus("loading");
        try {
          const res = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          const data = await res.json();
          if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
          setStatus("success");
          resetForm();
        } catch (e) {
          console.error(e);
          setStatus("error");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          onSubmit={handleSubmit as any}
          className="flex flex-col gap-4 rounded-[2.5rem] border border-white/10 bg-[#0E0E12] p-6 text-white shadow-[0_20px_55px_-35px_rgba(0,0,0,0.7)] sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="First Name"
              placeholder="First Name"
              variant="flat"
              color="danger"
              name="first_name"
              labelPlacement="outside"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={Boolean(touched.first_name && errors.first_name)}
              errorMessage={
                touched.first_name && errors.first_name ? errors.first_name : ""
              }
              classNames={{
                inputWrapper:
                  "bg-black/60 border border-white/10 !bg-transparent",
                label: "text-white",
                input: "text-white",
              }}
            />
            <Input
              label="Last Name"
              placeholder="Last Name"
              variant="flat"
              name="last_name"
              color="danger"
              labelPlacement="outside"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={Boolean(touched.last_name && errors.last_name)}
              errorMessage={
                touched.last_name && errors.last_name ? errors.last_name : ""
              }
              classNames={{
                inputWrapper:
                  "bg-black/60 border border-white/10 !bg-transparent",
                label: "text-white/60",
                input: "text-white",
              }}
            />
          </div>

          <Input
            label="Email"
            placeholder="Email"
            type="email"
            variant="flat"
            name="email"
            color="danger"
            labelPlacement="outside"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={Boolean(touched.email && errors.email)}
            errorMessage={touched.email && errors.email ? errors.email : ""}
            classNames={{
              inputWrapper:
                "bg-black/60 border border-white/10 !bg-transparent",
              label: "text-white/60",
              input: "text-white",
            }}
          />

          <Input
            label="Company"
            placeholder="Company"
            variant="flat"
            color="danger"
            name="company"
            labelPlacement="outside"
            value={values.company}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={Boolean(touched.company && errors.company)}
            errorMessage={
              touched.company && errors.company ? errors.company : ""
            }
            className="text-white"
            classNames={{
              inputWrapper:
                "bg-black/60 border border-white/10 !bg-transparent",
              label: "text-white/60",
              input: "text-white",
            }}
          />

          <div className="grid gap-4 sm:grid-cols-[8rem_1fr]">
            <Input
              label="Country Code"
              placeholder="+1"
              variant="flat"
              color="danger"
              name="country_code"
              labelPlacement="outside"
              value={values.country_code}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={Boolean(touched.country_code && errors.country_code)}
              errorMessage={
                touched.country_code && errors.country_code
                  ? errors.country_code
                  : ""
              }
              classNames={{
                inputWrapper:
                  "bg-black/60 border border-white/10 !bg-transparent",
                label: "text-white/60",
                input: "text-white",
              }}
            />
            <Input
              label="Phone Number"
              placeholder="Phone Number"
              variant="flat"
              color="danger"
              name="phone"
              labelPlacement="outside"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={Boolean(touched.phone && errors.phone)}
              errorMessage={touched.phone && errors.phone ? errors.phone : ""}
              classNames={{
                inputWrapper:
                  "bg-black/60 border border-white/10 !bg-transparent",
                label: "text-white/60",
                input: "text-white",
              }}
            />
          </div>

          <Textarea
            label="Message"
            placeholder="Tell us briefly about your project..."
            minRows={4}
            variant="flat"
            color="danger"
            name="message"
            labelPlacement="outside"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={Boolean(touched.message && errors.message)}
            errorMessage={
              touched.message && errors.message ? errors.message : ""
            }
            classNames={{
              inputWrapper:
                "bg-black/60 border border-white/10 !bg-transparent",
              label: "text-white/60",
              input: "text-white",
            }}
          />

          <Button
            color="primary"
            className="mt-2 h-12 rounded-2xl text-base font-semibold "
            type="submit"
            isLoading={isSubmitting || status === "loading"}
            disabled={isSubmitting || status === "loading"}
          >
            {status === "success"
              ? "Sent!"
              : status === "error"
              ? "Try Again"
              : "Send"}
          </Button>

          {status === "success" && (
            <p className="text-green-400 text-sm">Message sent successfully.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">
              Failed to send message. Please verify your details and try again.
            </p>
          )}
        </form>
      )}
    </Formik>
  );
};
