import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { LuCirclePlus, LuCircleX, LuSunMoon } from "react-icons/lu";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { z } from "zod";
import { BACKEND_URL } from "../../lib";
import { PollValidator } from "../../lib/validators/PollValidator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";

import Loading from "@/components/Loading";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Poll } from "lib/types";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../../lib/utils";

const Edit = () => {
  const { pollId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["edit"],
    queryFn: async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/polls/${pollId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (res.status !== 200) {
          throw new Error(res.data);
        }

        return res.data as Poll;
      } catch (error) {
        if (error instanceof Error) {
          toast(error.message);
        }
        if (error instanceof AxiosError) {
          toast(error.response?.data);
        }
      }
    },
  });

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (
    type: "hour" | "minute" | "ampm",
    value: string
  ) => {
    if (date) {
      const newDate = new Date(date);
      if (type === "hour") {
        newDate.setHours(
          (parseInt(value) % 12) + (newDate.getHours() >= 12 ? 12 : 0)
        );
      } else if (type === "minute") {
        newDate.setMinutes(parseInt(value));
      } else if (type === "ampm") {
        const currentHours = newDate.getHours();
        newDate.setHours(
          value === "PM" ? currentHours + 12 : currentHours - 12
        );
      }
      setDate(newDate);
    }
  };

  const form = useForm<z.infer<typeof PollValidator>>({
    resolver: zodResolver(PollValidator),
    defaultValues: {
      title: "",
      options: [
        {
          id: uuid(),
          name: "",
        },

        {
          id: uuid(),
          name: "",
        },
        {
          id: uuid(),
          name: "",
        },
      ],
    },
  });

  useEffect(() => {
    form.reset({
      title: data?.title,
      options: data?.options,
    });

    if (Array.isArray(data?.ending)) {
      const [year, month, day, hour, minute] = data.ending;
      const endingDate = new Date(year, month - 1, day, hour, minute);
      setDate(new Date(endingDate));
    } else {
      console.error("Invalid data format");
    }
  }, [data, form]);

  const { fields, append, remove } = useFieldArray({
    name: "options",
    control: form.control,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["edit-poll"],
    mutationFn: async (body: PollValidator) => {
      const res = await axios.put(
        `${BACKEND_URL}/api/v1/polls/edit/${pollId}`,
        { ...body, ending: date },

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status !== 200) {
        throw new Error(res.data);
      }
    },
    onSuccess() {
      toast("Poll Edited");
      navigate(`/polls/${data?.id}`);
    },
    onError(error) {
      if (error instanceof Error) {
        toast(error.message);
      }
      if (error instanceof AxiosError) {
        toast(JSON.stringify(Object.values(error?.response?.data)));
      }
    },
  });

  function onSubmit(values: z.infer<typeof PollValidator>) {
    mutate(values);
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : data ? (
        <div className="w-full max-w-4xl mx-auto pt-4 space-y-4">
          <h1 className="text-3xl font-bold"> Edit Poll</h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-8 flex flex-col"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Vote for me"
                        className="w-full h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col gap-2 justify-center">
                {fields.map((f, index) => (
                  <FormField
                    key={f.id}
                    control={form.control}
                    name={`options.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Option {index + 1}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input {...field} />
                            <LuCircleX
                              className="absolute right-4 top-2.5 z-20"
                              onClick={() => remove(index)}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "MM/dd/yyyy hh:mm aa")
                    ) : (
                      <span>MM/DD/YYYY hh:mm aa</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <div className="sm:flex">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateSelect}
                      initialFocus
                    />
                    <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                      <ScrollArea className="w-64 sm:w-auto">
                        <div className="flex sm:flex-col p-2">
                          {hours.reverse().map((hour) => (
                            <Button
                              key={hour}
                              size="icon"
                              variant={
                                date && date.getHours() % 12 === hour % 12
                                  ? "default"
                                  : "ghost"
                              }
                              className="sm:w-full shrink-0 aspect-square"
                              onClick={() =>
                                handleTimeChange("hour", hour.toString())
                              }
                            >
                              {hour}
                            </Button>
                          ))}
                        </div>
                        <ScrollBar
                          orientation="horizontal"
                          className="sm:hidden"
                        />
                      </ScrollArea>
                      <ScrollArea className="w-64 sm:w-auto">
                        <div className="flex sm:flex-col p-2">
                          {Array.from({ length: 12 }, (_, i) => i * 5).map(
                            (minute) => (
                              <Button
                                key={minute}
                                size="icon"
                                variant={
                                  date && date.getMinutes() === minute
                                    ? "default"
                                    : "ghost"
                                }
                                className="sm:w-full shrink-0 aspect-square"
                                onClick={() =>
                                  handleTimeChange("minute", minute.toString())
                                }
                              >
                                {minute}
                              </Button>
                            )
                          )}
                        </div>
                        <ScrollBar
                          orientation="horizontal"
                          className="sm:hidden"
                        />
                      </ScrollArea>
                      <ScrollArea className="">
                        <div className="flex sm:flex-col p-2">
                          {["AM", "PM"].map((ampm) => (
                            <Button
                              key={ampm}
                              size="icon"
                              variant={
                                date &&
                                ((ampm === "AM" && date.getHours() < 12) ||
                                  (ampm === "PM" && date.getHours() >= 12))
                                  ? "default"
                                  : "ghost"
                              }
                              className="sm:w-full shrink-0 aspect-square"
                              onClick={() => handleTimeChange("ampm", ampm)}
                            >
                              {ampm}
                            </Button>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <div className="w-full gap-4 flex items-center justify-between">
                <Button
                  type="button"
                  className="w-[100px]"
                  onClick={() => append({ id: uuid(), name: "" })}
                  disabled={fields.length === 5 || isPending}
                >
                  <LuCirclePlus className="size-10" />
                </Button>
                <Button
                  type="submit"
                  className="w-[200px]"
                  disabled={isPending}
                >
                  Edit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      ) : (
        <div className="flex w-full justify-center items-center flex-col">
          <LuSunMoon size={40} className="text-primary" />
          <h2 className="font-bold text-3xl">No data found</h2>
        </div>
      )}
    </>
  );
};

export default Edit;
