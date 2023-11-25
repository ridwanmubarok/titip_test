"use client";

import Hstack from "@/components/Stacks/Hstack";
import Stack from "@/components/Stacks/Stack";
import VStack from "@/components/Stacks/Vstack";
import Button from "@/components/atoms/Button";
import PasswordInput from "@/components/forms/PasswordInput";
import TextInput from "@/components/forms/TextInput";
import useAuth from "@/stores/Auth";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

export default function Page() {
  const { Login,loading } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email('format must be valid '),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        await Login(values);
        router.push("/dashboard");
      } catch (error) {}
    },
  });

  return (
    <Stack className="grid grid-cols-12 h-screen p-3">
      
      <Stack className="col-span-4 overflow-hidden shadow-lg flex rounded-lg bg-cover bg-[url('https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <VStack className="justify-center bg-gray-800 bg-opacity-50 w-full">
            <Hstack className="justify-center items-center">
                <i className="fi fi-rr-sailboat text-[3.2rem] me-2 border-r px-3"></i>
                <VStack className="justify-center h-full mt-5">
                  <span className="font-bold text-[2rem] text-white leading-3">FLEET</span>
                  <span className="font-bold text-[2rem] text-white">MONITORING</span>
                </VStack>
            </Hstack>
        </VStack>
      </Stack>

      <VStack className="col-span-8 mx-auto my-auto">

        <Hstack className="grow py-8 mb-10">
          <h1 className="text-[3.5rem] text-black font-bold leading-none">Sign in <br/> to your account</h1>
        </Hstack>

        <VStack className="gap-5">
          <TextInput name="email" label="Email" onChange={formik.handleChange} error={formik.errors.email} placeholder="Email"/>
          <PasswordInput name="password" onChange={formik.handleChange} error={formik.errors.password} label="Password" placeholder="password"/>
        </VStack>

        <Hstack className="justify-end mt-20">
          <Button loading={loading ? true : false} onClick={() => formik.handleSubmit()} variant="primary" size="medium">
            <i className="fi fi-rr-sign-in-alt me-3 mt-1"></i>
            LOGIN
          </Button>
        </Hstack>

      </VStack>
      
    </Stack>
  )
}
