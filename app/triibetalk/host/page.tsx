"use client";

import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ArrowRight,
  Send,
  Check,
  Plus,
  ArrowLeft,
  CircleCheck,
  CircleCheckBig,
  ChevronDown,
  X,
  AlertCircle,
} from "lucide-react";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

const SHEET_URL = process.env.NEXT_PUBLIC_SHEET_URL!;

declare global {
  interface Window {
    google: any;
    initGoogleMaps: () => void;
  }
}

// --- Types for Form Data ---
interface Speaker {
  name: string;
  role: string;
  organisation: string;
  linkedin: string;
  category: "Established (Over 30)" | "Next-Gen" | "";
}

interface FormData {
  fullName: string;
  email: string;
  linkedin: string;
  organization: string;
  bio: string;
  readGuide: string;
  venueName: string;
  city: string;
  state: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  theme: string;
  description: string;
  speakers: Speaker[];
  eventDescription: string;
}

const HostEventPage = () => {
  const [emailTouched, setEmailTouched] = useState(false);
  const [linkedinTouched, setLinkedinTouched] = useState(false);
  const [endTimeTouched, setEndTimeTouched] = useState(false);
  const [dateTouched, setDateTouched] = useState(false);
  const [speakerLinkedinTouched, setSpeakerLinkedinTouched] = useState<
    boolean[]
  >([false]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const venueInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);
  const router = useRouter();
  const [step, setStep] = useState(1);
  // Load Google Maps script once
  useEffect(() => {
    if (document.getElementById("google-maps-script")) return;
    window.initGoogleMaps = () => {}; // placeholder, autocomplete init happens on step 2
    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initGoogleMaps`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  // Init autocomplete when step 2 mounts and input is available
  useEffect(() => {
    if (step !== 2) return;
    const tryInit = () => {
      if (!venueInputRef.current || !window.google?.maps?.places) return;
      if (autocompleteRef.current) return; // already initialized
      const ac = new window.google.maps.places.Autocomplete(
        venueInputRef.current,
        {
          types: ["establishment"],
          fields: ["name", "address_components", "formatted_address"],
        },
      );
      ac.addListener("place_changed", () => {
        const place = ac.getPlace();
        if (!place) return;
        const name = place.name || "";
        let city = "";
        let state = "";
        (place.address_components || []).forEach((comp: any) => {
          if (comp.types.includes("locality")) city = comp.long_name;
          if (comp.types.includes("administrative_area_level_1"))
            state = comp.long_name;
        });
        setFormData((prev) => ({
          ...prev,
          venueName: name,
          city: city || prev.city,
          state: state || prev.state,
        }));
      });
      autocompleteRef.current = ac;
    };
    // Poll until google is ready
    const interval = setInterval(() => {
      if (window.google?.maps?.places) {
        tryInit();
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [step]);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    linkedin: "",
    organization: "",
    bio: "",
    readGuide: "",
    venueName: "",
    city: "",
    state: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    eventDescription: "",
    theme: "",
    description: "",
    speakers: [
      {
        name: "",
        role: "",
        organisation: "",
        linkedin: "",
        category: "Next-Gen",
      },
    ],
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(formData.email);

  const isLinkedinValid = (url: string) =>
    url.startsWith("https://") && url.includes("www.linkedin.com/");

  const isHostLinkedinValid = isLinkedinValid(formData.linkedin);

  const isEndTimeValid =
    !formData.startTime ||
    !formData.endTime ||
    formData.endTime > formData.startTime;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const sixMonthsOut = new Date(today);
  sixMonthsOut.setMonth(sixMonthsOut.getMonth() + 6);
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const maxDateStr = `${sixMonthsOut.getFullYear()}-${String(sixMonthsOut.getMonth() + 1).padStart(2, "0")}-${String(sixMonthsOut.getDate()).padStart(2, "0")}`;

  const isDateValid =
    !formData.eventDate ||
    (formData.eventDate >= todayStr && formData.eventDate <= maxDateStr);

  const isStep3Valid = formData.speakers.every(
    (s) =>
      s.name.trim() !== "" &&
      s.role.trim() !== "" &&
      s.organisation.trim() !== "" &&
      isLinkedinValid(s.linkedin) &&
      formData.theme !== "",
  );

  const isStepValid = () => {
    if (step === 1) {
      return (
        formData.fullName.trim() !== "" &&
        isEmailValid &&
        isHostLinkedinValid &&
        formData.bio.trim() !== "" &&
        formData.readGuide === "Yes"
      );
    }

    if (step === 2) {
      return (
        formData.venueName.trim() !== "" &&
        formData.city.trim() !== "" &&
        formData.state.trim() !== "" &&
        formData.eventDate !== "" &&
        isDateValid &&
        formData.startTime !== "" &&
        formData.endTime !== "" &&
        isEndTimeValid
      );
    }

    if (step === 3) {
      return (
        formData.theme !== "" &&
        formData.eventDescription.trim() !== "" &&
        formData.speakers.every(
          (s) =>
            s.name.trim() !== "" &&
            s.role.trim() !== "" &&
            s.organisation.trim() !== "" &&
            isLinkedinValid(s.linkedin),
        )
      );
    }

    return true;
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const addSpeaker = () => {
    if (formData.speakers.length < 4) {
      setFormData({
        ...formData,
        speakers: [
          ...formData.speakers,
          {
            name: "",
            role: "",
            organisation: "",
            linkedin: "",
            category: "",
          },
        ],
      });
      setSpeakerLinkedinTouched([...speakerLinkedinTouched, false]);
    } else {
      alert("Maximum of 4 speakers allowed.");
    }
  };

  const removeSpeaker = (index: number) => {
    const updatedSpeakers = formData.speakers.filter((_, i) => i !== index);
    const updatedTouched = speakerLinkedinTouched.filter((_, i) => i !== index);
    setFormData({ ...formData, speakers: updatedSpeakers });
    setSpeakerLinkedinTouched(updatedTouched);
  };

  const updateSpeaker = (
    index: number,
    field: keyof Speaker,
    value: string,
  ) => {
    const updatedSpeakers = [...formData.speakers];
    updatedSpeakers[index] = { ...updatedSpeakers[index], [field]: value };
    setFormData({ ...formData, speakers: updatedSpeakers });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
    } finally {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }
  };

  const steps = [
    { id: 1, label: "Your Information" },
    { id: 2, label: "Event Location" },
    { id: 3, label: "Theme & Speakers" },
    { id: 4, label: "Review & Submit" },
  ];

  return (
    <main className=" min-h-screen ">
      <Header />

      {submitSuccess && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-6 px-4">
          <div className="w-16 h-16 rounded-full bg-[#D1FAE5] flex items-center justify-center">
            <CircleCheckBig size={32} className="text-[#1C5945]" />
          </div>
          <h2 className="text-2xl font-bold text-[#002C19] text-center">
            Request Submitted!
          </h2>
          <p className="text-gray-500 text-center max-w-sm">
            Thank you! We've received your event request and will be in touch
            soon.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-[#1C5945] text-white font-bold rounded-2xl hover:opacity-90 transition-all"
          >
            Back to Events
          </button>
        </div>
      )}

      <section className="pt-20  px-4 md:px-25 lg:px-50 bg-white">
        <div>
          <div className="flex items-center gap-4 mb-4 ">
            <button
              onClick={() => window.history.back()}
              className="cursor-pointer text-gray-500 flex items-center gap-1 text-sm hover:text-black transition-all"
            >
              <ArrowLeft size={16} /> Back to Events
            </button>
            <div className="h-4 w-[1px] bg-gray-300"></div>
            <h1 className="font-bold text-lg text-[#002C19]">Host an Event</h1>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-20 px-4 md:px-25 lg:px-50 bg-[#F9FAFB]">
        <div className="max-w-300 mx-auto">
          <div className="max-w-[600px] mx-auto">
            <div className="flex justify-between items-center mb-10 md:mb-16 relative w-full px-2">
              {steps.map((s, idx) => (
                <React.Fragment key={s.id}>
                  <div className="flex flex-col items-center relative z-10">
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                        step > s.id
                          ? "bg-[#1C5945] border-[#1C5945] text-white"
                          : step === s.id
                            ? "bg-[#1C5945] border-[#1C5945] text-white"
                            : "bg-gray-200 border-gray-200 text-gray-400"
                      }`}
                    >
                      {step > s.id ? (
                        <CircleCheckBig size={16} className="md:w-5 md:h-5" />
                      ) : (
                        <span className="text-xs md:text-sm font-bold">
                          {s.id}
                        </span>
                      )}
                    </div>

                    <span
                      className={`hidden md:block absolute -bottom-8 whitespace-nowrap text-[12px] font-medium  tracking-widest text-center ${
                        step === s.id ? "text-[#1C5945]" : "text-gray-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="flex-grow mx-2 md:mx-4">
                      <div
                        className={`h-[2px] w-full transition-all duration-500 ${
                          step > s.id ? "bg-[#1C5945]" : "bg-gray-200"
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="max-w-[720px] mx-auto">
            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-14">
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div>
                    <h2 className="text-3xl font-bold text-black mb-2">
                      Tell us about yourself
                    </h2>
                    <p className="text-gray-500">
                      We'd love to learn about you and your organization.
                    </p>
                  </div>
                  <div className="grid gap-6">
                    <InputField
                      label="Full Name *"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(v: string) =>
                        setFormData({ ...formData, fullName: v })
                      }
                    />
                    <InputField
                      label="Email Address *"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(v: string) => {
                        setFormData({ ...formData, email: v });
                        if (!emailTouched) setEmailTouched(true);
                      }}
                    />

                    {emailTouched &&
                      formData.email.length > 0 &&
                      !isEmailValid && (
                        <p className="text-red-500 text-xs font-medium ml-1 animate-in fade-in slide-in-from-top-1">
                          Please enter a valid email address
                        </p>
                      )}
                    <div className="flex flex-col gap-2">
                      <InputField
                        label="LinkedIn Profile *"
                        type="url"
                        placeholder="https://www.linkedin.com/in/username"
                        value={formData.linkedin}
                        onChange={(v: string) => {
                          setFormData({ ...formData, linkedin: v });
                          if (!linkedinTouched) setLinkedinTouched(true);
                        }}
                      />
                      {linkedinTouched &&
                        formData.linkedin.length > 0 &&
                        !isHostLinkedinValid && (
                          <p className="text-red-500 text-xs font-medium ml-1 animate-in fade-in slide-in-from-top-1">
                            Please enter a valid LinkedIn URL (e.g.
                            https://www.linkedin.com/in/username)
                          </p>
                        )}
                    </div>
                    <InputField
                      label="Organization"
                      placeholder="Your organization name"
                      value={formData.organization}
                      onChange={(v: string) =>
                        setFormData({ ...formData, organization: v })
                      }
                    />
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">
                        Short Bio *
                      </label>
                      <textarea
                        className="w-full p-4 rounded-2xl bg-white border border-gray-200 min-h-[140px] focus:ring-2 focus:ring-[#1C5945]/10 outline-none transition-all"
                        placeholder="Tell us a bit about yourself and why you want to host..."
                        value={formData.bio}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          setFormData({ ...formData, bio: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <label className="text-sm font-bold text-gray-700">
                          Have you read the guide? *
                        </label>
                        <a
                          href="https://drive.google.com/file/d/1rALrh5bjpWnbKq2AvxeudYOpPG7kFsZ-/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-[#1C5945] underline hover:opacity-70 transition-opacity"
                        >
                          View the guide here
                        </a>
                      </div>
                      <div className="flex gap-4">
                        {["Yes", "No"].map((option) => (
                          <label
                            key={option}
                            className="flex items-center gap-2 cursor-pointer group"
                          >
                            <div className="relative flex items-center justify-center">
                              <input
                                type="radio"
                                name="readGuide"
                                value={option}
                                checked={formData.readGuide === option}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    readGuide: e.target.value,
                                  })
                                }
                                className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-full checked:border-[#1C5945] transition-all"
                              />

                              <div className="absolute w-2.5 h-2.5 rounded-full bg-[#1C5945] opacity-0 peer-checked:opacity-100 transition-opacity" />
                            </div>
                            <span
                              className={`text-sm font-medium ${formData.readGuide === option ? "text-black" : "text-gray-500"}`}
                            >
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div>
                    <h2 className="text-3xl font-bold text-black mb-2">
                      Event Location & Time
                    </h2>
                    <p className="text-gray-500">
                      Where and when would you like to host the event?
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 relative">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">
                          Venue Name *
                        </label>
                        <input
                          ref={venueInputRef}
                          type="text"
                          placeholder="e.g. WeWork Midtown, NYC"
                          value={formData.venueName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              venueName: e.target.value,
                            })
                          }
                          className="w-full p-4 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-[#1C5945]/10 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <InputField
                      label="City *"
                      placeholder="New York"
                      value={formData.city}
                      onChange={(v: string) =>
                        setFormData({ ...formData, city: v })
                      }
                    />
                    <InputField
                      label="State *"
                      placeholder="New York"
                      value={formData.state}
                      onChange={(v: string) =>
                        setFormData({ ...formData, state: v })
                      }
                    />
                    <div className="col-span-2">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">
                          Event Date *
                        </label>
                        <input
                          type="date"
                          min={todayStr}
                          max={maxDateStr}
                          placeholder="MM-DD-YYYY"
                          value={formData.eventDate}
                          onChange={(v) => {
                            setFormData({
                              ...formData,
                              eventDate: v.target.value,
                            });
                            if (!dateTouched) setDateTouched(true);
                          }}
                          className="w-full p-4 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-[#1C5945]/10 outline-none transition-all"
                        />
                        {dateTouched && formData.eventDate && !isDateValid && (
                          <p className="text-red-500 text-xs font-medium ml-1 animate-in fade-in slide-in-from-top-1">
                            Event date must be today or within the next 6
                            months.
                          </p>
                        )}
                      </div>
                    </div>
                    <InputField
                      label="Start Time *"
                      type="time"
                      value={formData.startTime}
                      onChange={(v: string) =>
                        setFormData({ ...formData, startTime: v })
                      }
                    />
                    <div className="flex flex-col gap-2">
                      <InputField
                        label="End Time *"
                        type="time"
                        value={formData.endTime}
                        onChange={(v: string) => {
                          setFormData({ ...formData, endTime: v });
                          if (!endTimeTouched) setEndTimeTouched(true);
                        }}
                      />
                      {endTimeTouched &&
                        formData.endTime &&
                        !isEndTimeValid && (
                          <p className="text-red-500 text-xs font-medium ml-1 animate-in fade-in slide-in-from-top-1">
                            End time cannot be before start time.
                          </p>
                        )}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div>
                    <h2 className="text-3xl font-bold text-black mb-2">
                      Theme & Speakers
                    </h2>
                    <p className="text-gray-500">
                      What will your TRIIBE Talk be about and who will be
                      speaking?
                    </p>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold text-gray-700 block">
                      Theme *
                    </label>

                    <div className="relative min-h-[56px] w-full border border-gray-200 rounded-2xl bg-white flex items-center px-4 hover:border-gray-300 focus-within:ring-2 focus-within:ring-[#1C5945]/10 transition-all cursor-pointer">
                      <select
                        value={formData.theme}
                        onChange={(e) =>
                          setFormData({ ...formData, theme: e.target.value })
                        }
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                      >
                        <option value="" disabled>
                          Select a theme...
                        </option>
                        <option value="Food">Food</option>
                        <option value="Water">Water</option>
                        <option value="Shelter">Shelter</option>
                        <option value="Health">Health</option>
                        <option value="Education">Education</option>
                      </select>

                      <div className="flex items-center w-full z-10 pointer-events-none">
                        {!formData.theme ? (
                          <span className="text-gray-400 text-sm">
                            Select a theme...
                          </span>
                        ) : (
                          <span className="px-4 py-1.5 bg-[#D1FAE5] text-[#065F46] border border-[#1C5945]/30 rounded-full text-xs font-bold animate-in zoom-in-95 duration-200">
                            {formData.theme}
                          </span>
                        )}
                      </div>

                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 z-10">
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-700">
                      Event Description *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what attendees can expect..."
                      className="w-full p-4 rounded-2xl border border-gray-200 bg-white focus:ring-2 focus:ring-[#1C5945]/10 outline-none transition-all resize-none text-sm placeholder:text-[#30364180] mt-2"
                      value={formData.eventDescription}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          eventDescription: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-bold text-gray-700">
                        Speakers *
                      </label>
                    </div>
                    {formData.speakers.map((s, i) => {
                      const isLastSpeaker = i === formData.speakers.length - 1;
                      const isFirstSpeaker = i === 0;

                      return (
                        <div
                          key={i}
                          className="p-6 bg-[#F9FAFB] rounded-3xl border border-gray-100 space-y-4 mb-4"
                        >
                          <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0 text-xs font-medium text-black tracking-wide px-1">
                            <span>Speaker {i + 1} </span>
                            <span className="text-gray-900">
                              {isFirstSpeaker
                                ? "Next-Gen Changemaker"
                                : s.category === "Next-Gen"
                                  ? "Next-Gen Changemaker"
                                  : s.category === "Established (Over 30)"
                                    ? "Established"
                                    : ""}
                            </span>
                          </div>

                          <div className="space-y-3">
                            <input
                              className="w-full p-4 text-sm rounded-xl border border-gray-200 bg-white outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                              placeholder="Speaker name"
                              value={s.name}
                              onChange={(e) =>
                                updateSpeaker(i, "name", e.target.value)
                              }
                            />
                            <input
                              className="w-full p-4 text-sm rounded-xl border border-gray-200 bg-white outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                              placeholder="Title / Role"
                              value={s.role}
                              onChange={(e) =>
                                updateSpeaker(i, "role", e.target.value)
                              }
                            />
                            <input
                              className="w-full p-4 text-sm rounded-xl border border-gray-200 bg-white outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                              placeholder="Organization"
                              value={s.organisation}
                              onChange={(e) =>
                                updateSpeaker(i, "organisation", e.target.value)
                              }
                            />
                            <div className="flex flex-col gap-1">
                              <input
                                type="url"
                                className="w-full p-4 text-sm rounded-xl border border-gray-200 bg-white outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                                placeholder="https://www.linkedin.com/in/username"
                                value={s.linkedin}
                                onChange={(e) => {
                                  updateSpeaker(i, "linkedin", e.target.value);
                                  const updated = [...speakerLinkedinTouched];
                                  updated[i] = true;
                                  setSpeakerLinkedinTouched(updated);
                                }}
                              />
                              {speakerLinkedinTouched[i] &&
                                s.linkedin.length > 0 &&
                                !isLinkedinValid(s.linkedin) && (
                                  <p className="text-red-500 text-xs font-medium ml-1 animate-in fade-in slide-in-from-top-1">
                                    Please enter a valid LinkedIn URL (e.g.
                                    https://www.linkedin.com/in/username)
                                  </p>
                                )}
                            </div>
                          </div>

                          {!isFirstSpeaker && (
                            <div className="flex flex-col gap-4 pt-2">
                              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                {[
                                  {
                                    id: "Established (Over 30)",
                                    label: "Established (Over 30)",
                                  },
                                  { id: "Next-Gen", label: "Next-Gen" },
                                ].map((option) => {
                                  const countOfType =
                                    formData.speakers.filter(
                                      (sp, si) =>
                                        si !== i && sp.category === option.id,
                                    ).length +
                                    (i === 0 && option.id === "Next-Gen"
                                      ? 1
                                      : 0);
                                  const wouldExceedLimit =
                                    s.category !== option.id &&
                                    countOfType >= 2;
                                  return (
                                    <label
                                      key={option.id}
                                      className="flex items-center gap-2 cursor-pointer group"
                                    >
                                      <div className="relative flex items-center justify-center">
                                        <input
                                          type="radio"
                                          name={`category-${i}`}
                                          checked={s.category === option.id}
                                          onChange={() => {
                                            if (!wouldExceedLimit) {
                                              updateSpeaker(
                                                i,
                                                "category",
                                                option.id,
                                              );
                                            }
                                          }}
                                          className="peer appearance-none w-4 h-4 border border-gray-400 rounded-full checked:border-black transition-all"
                                        />
                                        <div className="absolute w-2 h-2 rounded-full bg-black opacity-0 peer-checked:opacity-100 transition-opacity" />
                                      </div>
                                      <span
                                        className={`text-sm ${
                                          s.category === option.id
                                            ? "text-black font-medium"
                                            : wouldExceedLimit
                                              ? "text-gray-300"
                                              : "text-gray-500"
                                        }`}
                                      >
                                        {option.label}
                                      </span>
                                    </label>
                                  );
                                })}
                              </div>
                              {(() => {
                                const establishedCount =
                                  formData.speakers.filter(
                                    (sp) =>
                                      sp.category === "Established (Over 30)",
                                  ).length;
                                const nextGenCount =
                                  formData.speakers.filter(
                                    (sp) => sp.category === "Next-Gen",
                                  ).length + 1; // +1 for speaker 1
                                if (
                                  establishedCount >= 2 ||
                                  nextGenCount >= 3
                                ) {
                                  return (
                                    <p className="text-amber-600 text-xs font-medium ml-1 animate-in fade-in slide-in-from-top-1">
                                      There is a maximum of two Established and
                                      two Next-Gen speakers in any TRIIBE Talk.
                                    </p>
                                  );
                                }
                                return null;
                              })()}
                            </div>
                          )}

                          <div className="flex justify-between items-center pt-1">
                            <div>
                              {!isFirstSpeaker && (
                                <button
                                  type="button"
                                  onClick={() => removeSpeaker(i)}
                                  className="text-red-400 hover:text-red-600 font-bold text-sm transition-all"
                                >
                                  − Remove Speaker
                                </button>
                              )}
                            </div>
                            {isLastSpeaker && (
                              <button
                                type="button"
                                onClick={addSpeaker}
                                disabled={formData.speakers.length >= 4}
                                className={`font-bold text-sm transition-all ${
                                  formData.speakers.length >= 4
                                    ? "text-gray-500 cursor-not-allowed"
                                    : "text-[#1C5945] hover:opacity-80"
                                }`}
                              >
                                {formData.speakers.length >= 4
                                  ? "Only 4 speakers allowed"
                                  : "+ Add Speaker"}
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div>
                    <h2 className="text-2xl font-bold text-[#002C19] mb-2">
                      Review Your Request
                    </h2>
                    <p className="text-sm text-gray-500 mb-8">
                      Please review all details before submitting.
                    </p>
                  </div>

                  <ReviewSection
                    title="Host Information"
                    data={[
                      { l: "Name", v: formData.fullName },
                      { l: "Email", v: formData.email },
                      { l: "LinkedIn", v: formData.linkedin },
                      { l: "Organization", v: formData.organization },
                      { l: "Bio", v: formData.bio },
                    ]}
                  />

                  <ReviewSection
                    title="Event Location & Time"
                    showMap={true}
                    mapQuery={`${formData.venueName}, ${formData.city}, ${formData.state}`}
                    data={[
                      { l: "Venue", v: formData.venueName },
                      {
                        l: "Location",
                        v: `${formData.city}, ${formData.state}`,
                      },
                      { l: "Date", v: formData.eventDate },
                      {
                        l: "Time",
                        v: `${formData.startTime} - ${formData.endTime}`,
                      },
                    ]}
                  />

                  <ReviewSection
                    title="Theme & Speakers"
                    theme={formData.theme}
                    description={formData.eventDescription}
                    speakers={formData.speakers}
                    venue={formData.venueName}
                    city={formData.city}
                  />
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-12 pt-8 border-t border-gray-100">
                <button
                  onClick={prevStep}
                  className="flex items-center justify-center gap-2 px-6 py-4 text-gray-500 font-bold hover:text-black transition-all order-2 md:order-1"
                >
                  <ArrowLeft size={18} /> Back
                </button>

                <button
                  onClick={step === 4 ? handleSubmit : nextStep}
                  disabled={!isStepValid() || isSubmitting}
                  className={`flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-bold transition-all duration-300 order-1 md:order-2 ${
                    isStepValid() && !isSubmitting
                      ? "bg-[#1C5945] text-white cursor-pointer"
                      : "bg-[#E5E7EB] text-[#30364166] cursor-not-allowed"
                  }`}
                >
                  {step === 4 ? (
                    <>
                      <Send size={18} />{" "}
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </>
                  ) : (
                    <>
                      Continue <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: InputFieldProps) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-bold text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      className="w-full p-4 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-[#1C5945]/10 outline-none transition-all"
    />
  </div>
);

const ReviewSection = ({
  title,
  data,
  showMap = false,
  mapQuery,
  theme,
  description,
  speakers,
  venue,
  city,
}: {
  title: string;
  data?: { l: string; v: string }[];
  showMap?: boolean;
  mapQuery?: string;
  theme?: string;
  description?: string;
  speakers?: Speaker[];
  venue?: string;
  city?: string;
}) => (
  <div className="p-8 bg-[#F9FAFB] rounded-[32px] border border-gray-100">
    <h4 className="text-[14px] font-bold text-[#1C5945]  mb-2 ">{title}</h4>
    <div className="flex justify-between gap-6 items-center">
      <div className="space-y-3 flex-1">
        {data?.map((item, i) => (
          <p key={i} className="text-sm text-gray-600">
            <span className="font-bold text-gray-900">{item.l}:</span>{" "}
            {item.v || "Not provided"}
          </p>
        ))}

        {theme && (
          <div className="space-y-4 mt-0">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">Topic:</span> {theme}
            </p>

            {description && (
              <p className="text-sm text-gray-600">
                <span className="font-bold text-gray-900">Description:</span>{" "}
                {description}
              </p>
            )}
            {speakers && (
              <div className="space-y-1">
                <p className="text-sm font-bold text-gray-900">Speakers:</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  •{" "}
                  {speakers
                    .map((s) => s.name)
                    .filter((n) => n.trim() !== "")
                    .join(", ")}{" "}
                  at {venue || "Venue"}, {city || "City"}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {showMap && mapQuery && (
        <div className="hidden md:block w-[200px] h-[140px] rounded-[24px] overflow-hidden flex-shrink-0">
          <iframe
            width="200"
            height="140"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(mapQuery)}`}
          />
        </div>
      )}
    </div>
  </div>
);

export default HostEventPage;
