"use client";

import { Button, Input, Textarea } from "@heroui/react";

export const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4 rounded-[2.5rem] border border-white/10 bg-[#0E0E12] p-6 text-white shadow-[0_20px_55px_-35px_rgba(0,0,0,0.7)] sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="First Name"
          placeholder="First Name"
          variant="flat"
          classNames={{
            inputWrapper: "bg-black/60 border border-white/10",
            label: "text-white/60",
            input: "text-white",
          }}
        />
        <Input
          label="Last Name"
          placeholder="Last Name"
          variant="flat"
          classNames={{
            inputWrapper: "bg-black/60 border border-white/10",
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
        classNames={{
          inputWrapper: "bg-black/60 border border-white/10",
          label: "text-white/60",
          input: "text-white",
        }}
      />

      <Input
        label="Company"
        placeholder="Company"
        variant="flat"
        classNames={{
          inputWrapper: "bg-black/60 border border-white/10",
          label: "text-white/60",
          input: "text-white",
        }}
      />

      <div className="grid gap-4 sm:grid-cols-[8rem_1fr]">
        <Input
          label="Country Code"
          placeholder="+1"
          variant="flat"
          classNames={{
            inputWrapper: "bg-black/60 border border-white/10",
            label: "text-white/60",
            input: "text-white",
          }}
        />
        <Input
          label="Phone Number"
          placeholder="Phone Number"
          variant="flat"
          classNames={{
            inputWrapper: "bg-black/60 border border-white/10",
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
        classNames={{
          inputWrapper: "bg-black/60 border border-white/10",
          label: "text-white/60",
          input: "text-white",
        }}
      />

      <Button
        color="primary"
        className="mt-2 h-12 rounded-2xl text-base font-semibold shadow-[0_20px_45px_rgba(10,132,255,0.35)]"
      >
        Send
      </Button>
    </form>
  );
};

