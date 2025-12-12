/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useActionState, useEffect, useRef, useState } from "react";
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
import { createListing, updateListing } from "@/services/guide/tourManagement";
import { ITour } from "@/types/tour.interface";

interface TourFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  tour?: Partial<ITour> | null;
}

export default function TourFormDialog({
  open,
  onClose,
  onSuccess,
  tour,
}: TourFormDialogProps) {
  const isEdit = !!tour?.id;

  // form ref & file input ref
  const formRef = useRef<HTMLFormElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  // languages tag input
  const [languages, setLanguages] = useState<string[]>(tour?.language ?? []);
  const [languageInput, setLanguageInput] = useState("");
  const [category, setCategory] = useState(tour?.category ?? "");

  console.log(category)

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    () => (tour as any)?.image ?? null
  );

  useEffect(() => {
 queueMicrotask(() => setCategory(tour?.category ?? "")); // important for update
}, [tour]);

  // action state
  const actionFn =
    isEdit && tour?.id ? updateListing.bind(null, tour.id) : createListing;
  const [state, formAction, pending] = useActionState(actionFn, null);

  // preview file effect
  useEffect(() => {
    if (!selectedFile) return;
    const url = URL.createObjectURL(selectedFile);

    // Wrap setState in microtask to avoid synchronous setState warning
    queueMicrotask(() => setPreviewUrl(url));

    return () => URL.revokeObjectURL(url);
  }, [selectedFile]);

  

  // reset on open or tour change
  useEffect(() => {
    queueMicrotask(() => {
      setLanguages(tour?.language ?? []);
      setLanguageInput("");
      setSelectedFile(null);
      setPreviewUrl((tour as any)?.image ?? null);
    });
  }, [open, tour]);

  // server state effect
  useEffect(() => {
    if (!state) return;
    if (state.success) {
      toast.success(state.message || "Saved successfully");
      formRef.current?.reset();
      queueMicrotask(() => {
        setLanguages([]);
        setSelectedFile(null);
        setPreviewUrl(null);
      });
      onSuccess();
      onClose();
    } else {
      toast.error(state.message || "Save failed");
    }
  }, [state, onSuccess, onClose]);

  // language helpers
  const addLanguage = (value?: string) => {
    const v = (value ?? languageInput).trim();
    if (!v) return;
    setLanguages((prev) => Array.from(new Set([...prev, v])));
    setLanguageInput("");
  };
  const removeLanguage = (val: string) =>
    setLanguages((prev) => prev.filter((p) => p !== val));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setSelectedFile(file);
  };

  const handleClose = () => {
    formRef.current?.reset();
    setLanguages([]);
    setLanguageInput("");
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileRef.current) fileRef.current.value = "";
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] w-[700px] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>{isEdit ? "Edit Tour" : "Create Tour"}</DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          action={formAction}
          method="post"
          encType="multipart/form-data"
          className="flex flex-col flex-1 min-h-0"
        >
          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
            {/* Title / Location */}
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input
                  id="title"
                  name="title"
                  defaultValue={tour?.title ?? ""}
                  placeholder="A Fantastic Tour of Old Dhaka"
                />
                <InputFieldError state={state} field="title" />
              </Field>

              <Field>
                <FieldLabel htmlFor="location">Location</FieldLabel>
                <Input
                  id="location"
                  name="location"
                  defaultValue={tour?.location ?? ""}
                  placeholder="Dhaka, Bangladesh"
                />
                <InputFieldError state={state} field="location" />
              </Field>
            </div>

            {/* Description */}
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Textarea
                id="description"
                name="description"
                defaultValue={tour?.description ?? ""}
                rows={4}
                placeholder="Describe your tour..."
              />
              <InputFieldError state={state} field="description" />
            </Field>

            {/* Price / Max Group Size */}
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="price">Price (BDT)</FieldLabel>
                <Input
                  id="price"
                  name="price"
                  defaultValue={String(tour?.price ?? 0)}
                  type="number"
                  min={0}
                />
                <InputFieldError state={state} field="price" />
              </Field>

              <Field>
                <FieldLabel htmlFor="maxGroupSize">Max Group Size</FieldLabel>
                <Input
                  id="maxGroupSize"
                  name="maxGroupSize"
                  defaultValue={String(tour?.maxGroupSize ?? 0)}
                  type="number"
                  min={1}
                />
                <InputFieldError state={state} field="maxGroupSize" />
              </Field>
            </div>

            {/* Duration / Category */}
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="duration">Duration</FieldLabel>
                <Input
                  id="duration"
                  name="duration"
                  defaultValue={tour?.duration ?? ""}
                  placeholder="4 hours"
                />
                <InputFieldError state={state} field="duration" />
              </Field>

              <Field>
                <FieldLabel htmlFor="category">Category</FieldLabel>

                {/* hidden input for FormData */}
                <input
                  type="hidden"
                  id="category"
                  name="category"
                  value={category}
                />

                <Select
                  value={category}
                  onValueChange={(val) => setCategory(val)}
                >
                  <SelectTrigger>
                    <SelectValue defaultValue={category} placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Culture">Culture</SelectItem>
                    <SelectItem value="Adventure">Adventure</SelectItem>
                    <SelectItem value="Food">Food</SelectItem>
                    <SelectItem value="Nature">Nature</SelectItem>
                  </SelectContent>
                </Select>

                <InputFieldError state={state} field="category" />
              </Field>
            </div>

            {/* Languages (tag input) */}
            <Field>
              <FieldLabel>Languages</FieldLabel>
              <input
                type="hidden"
                name="language"
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
                  placeholder="Type language and press Enter (e.g., English)"
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
              <InputFieldError state={state} field="language" />
            </Field>

            {/* Image Upload */}
            <Field>
              <FieldLabel htmlFor="file">Tour Image</FieldLabel>
              <div className="flex items-center gap-4">
                <div>
                  {previewUrl ? (
                    <Image
                      src={previewUrl!}
                      alt="preview"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                  ) : (
                    <div className="h-20 w-20 rounded-lg bg-muted/40 flex items-center justify-center">
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
              <InputFieldError state={state} field="images" />
            </Field>
          </div>

          {/* Footer Buttons */}
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
              {pending ? "Saving..." : isEdit ? "Update Tour" : "Create Tour"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
