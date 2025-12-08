/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, {
  useActionState,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputFieldError from "@/components/shared/InputFieldError";
import { toast } from "sonner";
import type { IGuide } from "@/types/guide.interface";
import { createGuide, updateGuide } from "@/services/admin/guidesManagement";

type Gender = "MALE" | "FEMALE";

interface GuideFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  guide?: Partial<IGuide> | null;
}

export default function GuideFormDialog({
  open,
  onClose,
  onSuccess,
  guide,
}: GuideFormDialogProps) {
  const isEdit = !!guide?.id;

  // form ref & file input ref
  const formRef = useRef<HTMLFormElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  // tag inputs
  const [languages, setLanguages] = useState<string[]>(
    () => (guide as any)?.languages ?? []
  );
  const [languageInput, setLanguageInput] = useState("");
  const [skills, setSkills] = useState<string[]>(
    () => (guide as any)?.skills ?? []
  );
  const [skillInput, setSkillInput] = useState("");

  // preview file
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    () => (guide as any)?.profilePhoto ?? null
  );

  // gender local state (keeps Select controlled)
  const [gender, setGender] = useState<Gender>(
    (guide?.gender as Gender) ?? "MALE"
  );

  // useActionState: bind updateGuide to id when editing
  const actionFn =
    isEdit && guide?.id ? updateGuide.bind(null, guide.id) : createGuide;
  const [state, formAction, pending] = useActionState(actionFn, null);

  // Keep preview in sync when user chooses file
  useEffect(() => {
    if (!selectedFile) return;
    const url = URL.createObjectURL(selectedFile);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [selectedFile]);

  // When dialog opens or guide changes, reset internal tag states and preview
  useEffect(() => {
    setLanguages((guide as any)?.languages ?? []);
    setSkills((guide as any)?.skills ?? []);
    setLanguageInput("");
    setSkillInput("");
    setSelectedFile(null);
    setPreviewUrl((guide as any)?.profilePhoto ?? null);
    setGender((guide?.gender as Gender) ?? "MALE");
    if (fileRef.current) fileRef.current.value = "";
  }, [open, guide]);

  // react to server action state (success / error)
  useEffect(() => {
    if (!state) return;
    if (state.success) {
      toast.success(state.message || "Saved successfully");
      formRef.current?.reset();
      setLanguages([]);
      setSkills([]);
      setSelectedFile(null);
      onSuccess();
      onClose();
    } else {
      // display server error message
      toast.error(state.message || "Save failed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  // helpers for tag inputs
  const addLanguage = (value?: string) => {
    const v = (value ?? languageInput).trim();
    if (!v) return;
    setLanguages((prev) => Array.from(new Set([...prev, v])));
    setLanguageInput("");
  };
  const removeLanguage = (val: string) =>
    setLanguages((prev) => prev.filter((p) => p !== val));

  const addSkill = (value?: string) => {
    const v = (value ?? skillInput).trim();
    if (!v) return;
    setSkills((prev) => Array.from(new Set([...prev, v])));
    setSkillInput("");
  };
  const removeSkill = (val: string) =>
    setSkills((prev) => prev.filter((p) => p !== val));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setSelectedFile(file);
  };

  const handleClose = () => {
    formRef.current?.reset();
    setLanguages([]);
    setSkills([]);
    setLanguageInput("");
    setSkillInput("");
    setSelectedFile(null);
    setPreviewUrl(null);
    setGender((guide?.gender as Gender) ?? "MALE");

    if (fileRef.current) fileRef.current.value = "";
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] w-[800px] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>{isEdit ? "Edit Guide" : "Create Guide"}</DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          action={formAction}
          method="post"
          encType="multipart/form-data"
          className="flex flex-col flex-1 min-h-0"
        >
          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
            {/* row: name / email */}
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  defaultValue={guide?.name ?? ""}
                  placeholder="Rahim Uddin"
                />
                <InputFieldError state={state} field="name" />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={guide?.email ?? ""}
                  placeholder="guide@example.com"
                  disabled={isEdit}
                />
                <InputFieldError state={state} field="email" />
              </Field>
            </div>

            {/* password / confirm (only create) */}
            {!isEdit && (
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                  />
                  <InputFieldError state={state} field="password" />
                </Field>

                <Field>
                  <FieldLabel htmlFor="confirmPassword">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                  />
                  <InputFieldError state={state} field="confirmPassword" />
                </Field>
              </div>
            )}

            {/* contact / gender */}
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="contactNumber">Contact Number</FieldLabel>
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  defaultValue={guide?.contactNumber ?? ""}
                  placeholder="017xxxxxxxx"
                />
                <InputFieldError state={state} field="contactNumber" />
              </Field>

              <Field>
                <FieldLabel htmlFor="gender">Gender</FieldLabel>
                {/* keep a hidden input so FormData contains gender value */}
                <input type="hidden" name="gender" value={gender} />
                <Select
                  value={gender}
                  onValueChange={(val) => setGender(val as Gender)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MALE">Male</SelectItem>
                    <SelectItem value="FEMALE">Female</SelectItem>
                  </SelectContent>
                </Select>
                <InputFieldError state={state} field="gender" />
              </Field>
            </div>

            {/* address / district */}
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="address">Address</FieldLabel>
                <Input
                  id="address"
                  name="address"
                  defaultValue={guide?.address ?? ""}
                  placeholder="House 12, Road 8, Sylhet"
                />
                <InputFieldError state={state} field="address" />
              </Field>

              <Field>
                <FieldLabel htmlFor="district">District</FieldLabel>
                <Input
                  id="district"
                  name="district"
                  defaultValue={(guide as any)?.district ?? ""}
                  placeholder="Sylhet"
                />
                <InputFieldError state={state} field="district" />
              </Field>
            </div>

            {/* reg no / experience */}
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="registrationNumber">
                  Registration Number
                </FieldLabel>
                <Input
                  id="registrationNumber"
                  name="registrationNumber"
                  defaultValue={guide?.registrationNumber ?? ""}
                  placeholder="REG-20225-0013ew"
                />
                <InputFieldError state={state} field="registrationNumber" />
              </Field>

              <Field>
                <FieldLabel htmlFor="experience">Experience (years)</FieldLabel>
                <Input
                  id="experience"
                  name="experience"
                  defaultValue={String(guide?.experience ?? 0)}
                  type="number"
                  min={0}
                />
                <InputFieldError state={state} field="experience" />
              </Field>
            </div>

            {/* guideFee / qualification */}
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="guideFee">Guide Fee (BDT)</FieldLabel>
                <Input
                  id="guideFee"
                  name="guideFee"
                  defaultValue={String((guide as any)?.guideFee ?? 0)}
                  type="number"
                  min={0}
                />
                <InputFieldError state={state} field="guideFee" />
              </Field>

              <Field>
                <FieldLabel htmlFor="qualification">Qualification</FieldLabel>
                <Input
                  id="qualification"
                  name="qualification"
                  defaultValue={guide?.qualification ?? ""}
                />
                <InputFieldError state={state} field="qualification" />
              </Field>
            </div>

            {/* currentWorkingPlace */}
            <Field>
              <FieldLabel htmlFor="currentWorkingPlace">
                Current Working Place
              </FieldLabel>
              <Input
                id="currentWorkingPlace"
                name="currentWorkingPlace"
                defaultValue={guide?.currentWorkingPlace ?? ""}
                placeholder="Sylhet Local Tourism Center"
              />
              <InputFieldError state={state} field="currentWorkingPlace" />
            </Field>

            {/* about */}
            <Field>
              <FieldLabel htmlFor="about">About</FieldLabel>
              <Textarea
                id="about"
                name="about"
                defaultValue={(guide as any)?.about ?? ""}
                rows={4}
                placeholder="Short bio about the guide..."
              />
              <InputFieldError state={state} field="about" />
            </Field>

            {/* languages (tag input style A: type + Enter) */}
            <Field>
              <FieldLabel>Languages</FieldLabel>

              {/* hidden input so server receives JSON string of languages */}
              <input
                type="hidden"
                name="languages"
                value={JSON.stringify(languages)}
              />

              <div className="flex gap-2 items-center">
                <input
                  value={languageInput}
                  onChange={(e) => setLanguageInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addLanguage();
                    }
                  }}
                  placeholder="Type language and press Enter (e.g., Bangla)"
                  className="flex-1 rounded-md border px-2 py-1"
                />
                <Button type="button" onClick={() => addLanguage()} size="sm">
                  Add
                </Button>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm"
                  >
                    <span>{lang}</span>
                    <button
                      type="button"
                      onClick={() => removeLanguage(lang)}
                      className="text-xs opacity-80"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <InputFieldError state={state} field="languages" />
            </Field>

            {/* skills (tag input) */}
            <Field>
              <FieldLabel>Skills</FieldLabel>

              <input
                type="hidden"
                name="skills"
                value={JSON.stringify(skills)}
              />

              <div className="flex gap-2 items-center">
                <input
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSkill();
                    }
                  }}
                  placeholder="Type skill and press Enter (e.g., Photography)"
                  className="flex-1 rounded-md border px-2 py-1"
                />
                <Button type="button" onClick={() => addSkill()} size="sm">
                  Add
                </Button>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm"
                  >
                    <span>{s}</span>
                    <button
                      type="button"
                      onClick={() => removeSkill(s)}
                      className="text-xs opacity-80"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <InputFieldError state={state} field="skills" />
            </Field>

            {/* profile photo (only create) */}
            {!isEdit && (
              <Field>
                <FieldLabel htmlFor="file">Profile Photo</FieldLabel>
                <div className="flex items-center gap-4">
                  <div>
                    {previewUrl ? (
                      // ensure external domains allowed in next.config.js if needed
                      // using Image with external url requires domains config; local preview will work
                      <Image
                        src={previewUrl!}
                        alt="preview"
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="h-20 w-20 rounded-full bg-muted/40 flex items-center justify-center">
                        No Image
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <input
                      ref={fileRef}
                      id="file"
                      name="file"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <p className="text-xs mt-1 text-muted-foreground">
                      Recommended: square image up to 2MB
                    </p>
                  </div>
                </div>

                <InputFieldError state={state} field="profilePhoto" />
              </Field>
            )}
          </div>

          <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={pending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={pending}>
              {pending ? "Saving..." : isEdit ? "Update Guide" : "Create Guide"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
