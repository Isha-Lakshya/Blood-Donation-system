import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import { Form } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import Navbar from "@/components/Navbar";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <Navbar />
      <section className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-md mx-auto p-6">
          <CardHeader>
            <CardTitle className="text-xl">Register</CardTitle>
            <CardDescription>Enter your information to create an account</CardDescription>
          </CardHeader>
          <Form method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Full Name */}
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Controller
                  name="fullName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => <Input id="fullName" placeholder="John Doe" {...field} />}
                />
              </div>

              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => <Input id="email" type="email" placeholder="john.doe@example.com" {...field} />}
                />
              </div>

              {/* Contact */}
              <div className="grid gap-2">
                <Label htmlFor="contact">Contact</Label>
                <Controller
                  name="contact"
                  control={control}
                  defaultValue=""
                  render={({ field }) => <Input id="contact" type="text" placeholder="Enter your contact number" {...field} />}
                />
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field}
                      />
                    )}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-3 flex items-center"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        {...field}
                      />
                    )}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-3 flex items-center"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Blood Group */}
              <div className="grid gap-2 mt-3">
                <Label htmlFor="bloodGroup">Blood Group</Label>
                <Controller
                  name="bloodGroup"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a blood group" />
                      </SelectTrigger>
                      <SelectContent className="bg-muted border border-primary">
                        <SelectGroup>
                          <SelectLabel>Blood Groups</SelectLabel>
                          <SelectItem value="A+">A+</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="O+">O+</SelectItem>
                          <SelectItem value="AB+">AB+</SelectItem>
                          <SelectItem value="A-">A-</SelectItem>
                          <SelectItem value="B-">B-</SelectItem>
                          <SelectItem value="O-">O-</SelectItem>
                          <SelectItem value="AB-">AB-</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Create an Account
              </Button>
            </div>
          </Form>
        </Card>
      </section>
    </div>
  );
};

export default RegisterPage;
