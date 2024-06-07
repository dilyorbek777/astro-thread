
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Textarea } from "../ui/textarea"

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }), message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
})

export function Contact() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    const res = await fetch("https://astrothreads.free.beeceptor.com/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(r=>r.json())
    console.log(res);

    if (res.id) {
      alert("Successfully sent")      
      location.reload()
    }
    
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2 space-y-6 px-16 max-md:w-full">
        <h1 className="text-center text-5xl font-bold tracking-wide text-primary">Contact us</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John " {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@e-mail.com" type="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your message</FormLabel>
              <FormControl>

                <Textarea placeholder="Type your message here."  {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button aria-label="to submit the form" type="submit">Submit</Button>
      </form>
    </Form>
  )
}

// "use client"

// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { useState } from "react"

// export function Contact() {

//   const [form, setForm]= useState({})

//   return (
//     <section className="w-full bg-background py-12 md:py-24 lg:py-32 flex justify-center">
//       <div className="container grid items-center gap-8 px-4 md:px-6">
//         <div className="space-y-3 text-center">
//           <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact us</h2>

//         </div>
//         <div className="w-full max-w-md mx-auto space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Name</Label>
//             <Input id="name" placeholder="Enter your name" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" placeholder="Enter your email" type="email" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="message">Message</Label>
//             <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
//           </div>
//           <Button className="w-full">Send Message</Button>
//         </div>
//       </div>
//     </section>
//   )
// }